import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Apply from '../components/Apply'
import {content, fill, title} from '../components/content/_apply'


export default () => (
  <Layout>
    <style jsx>
      {`
        .image {
          position: relative;
          left: -20px;
          right: -20px;
          width: calc(100% + 40px);
          max-width: none;
        }
      `}
    </style>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{__html: marked(content)}} />
      <img className="image" src="https://i.imgur.com/ukKK09t.jpg" />
      <h2>{fill}</h2>
      <Apply email={'cph@hackyourfuture.net'} />
    </Content>
  </Layout>
)
