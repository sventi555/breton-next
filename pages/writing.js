import { promises as fs } from 'fs';
import path from 'path';

import Markdown from 'markdown-it';
import Head from 'next/head';
import YAML from 'yaml';

import Navbar from '../components/navbar';
import styles from './writing.module.css';

const md = new Markdown({ html: true });

export default function Writing(props) {
    return (
        <div>
            <Head>
                <title>bretonlikethecrackers</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="flex flex-col">
                <h2 className="m-5">stuff i just wrote</h2>
                <div className={`${styles['writing-body']} mx-5`} dangerouslySetInnerHTML={{__html:md.render(props.body)}}></div>
                <div className="m-5">
                    <h3 className="mb-3">links to stuff</h3>
                    <ul className="ml-4 list-disc">
                        {props.links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <p className="text-lg">{link.description}</p>
                                    <a className="ml-3 text-blue-500 overflow-x-hide" href={link.link}>{link.link}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const writingData = YAML.parse(await fs.readFile(path.join(process.cwd(), '_site/pages/writing.yml'), 'utf8'));

    return {
        props: writingData
    };
}
