import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
//import { title } from '../components/content/_apply'
import Learn from '../components/learn/learn'
import WufooForm from 'react-wufoo-embed'
import FAQ from '../components/faq/faq'
import ApplySection from '../components/apply-section/apply-section'
import Learning from '../components/learning-section/learning'
import ApplicationDeadline from '../components/apply-section/deadline/deadline'

// Contentful
import { fetchApplyPageContent, fetchFaq, fetchRequirements } from '../contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default ({ title, contentOne, contentTwo, requirementsList, faq }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <ApplicationDeadline />
    <Content id='apply'>
      <ApplySection contentOne={contentOne}
        contentTwo={contentTwo} requirements={requirementsList} />
    </Content>
    <Content>
      <Learning />
    </Content>
    <Content id='apply-for-class'>
      <h2>Application Form</h2>
      <WufooForm
        userName='cphhackyourfuture'
        formHash='zbk2uhv0j04hv4'
        header='hide'
      />
    </Content>
    <Content id='learn'>
      <Learn />
    </Content>
    <Content>
      <FAQ questions={faq} />
    </Content>
  </Layout>
)


export async function getStaticProps() {
  const pageContent = await fetchApplyPageContent()
  const faq = await fetchFaq()
  const requirements = await fetchRequirements()

  return {
    props: {
      title: pageContent.title, contentOne: pageContent.contentOne, contentTwo: pageContent.contentTwo,
      requirementsList: [...requirements],
      faq: [...faq]
    }
  }
}
