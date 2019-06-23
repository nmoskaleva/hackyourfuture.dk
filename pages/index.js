import Head from 'next/head'
import Team from '../components/team/team'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import marked from 'marked'
import Hero from '../components/hero/hero'
import { content, title } from '../components/content/_home'
import FindUs from '../components/find-us/find-us'
import Intro from '../components/intro/Intro'

export default () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero />
      <Intro />
      <Team />
    </Layout>
  )
}
