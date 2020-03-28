import React from 'react'
import { useEffect, useState } from 'react'
import ItemCard from './item-card/item-card'
import styles from './team.scss'

// Contentful client
import client from '../../contentful'

// fetch data from Contentful
export default function getTeamMembersData(entryId) {
    async function fetchEntry() {
        const entry = await client.getEntry(entryId)
        const peopleData = entry.fields
        if (entry.fields) {
            return peopleData
        }
        else console.log(`error`)
    }

    const [peopleData, setPeopleData] = useState({ title: '', peopleList: [] })

    useEffect(() => {
        async function getPeopleData() {
            const peopleData = await fetchEntry()
            setPeopleData({ title: peopleData.headline, peopleList: [...peopleData.list] })
        }
        getPeopleData()
    }, [])

    return (
        <React.Fragment>
            <style jsx>{styles}</style>
            <h2 className='title'>{peopleData.title}</h2>
            <div className='team-members core-team'>
                {peopleData.peopleList.map(person => (
                    <ItemCard item={person.fields} key={person.fields.id} photo={person.fields.photo.fields.file.url} />
                ))}
            </div>
        </React.Fragment>)
}