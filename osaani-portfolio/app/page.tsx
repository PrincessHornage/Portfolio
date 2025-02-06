import React from 'react'
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <h1>Hello World</h1>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/projects">Projects</Link>
        </main>
    )
}
