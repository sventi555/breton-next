import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex flex-col sm:flex-row p-3 bg-gray-700">
            <div>
                <Link href="/"><a className="mx-3 text-xl text-white">bretonlikethecrackers</a></Link>
            </div>
            <div>
                <Link href="/hello"><a className="leading-7 mx-3 text-gray-400 hover:text-gray-300">hello</a></Link>
                <Link href="/performance"><a className="leading-7 mx-3 text-gray-400 hover:text-gray-300">performance</a></Link>
                <Link href="/writing"><a className="leading-7 mx-3 text-gray-400 hover:text-gray-300">writing</a></Link>
            </div>
        </nav>

    );
}
