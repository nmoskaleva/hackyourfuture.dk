import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Map from '../components/map'
import { content, title } from '../components/content/_privacy'

export default () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        <Map />
      </Content>
    </Layout>
  )
}
