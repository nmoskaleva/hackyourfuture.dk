import sponsers from './sponsers.json.js'

export default () => (
  <div className="wrapper">
    {/*language=CSS*/}
    <style jsx>
      {`
          .sponsers {
              max-width: 1200px;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-evenly;
              padding-bottom: 1rem;
          }

          .sponser {
              width: 50%;
              padding: 20px;

          }

          .sponser:hover {
              box-shadow: 1px 1px 3px grey;
              transition: all .5s;
          }

          . {
              text-align: center;
              color: #787878;
              font-size: 3rem;
          }

          @media (min-width: 800px) {
              .sponser {
                  width: 25%;
              }
          }

          .center {
              text-align: center;
              font-family: Space Mono, monospace;
          }
      `}
    </style>
    <h2 className='center'>Official partners & supporters</h2>
    <div className="sponsers">
      {sponsers.map(({id, logo, url}) => (
        <div className="sponser" key={id}>
          <a target='_blank' href={url}>
            <img src={'/static/sponsers/new/blue-color/' + logo} />
          </a>
        </div>
      ))}
    </div>
  </div>
)
