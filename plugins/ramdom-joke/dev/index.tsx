import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { ramdomJokePlugin, RamdomJokePage } from '../src/plugin';

createDevApp()
  .registerPlugin(ramdomJokePlugin)
  .addPage({
    element: <RamdomJokePage />,
    title: 'Root Page',
    path: '/ramdom-joke',
  })
  .render();
