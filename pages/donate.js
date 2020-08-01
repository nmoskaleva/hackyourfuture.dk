import Head from 'next/head'
import Layout from '../components/layouts/layout'
import Content from '../components/layouts/content/content'
import { fetchDonatePageContent } from '../contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

//Rich Text Customized rendering, in order to add extra <br/>
const renderDocument = document => {
  const Text = ({ children }) => <p>{children}</p>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
    },

    // https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
    // replacing instances of \n produced by Shift + Enter with <br/>
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return documentToReactComponents(document, options);
};

const RichText = ({ document }) => (
  <div>
    {renderDocument(document)}
  </div>
);

export default ({ title, content }) => (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <Content>
      {<RichText document={content} />}
    </Content>
  </Layout>
)

export async function getStaticProps() {
  const pageContent = await fetchDonatePageContent()

  return {
    props: {
      title: pageContent.title,
      content: pageContent.content,
    }
  }
}