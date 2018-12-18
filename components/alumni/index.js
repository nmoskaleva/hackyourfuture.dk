import data from './alumni-json'
import CardMember from '../Team/CardMember'

export default () => {
  return (
    <div className="members">
      {/*language=CSS*/}
      <style jsx>{`
          .members {
              display: flex;
              flex-wrap: wrap;
              max-width: 1200px;
              margin: 0 auto;
          }
      `}
      </style>
      {data.sort((a, b) => a.name.localeCompare(b.name)).map((item, key) =>
        <CardMember item={item} key={key} />
      )}
    </div>
  )
}