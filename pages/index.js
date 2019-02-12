import Head from 'next/head'
import Team from '../components/team/team'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import marked from 'marked'
import Parallax from '../components/parallax/parallax'
import { content, title } from '../components/content/_home'
import FindUs from '../components/find-us/find-us'

export default () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Parallax />
      <Content>
        <img
          style={{ height: '17rem', float: 'right', marginTop: '2rem' }}
          src='/static/intro.svg'
          alt='intro-hyf'
        />
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </Content>
      <Team />
      <Content>
        <FindUs />
      </Content>
    </Layout>
  )
}
