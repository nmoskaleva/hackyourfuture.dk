import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Contactform from '../components/contact-form/contact-form'
import { MentorsTeam } from '../components/team/team'
import Partners from '../components/partners/partners'
import Curriculum from '../components/curriculum/curriculum'
import FAQ from '../components/faq/faq-mentors'
import { fetchVolunteerPageContent, fetchPartners, fetchSponsor, fetchMentors, fetchFaqMentors } from '../contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default ({ content, title, mentors_title, mentors_list, faq, partners, sponsor }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <div>
        {documentToReactComponents(content)}
      </div>
      <Curriculum />

      <h2 id='becoming-mentor'>Would you like to help?</h2>
      <Contactform email={'cph@hackyourfuture.net'} />
    </Content>

    <Content>
      <FAQ questions={faq} />
    </Content>

    <MentorsTeam id='mentors' title={mentors_title} members={mentors_list} />

    <Partners partners={partners} sponsor={sponsor} />
  </Layout>
)

export async function getStaticProps() {
  const pageContent = await fetchVolunteerPageContent()
  const faqMentors = await fetchFaqMentors()
  const mentors = await fetchMentors()
  const partnersList = await fetchPartners()
  const sponsorInfo = await fetchSponsor()

  return {
    props: {
      title: pageContent.headline, content: pageContent.mainBody,
      mentors_title: mentors.headline, mentors_list: [...mentors.list], faq: [...faqMentors], partners: [...partnersList], sponsor: sponsorInfo
    }
  }
}