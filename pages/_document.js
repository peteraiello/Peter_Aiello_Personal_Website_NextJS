import React from 'react';
import {Gradient} from '../components/gradients/gradient';
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Frontend Developer, specialising in React, JavaScript and UI" />
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preconnect" href="https://use.typekit.net" />
                <link rel="preconnect" href="https://p.typekit.net" />
                <link rel="stylesheet" href="https://use.typekit.net/eei4lut.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@500&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
                <body>
                        <Main />
                        <NextScript />
                </body>
        </Html>
    )
}