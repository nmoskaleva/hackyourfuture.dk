import React from 'react'
import { useEffect, useState } from 'react'
import styles from './partners.scss'

// Contentful client
import client from '../../contentful'

// Contentful entry ids
const partnersEntryId = '3CEyXyD8onF9pJd1cMboxP'
const sponsorEntryId = '3H7wmN35ixihm684bqeSea'

export default () => {
  async function fetchEntry(entryId) {
    const entry = await client.getEntry(entryId)
    const entryData = entry.fields
    if (entry.fields) return entryData
    else console.log(`error`)
  }

  const fetchPartnersData = fetchEntry(partnersEntryId)
  const fetchSponsorData = fetchEntry(sponsorEntryId)

  const [partners, setPartners] = useState({ partnersList: [] })
  const [sponsor, setSponsor] = useState({ title: '', logo: '', url: '' })

  useEffect(() => {
    async function getPartners() {
      const partnersData = await fetchPartnersData
      setPartners({ partnersList: [...partnersData.list] })
    }
    getPartners()
  }, [])

  useEffect(() => {
    async function getSponsor() {
      const sponsorData = await fetchSponsorData
      setSponsor({ title: sponsorData.title, logo: sponsorData.logo.fields.file.url, url: sponsorData.url })
    }
    getSponsor()
  }, [])

  return (
    <>
      <style jsx>{styles}</style>
      <section className='partners'>
        <h2 className='center'>Sponsored by</h2>
        <a
          aria-label='Partner link'
          rel='noopener'
          target='_blank'
          href={sponsor.url}
          className='mollerske'
        >
          <img
            alt='Den A.P. Møllerske Støttefond logo'
            src={sponsor.logo}
          />
        </a>
        <h2 className='center'>Supported by</h2>
        <div className='wrapper'>
          {partners.partnersList.map(partner => (
            <div className='partner' key={partner.fields.id}>
              <a
                aria-label='Partner link'
                rel='noopener'
                target='_blank'
                href={partner.fields.url}
              >
                <img alt={partner.fields.title} src={partner.fields.logo.fields.file.url} width='150vw' />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}