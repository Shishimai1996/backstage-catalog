import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const ramdomJokePlugin = createPlugin({
  id: 'ramdom-joke',
  routes: {
    root: rootRouteRef,
  },
});

export const RamdomJokePage = ramdomJokePlugin.provide(
  createRoutableExtension({
    name: 'RamdomJokePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
