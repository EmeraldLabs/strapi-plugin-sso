'use strict';

module.exports = {
  default: {
    GOOGLE_OAUTH_REDIRECT_URI: process.env.GOOGLE_OAUTH_REDIRECT_URI || 'http://localhost:1337/strapi-plugin-sso/google/callback',
    GOOGLE_GSUITE_HD: process.env.GOOGLE_GSUITE_HD || '',
    GOOGLE_ALIAS: process.env.GOOGLE_ALIAS || '',

    COGNITO_OAUTH_REDIRECT_URI: process.env.COGNITO_OAUTH_REDIRECT_URI || 'http://localhost:1337/strapi-plugin-sso/cognito/callback',
    COGNITO_OAUTH_REGION: process.env.COGNITO_OAUTH_REGION || 'us-east-1',
  },
  validator() {
  },
};
