import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default class Home extends React.Component {
    componentDidMount() {
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on('init', user => {
                if (!user) {
                    window.netlifyIdentity.on('login', () => {
                        document.location.href = '/admin/';
                    });
                }
            });
        }

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        async function crackerClick(e) {
            const cracker = document.getElementById('cracker');
            const crackerBite = document.getElementById('cracker-bite');

            cracker.classList.add('hidden');
            crackerBite.classList.remove('hidden');

            await sleep(500);
            document.getElementById('hello-link').click();

            e.preventDefault();
            return false;
        }

        document.getElementById('cracker-box').onclick = crackerClick;
    }

    render() {
        return (
            <div>
                <Head>
                    <title>bretonlikethecrackers</title>
                    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Head>
                <main className="flex h-screen">
                    <a id='cracker-box' className='mx-auto my-auto' href="#">
                        <img id="cracker" className="w-52 h-52" src="/static/images/cracker.png" />
                        <img id="cracker-bite" className="hidden w-52 h-52" src="/static/images/cracker-bite.png" />
                    </a>
                    <Link href="/hello"><a id="hello-link" className="hidden"></a></Link>
                </main>
            </div>
        );
    }
}
