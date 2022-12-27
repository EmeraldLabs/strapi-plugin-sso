'use strict';

module.exports = {
  default: {

    // Google
    GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_REDIRECT_URI || '[Client ID created in GCP]',
    GOOGLE_OAUTH_CLIENT_SECRET: process.env.GOOGLE_GSUITE_HD || '[Client Secret created in GCP]',
    GOOGLE_OAUTH_REDIRECT_URI: process.env.GOOGLE_OAUTH_REDIRECT_URI || 'http://localhost:1337/strapi-plugin-sso/google/callback', // URI after successful login
    GOOGLE_ALIAS: process.env.GOOGLE_ALIAS || '', // Gmail Aliases
    GOOGLE_GSUITE_HD: process.env.GOOGLE_GSUITE_HD || '', // G Suite Primary Domain

    // Cognito
    COGNITO_OAUTH_CLIENT_ID: process.env.COGNITO_OAUTH_CLIENT_ID || '[Client ID created in AWS Cognito]',
    COGNITO_OAUTH_CLIENT_SECRET: process.env.COGNITO_OAUTH_CLIENT_SECRET || '[Client Secret created in AWS Cognito]',
    COGNITO_OAUTH_DOMAIN: process.env.COGNITO_OAUTH_DOMAIN || '[OAuth Domain created in AWS Cognito]',
    COGNITO_OAUTH_REDIRECT_URI: process.env.COGNITO_OAUTH_REDIRECT_URI || 'http://localhost:1337/strapi-plugin-sso/cognito/callback', //  // URI after successful login
    COGNITO_OAUTH_REGION:  process.env.COGNITO_OAUTH_REGION || 'us-east-1', // AWS Cognito Region
  },
  validator() {
  },
};
