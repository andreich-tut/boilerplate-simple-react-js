import React from 'react';
import SEO from '../components/common/SEO/SEO';
import Layout from '../components/layout/Layout/Layout';
import MD from '../components/common/Markdown/Markdown';

import useContent from '../hooks/useContent.hook';

const IndexPage = () => {
  const { seo, fields } = useContent('pageHome');

  return (
    <Layout page="home">
      <SEO seo={seo} />
      <h1>
        <MD>{fields.hero.heading}</MD>
      </h1>
    </Layout>
  );
};

export default IndexPage;
