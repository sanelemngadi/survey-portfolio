import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";


export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ],
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        const description = "UX/UI designer, Web designer, Wed Developer, Freelancer";
        const fontsUrl = "https://fonts.googleapis.com/css2?family=Inter&family=Merriweather+Sans:ital,wght@0,700;1,400&family=Nunito&display=swap";
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content={description} />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link href={fontsUrl} rel="stylesheet" />
                    {/* {this.props.styles} */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }


}


