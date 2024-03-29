import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../src/components/Hero';
import ServicesCard from '../src/components/ServicesCard';

import dynamic from 'next/dynamic';

const Surveying = dynamic(() => import(/* webpackChunkName: 'surveying' */ '../src/components/Surveying'));
const ExperiencesCard = dynamic(() => import(/* webpackChunkName: 'experiencecard' */ '../src/components/ExperiencesCard'));
const AboutCard = dynamic(() => import(/* webpackChunkName: 'aboutcard' */ '../src/components/AboutCard'));

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Portfolio</title>
        <meta name="description" content="Sanele Mngadi Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <Hero
          heading='We Map Your digital presents into an amazing experience'
          src="/assets/vectors/heroimage.svg"
          width={175}
          height={175}
          alt="Surveyor"
          link="#hire"
          isCta={true}
          bgShaddow
        />
        <ServicesCard />
        <Surveying />
        <ExperiencesCard />
        <AboutCard />
      </main>

      {/* "ttps://codesandbox.io/embed/static-site-generation-ssg-in-nextjs-with-getstaticprops-kgppy?fontsize=14&hidenavigation=1&initialpath=%2Fblog&module=%2Fpages%2Fblog%2Findex.tsx&theme=dark" */}

    </div>
  )
}

export default Home
