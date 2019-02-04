import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Apply from '../components/apply/index'
import { content, title } from '../components/content/_apply'
import { content as codingTest } from '../components/content/_coding-test'
import {
  content as content_learn,
  title as title_learn
} from '../components/content/_learn'

export default () => (
  <Layout>
    {/*language=CSS*/}
    <Head>
      <title>{title}</title>
    </Head>

    <Content id='apply'>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <img alt='Apply to be a student' src='https://i.imgur.com/ukKK09t.jpg' />
    </Content>

    <Content id='apply-for-class'>
      <h2>Apply for class</h2>
      <Apply email={'cph@hackyourfuture.net'} />
    </Content>

    <Content id='coding-test'>
      <div dangerouslySetInnerHTML={{ __html: marked(codingTest) }} />
    </Content>

    <Content id='learn'>
      <h2>{title_learn}</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(content_learn) }} />
    </Content>
  </Layout>
)
