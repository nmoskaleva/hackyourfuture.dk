import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import { content, title } from '../components/content/_apply'
import {
  content as content_learn,
  title as title_learn
} from '../components/content/_learn'
import WufooForm from 'react-wufoo-embed'
import Partners from '../components/partners/partners'


export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>

    <Content id='apply'>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <img alt='Apply to be a student' src='https://i.imgur.com/ukKK09t.jpg' />
    </Content>

    <Content id='apply-for-class'>
      <h2>Apply for class</h2>
      <WufooForm userName='cphhackyourfuture' formHash='q1wl24e70yn2y5l' header='hide' />
    </Content>

    <Content id='learn'>
      <h2>{title_learn}</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(content_learn) }} />
    </Content>
    
    <Partners />
  </Layout>
)
