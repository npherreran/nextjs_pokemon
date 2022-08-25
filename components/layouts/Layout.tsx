import React, { FC, ReactNode } from 'react'
import Head from 'next/head';

interface ComponentProps {
    children: ReactNode,
    title?: string
}

export const Layout: FC<ComponentProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Natalia Herrera" />
                <meta name="description" content={`Información sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>

            {/* Navbar */}

            <main>
                {children}
            </main>
        </>
    )
}
