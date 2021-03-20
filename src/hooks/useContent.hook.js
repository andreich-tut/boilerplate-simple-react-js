const useContent = (fileName, lang = 'ru') => (
  require(`../content/${fileName}.${lang}.json`)
);

export default useContent;

/* State-based version */
/*
import { useState, useEffect } from 'react';

const useContent = (fileName, lang = 'ru') => {
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const pageContent = require(`../content/${fileName}.${lang}.json`);

  const [data, setData] = useState(
    (
      {
        seo: pageContent.seo,
        fields: pageContent.fields,
      }
    )
  );

  useEffect(() => {
    setData(pageContent);
  }, []);

  return [data, setData];
};

export default useContent;
*/
