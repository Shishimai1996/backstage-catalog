import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
} from '@backstage/core-plugin-api';
import {
  ScmAuth,
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
} from '@backstage/integration-react';
import {
  OpenApiDefinitionWidget,
  apiDocsConfigRef,
  defaultDefinitionWidgets,
} from '@backstage/plugin-api-docs';
import { ApiEntity } from '@backstage/catalog-model';

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),

  createApiFactory({
    api: apiDocsConfigRef,
    deps: {},
    factory: () => {
      return {
        getApiDefinitionWidget: (apiEntity: ApiEntity) => {
          return defaultDefinitionWidgets().find(
            d => d.type === apiEntity.spec.type,
          );
        },
      };
    },
  }),
];
