import Sponsers from './sponsers/index'
import SocialIcons from './social-icon'

export default () => (
  <footer className="footer">
    {/*language=CSS*/}
    <style jsx>
      {`
        .footer {
          /*margin-top: 100px;*/
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .links {
          display: flex;
          flex-direction: column;
          width: 100%;
          /*min-height: 300px;*/
          /*background: linear-gradient(to bottom right, #293A7D,#293A7D );*/
          background-color: #293a7d;
          color: #fff;
          text-align: center;
        }

        .bottom {
          padding: 2rem;
        }

        .Copyright {
          background-color: rgba(0, 0, 0, 0.25);
          padding: 1rem;
        }

        .hyf-info {
          display: flex;
          padding: 1rem 10rem;
          flex-direction: rows;
        }

        .col-lg-6 {
          flex: 1;
          margin: auto;
        }

        @media (max-width: 768px) {
          .hyf-info {
            padding: 1rem;
            flex-direction: column;
          }
          .cvrDiv {
            margin-top: 2rem;
          }
        }
      `}
    </style>
    <Sponsers />
    <div className="links">
      <div className="bottom">
        {/*<Newsletter />*/}
        <SocialIcons />
      </div>
      <div className="hyf-info">
        <div className="col-lg-6">
          Foreningen HackYourFuture <br />
          Kongens Enghave <br />
          2450 København <br />
        </div>
        <div className="col-lg-6 cvrDiv">
          CVR:
          <br />
          38 53 31 93
        </div>
      </div>
      <div className="Copyright">
        &copy; Copyright HackYourFuture Copenhagen 2018
      </div>
    </div>
  </footer>
)
