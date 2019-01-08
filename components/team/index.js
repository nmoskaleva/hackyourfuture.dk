import data from './team.json'
import CardMember from './card-member'

export default () => {
  return (
    <div className="members">
      {/*language=CSS*/}
      <style jsx>
        {`
          .members {
            display: flex;
            flex-wrap: wrap;
            max-width: 1200px;
            margin: 0 auto;
            justify-content: center;
          }
        `}
      </style>
      {data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item, key) => (
          <CardMember item={item} key={key} />
        ))}
    </div>
  )
}
