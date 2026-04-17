import { APP_CONFIG } from '@/constants/config';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Text>当前环境：{process.env.EXPO_PUBLIC_ENV}</Text>
      <Text>API_V1：{APP_CONFIG.ALPHA_HTTP_API_V1}</Text>
      <Text>API_V2：{APP_CONFIG.ALPHA_HTTP_API_V2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
