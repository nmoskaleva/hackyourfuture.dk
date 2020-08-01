import React from 'react'
import members from './team.json'
import ItemCard from './item-card/item-card'
import styles from './team.scss'
import alumniList from '../hire/alumni.json'

//styling

export const TeamMembers = ({ title, members }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>{title}</h2>
      <div className='team-members core-team'>
        {members.map(member => (
          <ItemCard item={member} key={member.fields.id} photo={member.fields.photo.fields.file.url} />
        ))}
      </div>
    </>
  )
}


export const CoreTeam = ({ title, members }) => {
  //const coreTeam = members.filter(member => member.roles.includes('core'))
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>{title}</h2>
      <div className='team-members core-team'>
        {members.map(member => (
          <ItemCard item={member} key={member.fields.id} photo={member.fields.photo.fields.file.url} />
        ))}
      </div>
    </>
  )
}

export const BoardMembers = ({ title, members }) => {
  // const boardMembers = members.filter(member =>
  //   member.roles.includes('boardmember')
  // )
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>Board members</h2>
      <div className='team-members core-team'>
        {members.map(boardMember => (
          <ItemCard item={boardMember} key={boardMember.fields.id} photo={boardMember.fields.photo.fields.file.url} />
        ))}
      </div>
    </>
  )
}

// export const MentorsTeam = () => {
//   const mentors = members.filter(member => member.roles.includes('mentor'))
//   return (
//     <>
//       <style jsx>{styles}</style>
//       <h2 className='title'>Our Mentors</h2>
//       <div className='team-members mentors'>
//         {mentors
//           .sort((a, b) => a.name.localeCompare(b.name)) // sort names alphabetically
//           .map(member => (
//             <ItemCard item={member} key={member.id} />
//           ))}
//       </div>
//     </>
//   )
// }

export const MentorsTeam = ({ title, members }) => {
  //const mentors = members.filter(member => member.roles.includes('mentor'))
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>{title}</h2>
      <div className='team-members mentors'>
        {members
          .sort((a, b) => a.fields.name.localeCompare(b.fields.name)) // sort names alphabetically
          .map(member => (
            <ItemCard item={member} key={member.fields.id} photo={member.fields.photo.fields.file.url} />
          ))}
      </div>
    </>
  )
}

export const Graduates = ({ title, members }) => {
  // const highlightedAlumniInCompany = alumniList.filter(alumni => alumni.company)
  return (
    <>
      <style jsx>{styles}</style>
      <h2 className='title'>{title}</h2>
      <div className='team-members employed-alumni'>
        {members
          .sort((a, b) => a.fields.name.localeCompare(b.fields.name))
          .map(member => (
            <ItemCard item={member} key={member.fields.id} photo={member.fields.photo.fields.file.url} />
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
