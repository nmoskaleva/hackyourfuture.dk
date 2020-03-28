import React from 'react'
import { useEffect, useState } from 'react'

// Contentful client
import client from '../../contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Contentful entry id
const contactData = '57BmNlPMn5pBZBBvPNIoLC'

// fetch data from Contentful
export default () => {
    async function fetchEntry() {
        // Contentful > Contact - HackYourFuture
        const entry = await client.getEntry(contactData)
        const content = entry.fields
        if (entry.fields) {
            return content
        }
        else console.log(`error`)
    }

    const [content, setContent] = useState([])

    useEffect(() => {
        async function getContent() {
            const contactContent = await fetchEntry()
            setContent(contactContent)
        }
        getContent()
    }, [])

    return (
        <>
            <h2>{content.title}</h2>
            <div>{documentToReactComponents(content.bodyText)}</div>
        </>
    )
} 