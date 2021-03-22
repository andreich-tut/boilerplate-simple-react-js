import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';

const Counter = ({ id }) => (
  <div>
    <YMInitializer
      accounts={[id]}
      options={{ webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true }}
    />
  </div>
);

export default Counter;
