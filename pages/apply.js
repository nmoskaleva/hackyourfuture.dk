import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import { title } from '../components/content/_apply'
import {
  content as content_learn,
  title as title_learn
} from '../components/content/_learn'
import WufooForm from 'react-wufoo-embed'
import FAQ from '../components/faq/faq'
import ApplySection from '../components/apply-section/apply-section'

export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content id='apply'>
      <ApplySection />
    </Content>
    <Content id='apply-for-class'>
      <h2>Apply for class</h2>
      <WufooForm
        userName='cphhackyourfuture'
        formHash='w1e3chjs1cq5lr6'
        header='hide'
      />
    </Content>
    <Content id='learn'>
      <h2>{title_learn}</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(content_learn) }} />
    </Content>
    <Content>
      <FAQ />
    </Content>
  </Layout>
)
