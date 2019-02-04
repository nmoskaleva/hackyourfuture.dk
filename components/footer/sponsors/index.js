import sponsors from './sponsors.json'

export default () => (
  <div className='wrapper'>
    {/*language=CSS*/}
    <style jsx>
      {`
        .sponsors {
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
          padding-bottom: 1rem;
        }

        .sponsor {
          width: 50%;
          padding: 20px;
          text-align: center;
          color: #787878;
          font-size: 3rem;
        }

        .sponsor:hover {
          box-shadow: 1px 1px 3px grey;
          transition: all 0.5s;
        }

        @media (min-width: 800px) {
          .sponsor {
            width: 25%;
          }
        }

        .center {
          text-align: center;
          font-family: Space Mono, monospace;
          margin: 5rem 0 3rem 0;
        }
      `}
    </style>
    <h2 className='center'>Official partners & supporters</h2>
    <div className='sponsors'>
      {sponsors.map(({ id, logo, url }) => (
        <div className='sponsor' key={id}>
          <a target='_blank' href={url}>
            <img alt='' src={'/static/sponsors/' + logo} />
          </a>
        </div>
      ))}
    </div>
  </div>
)
