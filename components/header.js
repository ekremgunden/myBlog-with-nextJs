import Link from 'next/link'

function Header() {
    return (
        <header className="header-container">
            <nav className="space-x-6">
                <Link href="/">
                    <a className="border-b border-green-600 font-semibold inline-block text-lg"><p>Hakkımda</p></a>
                </Link>
                <Link href="/blog">
                    <a className="border-b border-green-600 font-semibold inline-block text-lg"><p>Yazılar</p></a>
                </Link>
            </nav>
        </header>
    )
}

export default Header

