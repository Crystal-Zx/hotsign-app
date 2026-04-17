/**
 * NOTE: 定义 APP 中的全局配置（可供热更新读取）
 */

export interface AppConfig {
  ALPHA_HTTP_API_V1: string;
  ALPHA_HTTP_API_V2: string;
}

// 定义可用的环境类型
export type Environment = 'development' | 'production';
