import { ExpoConfig } from 'expo/config';
import 'tsx/cjs';

module.exports = ({ config }: { config: ExpoConfig }) => {
  if (process.env.NODE_ENV === 'production') {
    return {
      ...config,
      name: '火象社区',
      slug: 'hotsign-app',
      ios: {
        bundleIdentifier: 'com.huoxiangqu.app1',
      },
      android: {
        predictiveBackGestureEnabled: false,
        package: 'com.alphazone.app1',
      },
    };
  }
  return {
    ...config,
    name: '火象社区开发版',
    slug: 'hotsign-app',
    ios: {
      bundleIdentifier: 'com.huoxiangqu.app1.dev',
    },
    android: {
      predictiveBackGestureEnabled: false,
      package: 'com.alphazone.app1.dev',
    },
  };
};
