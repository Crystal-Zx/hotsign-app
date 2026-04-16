import { ExpoConfig } from 'expo/config';
import 'tsx/cjs';

module.exports = ({ config }: { config: ExpoConfig }) => {
  return {
    ...config,
    name: '火象社区3.0',
  };
};
