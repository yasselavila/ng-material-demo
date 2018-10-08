export interface EnvApiConfig {
  baseUrl: string;
}

export interface EnvConfig {
  production: boolean;
  api: EnvApiConfig;
}
