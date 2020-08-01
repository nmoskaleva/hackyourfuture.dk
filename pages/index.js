import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Hero from '../components/hero/hero'
import VideoHighlight from '../components/video-highlight/video-highlight'
import FindUs from '../components/find-us/find-us'
import Partners from '../components/partners/partners'
import { Graduates } from '../components/team/team'

// Contentful
import { fetchHomePageContent, fetchPartners, fetchSponsor, fetchGraduates } from '../contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default ({ title, content, partners, sponsor, graduates_title, graduates_list }) => (
  <Layout>
    <Head>
      <meta
        name='google-site-verification'
        content='YvWW5A5Yye9vDijg-oTcYoggq9HkweFT-6J9d6xjnNA'
      />
      <title>{title}</title>
    </Head>
    <Hero />
    <Content>
      <div>
        {documentToReactComponents(content)}
      </div>
    </Content>
    <Graduates title={graduates_title} members={graduates_list} />
    <Partners partners={partners} sponsor={sponsor} />
    <VideoHighlight />
  </Layout>
)

export async function getStaticProps() {
  const pageContent = await fetchHomePageContent()
  const partnersList = await fetchPartners()
  const sponsorInfo = await fetchSponsor()
  const graduates = await fetchGraduates()

  return {
    props: {
      title: pageContent.title, content: pageContent.content,
      partners: [...partnersList], sponsor: sponsorInfo,
      graduates_title: graduates.headline, graduates_list: [...graduates.list]
    }
  }
}
