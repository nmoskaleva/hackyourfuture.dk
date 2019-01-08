import CoreTeamData from './coreteam.json'
import CardMember from '../team/card-member'

const CoreTeam = () => {
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

          .member {
            width: 50%;
            padding: 20px;
            text-align: center;
          }

          @media (min-width: 600px) {
            .member {
              width: 33%;
            }

            .member .image {
              height: 25vw;
              width: 25vw;
            }
          }

          @media (min-width: 900px) {
            .member {
              width: 25%;
            }

            .member .image {
              height: 20vw;
              width: 20vw;
            }
          }

          .image {
            height: 33vw;
            width: 33vw;
            filter: grayscale(100%);
            max-width: 250px;
            max-height: 250px;
            overflow: hidden;
            border-radius: 100%;
            display: inline-block;
          }

          .memberName {
            font-family: Space Mono, monospace;
          }
        `}
      </style>
      {CoreTeamData.map((person, key) => (
        <CardMember key={key} item={person} />
      ))}
    </div>
  )
}

export default CoreTeam
