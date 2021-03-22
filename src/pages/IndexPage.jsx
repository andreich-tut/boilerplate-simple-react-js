import React from 'react';
import SEO from '@/components/common/SEO';
import Layout from '@/components/layout/Layout';
import MD from '@/components/common/Markdown';
import useContent from '@/hooks/useContent';

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
