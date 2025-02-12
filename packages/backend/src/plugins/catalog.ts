import { PluginEnvironment } from '../types';
import { createBackend } from '@backstage/plugin-catalog-backend/alpha'; // インポート方法の確認

export default async function createPlugin(env: PluginEnvironment) {
  const backend = createBackend; // createBackendをそのまま使用するのではなく
  // `backend` がBackendFeatureである場合、適切なメソッドでバックエンドの設定を行う
  backend.addRouter(env.router); // 例としてルーターの追加を行う
}
