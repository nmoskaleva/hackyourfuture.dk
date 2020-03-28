import React from 'react'
import members from './team.json'
import ItemCard from './item-card/item-card'
import styles from './team.scss'
import alumniList from '../hire/alumni.json'
import getTeamMembersData from './team-members-data'

// Contentful entry Ids
const boardMembersEntryId = '1TjBxNqZHJ7LFVlpRfP7rf'
const coreTeamEntryId = '1IqH7UoXZ6cIWvyyq0p4qk'
const mentorsEntryId = '3WPLgg9bIRKvZOp6OcXr8r'

export const CoreTeam = () => {
  const coreTeam = getTeamMembersData(coreTeamEntryId)
  return coreTeam
}

export const BoardMembers = () => {
  const boardMembers = getTeamMembersData(boardMembersEntryId)
  return boardMembers
}

export const MentorsTeam = () => {
  const mentors = getTeamMembersData(mentorsEntryId)
  return mentors
}

export const Graduates = () => {
  const highlightedAlumniInCompany = alumniList.filter(alumni => alumni.company)
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>Meet our Graduates</h2>
      <div className='team-members employed-alumni'>
        {highlightedAlumniInCompany
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(member => (
            <ItemCard item={member} key={member.id} />
          ))}
      </div>
    </>
  )
}

export default () => {
  return (
    <div>
      <BoardMembers />
      <CoreTeam />
      <MentorsTeam />
      <Graduates />
    </div>
  )
}