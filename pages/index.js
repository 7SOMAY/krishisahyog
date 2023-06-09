import Head from 'next/head'
import {Inter} from 'next/font/google'
import LandingPage from "@/pages/components/LandingPage";

export default function Home() {
    return (
        <>
            <Head>
                <title>Krishi Sahyog</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={''}>
                <LandingPage/>
            </main>
        </>
    )
}
