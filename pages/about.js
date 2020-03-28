import React from 'react'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import Map from '../components/map'
import ContactContent from '../components/contact/contact'
import Contactform from '../components/contact-form/contact-form'
import { BoardMembers, CoreTeam } from '../components/team/team'
import Partners from '../components/partners/partners'
import Press from '../components/partners/press'

// Contentful client
import client from '../contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Contentful entry id
const aboutContentEntry = '3VD8j3TGv3H66fVLrHGWuC'

export default () => {
  // fetch data from Contentful
  async function fetchEntry() {
    // Contentful > About
    const entry = await client.getEntry(aboutContentEntry)
    const content = entry.fields
    if (entry.fields) {
      return content
    }
    else console.log(`error`)
  }

  const [content, setContent] = useState({ title: '', aboutContent: '' })

  useEffect(() => {
    async function getContent() {
      const allContent = await fetchEntry()
      setContent({ title: allContent.title, aboutContent: allContent.mainBody })
    }
    getContent()
  }, [])

  const { title, aboutContent } = content

  // const title = content.title
  // const aboutContent = content.mainBody

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <Content>
        <div>
          {documentToReactComponents(aboutContent)}
        </div>
      </Content>

      <Content id='contact'>
        <ContactContent />
        <Contactform email={'cph@hackyourfuture.dk'} />
        <div style={{ marginTop: 40 }}>
          <Map />
        </div>
      </Content>

      <BoardMembers />
      <CoreTeam />
      <Press />
      <Partners />
    </Layout>
  )
}