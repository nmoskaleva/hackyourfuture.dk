import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Contactform from '../components/Contactform'
import Map from '../components/Map'
import {content, title} from '../components/content/_contact'

export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{__html: marked(content)}} />
      <Contactform email={'cph@hackyourfuture.net'} />
      <div style={{marginTop: 40}}>
        <Map />
      </div>
    </Content>
  </Layout>
)
