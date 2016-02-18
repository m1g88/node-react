import google from 'googleapis'
import fs from 'fs'

const OAuth2 = google.auth.OAuth2;
const scopes = ['https://www.googleapis.com/auth/admin.reports.audit.readonly'];


export default function (callback) {
/**
* appRoot is Golbal variable
*/
  try {
    fs.readFile(`${appRoot}/config/client_secret.json`,(err, content) => {
       if (err) {
         console.log('Error loading client secret file: ' + err);
         return;
       }
       // Authorize a client with the loaded credentials, then call the
       // Reports API.
       callback(authorize(JSON.parse(content)))
     })

  } catch (e) {

  } finally {

  }

}


function authorize(credentials) {
  let clientSecret = credentials.web.client_secret;
  let clientId = credentials.web.client_id;
  let redirectUrl = credentials.web.redirect_uris[0];

  console.log(`${clientSecret}`)

  //let auth = new googleAuth();
  //let oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);
  let oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  let url = oauth2Client.generateAuthUrl({
      access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
      scope: scopes // If you only need one scope you can pass it as string
  });
  //console.log(`googleAuthUrl : ${url}`)
  return url

  // // Check if we have previously stored a token.
  // fs.readFile(TOKEN_PATH, function(err, token) {
  //   if (err) {
  //     getNewToken(oauth2Client, callback);
  //   } else {
  //     oauth2Client.credentials = JSON.parse(token);
  //     callback(oauth2Client);
  //   }
  // });
}

// generate a url that asks permissions for Google+ and Google Calendar scopes
