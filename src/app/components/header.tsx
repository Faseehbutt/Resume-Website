"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Header() {
    const pathname = usePathname();
    return (
        <div className="header">    
                <h1>Faseeh&apos;s Portfolio</h1>
            <ul className="nav-buttons">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                <li>Home</li>
                </Link>
                <Link href="/Skills" className={`nav-link ${pathname === '/Skills' ? 'active' : ''}`}>
                    <li>Skills</li>
                </Link>
                <Link href="/Education" className={`nav-link ${pathname === '/Education' ? 'active' : ''}`}>
                    <li>Education</li>
                </Link>
                <Link href="/About-Me" className={`nav-link ${pathname === '/About-Me' ? 'active' : ''}`}>
                    <li>About Me</li>
                </Link>
                <Link href="/Contact-Me" className={`nav-link ${pathname === '/Contact-Me' ? 'active' : ''}`}>
                    <li>Contact Me</li>
                </Link>
            </ul>
        </div>
    )
}