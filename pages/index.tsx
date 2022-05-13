import type { NextPage } from 'next';
import Head from 'next/head';
import AboutCard from '../src/components/AboutCard';
import ExperiencesCard from '../src/components/ExperiencesCard';
import Hero from '../src/components/Hero';
import ServicesCard from '../src/components/ServicesCard';
import Surveying from '../src/components/Surveying';

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
