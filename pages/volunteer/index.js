import Head from 'next/head'
import marked from 'marked'
import Layout from '../../components/Layout'
import Content from '../../components/Content'
import Contactform from '../../components/Contactform/index'
import Team from '../../components/Team/index'
import {content, title} from '../../components/content/_mentors'


export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <img src={'https://i.imgur.com/jspZFfk.jpg'} />
      <h2>Would you like to help?</h2>
      <Contactform />
    </Content>
    <h2 style={{ textAlign: 'center' }}>The team</h2>
    <Team />
  </Layout>
)
