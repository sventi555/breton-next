import { promises as fs } from 'fs';
import path from 'path';

import Head from 'next/head';
import YAML from 'yaml';

import Navbar from '../components/navbar';

export default function Hello(props) {
    return (
        <div>
            <Head>
                <title>bretonlikethecrackers</title>
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="flex items-start flex-col md:flex-row">
                <img className="w-4/5 mx-auto md:w-2/5 md:mx-0" src={props.photo.replace('/public', '')} />
                <div className="my-10 mx-10 md:mx-5">
                    <h2 className="mb-3">hello</h2>
                    <p>{props.body}</p>
                    <div className="flex my-5">
                        <a href="https://www.instagram.com/bretonlikethecrackers/"><img className="w-11 mr-3" src="/static/images/instagram.png" /></a>
                        <a href="https://www.imdb.com/name/nm6870964/"><img className="w-11" src="/static/images/imdb.png" /></a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const helloData = YAML.parse(await fs.readFile(path.join(process.cwd(), '_site/pages/hello.yml'), 'utf8'));

    return {
        props: helloData
    };
}
