const processEnv = {};
const envs = {...process.env, ...process.client_envs};

Object.keys(envs).forEach((k) => {
  processEnv[k.toUpperCase()] = envs[k];
});
const config = {
  LogLevel: 'debug',
  Port: '8088',
  Env: 'pre', // mocked
  Version: '',
  CryptoAlgorithm: 'aes-256-cbc',

  AuthServiceEndpoint: 'https://ucp-login.sophtron-prod.com/api',
  //AuthServiceEndpoint: 'http://localhost:8081/api',
  
  SophtronApiServiceEndpoint: 'https://api.sophtron-prod.com/api',
  SophtronVCServiceEndpoint: 'https://vc.sophtron-prod.com/api/',
  //SophtronVCServiceEndpoint: 'http://localhost:8083/api/',

  UcpClientId: '',
  UcpClientSecret: '',
  UcpEncryptionKey: '',

  SophtronApiUserId: '',
  SophtronApiUserSecret: '',

  MxClientId:'',
  MxApiSecret: '', 
  MxClientIdProd: '',
  MxApiSecretProd: '',

  AkoyaClientId:'',
  AkoyaApiSecret: '', 
  AkoyaClientIdProd: '',
  AkoyaApiSecretProd: '',

  FinicityPartnerId: '',
  FinicityAppKey: '',
  FinicitySecret: '',
  FinicityPartnerIdProd: '',
  FinicityAppKeyProd: '',
  FinicitySecretProd: '',
};

const arr = Object.keys(config);
for (let i = 0; i < arr.length; i++) {
  const key = arr[i];
  config[key] = processEnv[key.toUpperCase()] || config[key];
}

module.exports = config;
