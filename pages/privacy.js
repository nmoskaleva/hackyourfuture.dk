import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Map from '../components/Map'
import {content, title} from '../components/content/_privacy'


export default () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Content>
        <div dangerouslySetInnerHTML={{__html: marked(content)}} />
        <Map />
      </Content>
    </Layout>
  )
}
