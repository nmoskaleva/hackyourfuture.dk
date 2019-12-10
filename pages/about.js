import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Map from '../components/map'
import { content, title } from '../components/content/_about'
import {
  content as contact_content,
  title as contact_title
} from '../components/content/_contact'
import { content as partners_content } from '../components/content/_partners'
import Contactform from '../components/contact-form/contact-form'
import Partners from '../components/partners/partners'

export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>

    {/*
       <Content id='faq'>
       <h2>Frequently Asked Questions</h2>
       <div
       dangerouslySetInnerHTML={{
       __html: marked(
       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eaque, explicabo hic id, laborum maiores nisi quae quia quis reprehenderit unde voluptas. Animi aspernatur at in modi natus quidem quis.'
       )
       }}
       />
       </Content>
      */}

    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Content>

    <Content id='contact'>
      <h2>{contact_title}</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(contact_content) }} />
      <Contactform email={'cph@hackyourfuture.dk'} />
      <div style={{ marginTop: 40 }}>
        <Map />
      </div>
    </Content>

    <Content id='partners'>
      <div dangerouslySetInnerHTML={{ __html: marked(partners_content) }} />
    </Content>

    <Partners />
  </Layout>
)
