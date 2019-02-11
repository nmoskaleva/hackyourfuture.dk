import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import { content, title } from '../components/content/_newsletter'

export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <form
        action='https://hackyourfuture.us18.list-manage.com/subscribe/post?u=3d0c0055da1f780c58ef56540&amp;id=e9cde1fe9a'
        method='post'
      >
        <style jsx>
          {`
            .email {
              font-size: 1rem;
              padding: 8px;
              margin: 0 10px 0 0;
              width: 240px;
            }
            .submit {
              font-size: 1rem;
              border: 0;
              background: #2ecc40;
              color: white;
              padding: 10px;
            }
          `}
        </style>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        <div className='submit-form'>
          <input
            type='email'
            name='EMAIL'
            className='email'
            placeholder='you@example.com'
          />
          <input
            type='submit'
            value='Subscribe'
            name='subscribe'
            className='submit'
          />
        </div>
      </form>
    </Content>
  </Layout>
)
