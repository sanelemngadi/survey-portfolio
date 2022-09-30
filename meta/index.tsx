import Head from 'next/head';
import React, { FC } from 'react';

interface Props {
    title: string
    subtitle: string,
    image: string
}
const MetaData: FC<Props> = ({ title, subtitle, image }) => {

    const date = new Date();
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={subtitle} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={subtitle} />
            <meta property='og:image' content={'https://www.sanelemngadi.com' + image} />
            <meta property="og:type" content="guesthouse. break and breakfast" />
            <meta property="og:url" content="https://www.sanelemngadi.com" />

            <meta property="og:site_name" content="Sanele Mngadi" />
            <meta property="og:updated_time" content="1440432930" />
            <meta property="og:image:width" content="300" />
            <meta property="og:image:height" content="225" />

            {/* Twitter meta card  */}
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={subtitle} />
            <meta property='twitter:image' content={'https://www.sanelemngadi.com' + image} />
        </Head>
    )
}

export default MetaData