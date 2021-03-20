import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ seo, children }) => (
  <Helmet>
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta name="keywords" content={seo.keywords} />
    <meta property="og:title" content={seo.ogTitle ? seo.ogTitle : seo.title} />
    <meta property="og:description" content={seo.description} />
    {seo.thumbnail &&
      <meta property="og:image" content={`/static/${seo.thumbnail}`} key="thumbnail" />
    }
    {children}
  </Helmet>
);

export default SEO;
