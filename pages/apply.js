import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/content'
import Apply from '../components/apply/index'
import {content, fill, title} from '../components/content/_apply'
import {content as content_learn, title as title_learn} from '../components/content/_learn'


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

    <Content id="apply"  >
      <div dangerouslySetInnerHTML={{__html: marked(content)}} />
      <img className="image" src="https://i.imgur.com/ukKK09t.jpg" />
      <h2>{fill}</h2>
      <Apply email={'cph@hackyourfuture.net'} />
    </Content>

    <Content id="apply-for-class" >
      <h2>Apply for class</h2>
      <div
        dangerouslySetInnerHTML={{__html: marked('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aut beatae consectetur cupiditate eaque molestias officiis omnis possimus quaerat? Accusantium aperiam assumenda cumque ipsam laboriosam maxime officiis quisquam ullam.')}} />
    </Content>

    <Content id="coding-test" >
      <h2>Coding Tester Class for Women</h2>
      <div
        dangerouslySetInnerHTML={{__html: marked('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad aut beatae consectetur cupiditate eaque molestias officiis omnis possimus quaerat? Accusantium aperiam assumenda cumque ipsam laboriosam maxime officiis quisquam ullam.')}} />
    </Content>

    <Content id="learn" >
      <h2>{title_learn}</h2>
      <div dangerouslySetInnerHTML={{__html: marked(content_learn)}} />
    </Content>

  </Layout>
)