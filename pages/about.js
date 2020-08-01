import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Map from '../components/map'
import Contactform from '../components/contact-form/contact-form'
import { BoardMembers, CoreTeam } from '../components/team/team'
import Partners from '../components/partners/partners'
import Press from '../components/partners/press'

// Contentful
import { fetchAboutContent, fetchContactInfo, fetchPress, fetchPartners, fetchSponsor, fetchCoreTeam, fetchBoardMembers } from '../contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default ({ title, content, contact_title, contact_content, press, partners, sponsor, coreTeam_title, coreTeam_list, boardMembers_title, boardMembers_list }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>

    <Content>
      <div>
        {documentToReactComponents(content)}
      </div>
    </Content>

    <Content id='contact'>
      <h2>{contact_title}</h2>
      <div>
        {documentToReactComponents(contact_content)}
      </div>
      <Contactform email={'cph@hackyourfuture.dk'} />
      <div style={{ marginTop: 40 }}>
        <Map />
      </div>
    </Content>

    <BoardMembers title={boardMembers_title} members={boardMembers_list} />
    <CoreTeam title={coreTeam_title} members={coreTeam_list} />
    <Press press={press} />
    <Partners partners={partners} sponsor={sponsor} />
  </Layout>
)

export async function getStaticProps() {
  const pageContent = await fetchAboutContent()
  const contactInfo = await fetchContactInfo()
  const pressList = await fetchPress()
  const partnersList = await fetchPartners()
  const sponsorInfo = await fetchSponsor()
  const coreTeam = await fetchCoreTeam()
  const boardMembers = await fetchBoardMembers()

  return {
    props: {
      title: pageContent.title, content: pageContent.content,
      contact_title: contactInfo.title, contact_content: contactInfo.bodyText,
      press: [...pressList], partners: [...partnersList], sponsor: sponsorInfo,
      coreTeam_title: coreTeam.headline, coreTeam_list: [...coreTeam.list],
      boardMembers_title: boardMembers.headline,
      boardMembers_list: [...boardMembers.list]
    }
  }
}
