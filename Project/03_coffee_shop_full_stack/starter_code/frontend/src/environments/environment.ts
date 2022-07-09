/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'app-devp.us', // the auth0 domain prefix
    audience: 'drinks', // the audience set for the auth0 app
    clientId: 'ijk9ELOEddkpwqtyhAC1FWwKb4RqTkqW', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100/login-success', // the base url of the running ionic application. 
  }
};
