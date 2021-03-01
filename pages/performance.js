import { promises as fs } from 'fs';
import path from 'path';

import Head from 'next/head';
import YAML from 'yaml';

import Navbar from '../components/navbar';
import styles from './performance.module.css';

export default function Performance(props) {
    return (
        <div>
            <Head>
                <title>bretonlikethecrackers</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="flex items-start flex-col xl:flex-row">
                <img className={`${styles.resume} mx-auto my-5 xl:m-5`} src={props.resume.replace('/public', '')} />
                <div className="m-5 md:m-10">
                    <h3 className="mb-3">links to stuff</h3>
                    <ul className="ml-4 list-disc">
                        {props.links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <p className="text-lg">{link.description}</p>
                                    <a className="ml-3 text-blue-500 overflow-x-scroll" href={link.link}>{link.link}</a>
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
    const performanceData = YAML.parse(await fs.readFile(path.join(process.cwd(), '_site/pages/performance.yml'), 'utf8'));

    return {
        props: performanceData
    };
}
