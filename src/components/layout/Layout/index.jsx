import React from 'react';
import cn from 'classnames';
import { Helmet } from 'react-helmet';
import useContent from '@/hooks/useContent';
import Counter from '@/components/common/Counter';

const staging = process.env.REACT_APP_STAGING === 'true';

const Layout = ({ children, page = '' }) => {
  const { seo } = useContent('default');

  return (
    <>
      {!staging && !!seo.metrikaID &&
        <Counter id={seo.metrikaID} />
      }
      <div
        className={cn(
          'layout',
          { [`layout_${page}`]: page }
        )}
      >
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />

          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={`/static/${seo.thumbnail}`} key="thumbnail" />
          <meta property="og:site_name" content={seo.title} />

          <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        {children}
      </div>
    </>
  );
};

export default Layout;
