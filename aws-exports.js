import {envVar} from './_env';

const awsConfig = {
    identityPoolId: envVar.IDENTITY_POOL_ID,
    region: envVar.REGION,
    userPoolId: envVar.USER_POOL_ID,
    userPoolWebClientId: envVar.CLIENT_ID
  }
  
  export default awsConfig;