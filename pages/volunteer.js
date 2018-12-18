import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'
import Contactform from '../components/Contactform/index'
import Team from '../components/Team/index'
import {content, title} from '../components/content/_mentors'


export default () => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <img src={'https://i.imgur.com/jspZFfk.jpg'} />

      <h2 id="becoming-mentor">Would you like to help?</h2>
      <Contactform />
    </Content>
    <h2 id="mentors" style={{ textAlign: 'center' }}>The team</h2>
    <Team />

    <Content>
      <h1 id="volunteering">Volunteering</h1>
      <div dangerouslySetInnerHTML={{ __html: marked("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum inventore molestiae natus pariatur placeat sapiente tenetur unde. Aspernatur atque dolorem doloribus laborum laudantium magnam nulla, quis tempore ut vel velit!") }} />
    </Content>

    <Content>
      <h1 id="curriculum">Curriculum</h1>
      <div dangerouslySetInnerHTML={{ __html: marked("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum inventore molestiae natus pariatur placeat sapiente tenetur unde. Aspernatur atque dolorem doloribus laborum laudantium magnam nulla, quis tempore ut vel velit!") }} />
    </Content>


  </Layout>
)
