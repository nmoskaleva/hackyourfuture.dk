import { useState, useEffect } from 'react'
import { client } from './contentful'

export const useContentfulContentType = (cntType) => {
    let [content, setContent] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const entries = await client.getEntries({
                    content_type: cntType,
                    order: 'fields.id'
                })
                const contentList = await entries.items
                setContent([...contentList])
            }
            catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [])
    return { content, error }
}

export const useContentfulEntryId = (entryId) => {
    let [content, setContent] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const entry = await client.getEntry(entryId)
                const content = await entry.fields
                setContent(content)
            }
            catch (error) {
                setError(error)
            }
        }
        fetchData()
    }, [])
    return { content, error }
}