import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import HomePage from '../components/HomePage'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>AAE | Fullstack Developer | aeweb</title>
        <meta name="description" content="I'm a full-stack web developer, building responsive websites." />
        <link rel="icon" href="/aeweb-favicon.png" />
      </Head>
    <HomePage />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
