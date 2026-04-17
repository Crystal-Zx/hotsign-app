// import Config from 'react-native-config';
// import { AppConfig } from '../types/app-config';

import { AppConfig, Environment } from '@/types/config';

const ENV_CONFIGS: Record<Environment, AppConfig> = {
  development: {
    ALPHA_HTTP_API_V1: 'http://192.168.0.66:7171', // alpha 项目组接口前缀
    ALPHA_HTTP_API_V2: 'http://192.168.0.66:1239', // alpha 项目组接口前缀
  },
  production: {
    ALPHA_HTTP_API_V1: 'https://v1.alphazone-data.cn', // alpha 项目组接口前缀
    ALPHA_HTTP_API_V2: 'https://v2.alphazone-data.cn', // alpha 项目组接口前缀
  },
};

const currentEnv = (process.env.EXPO_PUBLIC_ENV as Environment) || 'development';

export const APP_CONFIG: AppConfig = ENV_CONFIGS[currentEnv];
