/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'coffeeshop-full-stack.us', // the auth0 domain prefix
    audience: 'drinks', // the audience set for the auth0 app
    clientId: '6q10mESbUXNBYSSqKKvZeAA3qoaQUT1M', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};
