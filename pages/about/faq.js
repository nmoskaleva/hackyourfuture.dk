import Head from 'next/head'
import marked from 'marked'
import Layout from '../../components/Layout'
import Content from '../../components/Content'
import {content, title} from '../../components/content/_sample'

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
    </Content>
  </Layout>
)
