import Head from 'next/head'
import CoreTeam from './../components/CoreTeam'
import Team from '../components/Team/'
import Layout from '../components/Layouts/Layout'
import Content from '../components/Content'
import marked from 'marked'
import MyParallax from '../components/parallax'
import {content, title} from '../components/content/_home'
import FindUs from '../components/Footer/findUs'

export default () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      {/*language=CSS*/}
      <style jsx>
        {`
            .content {
                max-width: 760px;
                margin: 0px auto;
                background: white;
                box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                0 1px 10px 0 rgba(0, 0, 0, 0.12),
                0 2px 4px -1px rgba(0, 0, 0, 0.2);
                padding: 15px;
            }

            @media (min-width: 768px) {
                .content {
                    padding: 40px;
                }

            }

            .contentExtra {
                max-width: 760px;
                margin: 0px auto;
            }

            .contentExtra h2 {
                text-align: center;
            }

            .homePageContent {
                margin-top: 4rem;
            }
        `}
      </style>

      <MyParallax />

      <div className="homePageContent">
        <Content>
          <div style={{padding: '3rem 1rem'}} dangerouslySetInnerHTML={{__html: marked(content)}} />
        </Content>
      </div>


      <h2 style={{textAlign: 'center', margin: '4rem 0'}}>Core Team</h2>
      <CoreTeam />
      <h2 style={{textAlign: 'center',margin: '4rem 0'}}>Mentors</h2>
      <Team />

      <Content><FindUs /></Content>

    </Layout>
  )
}
