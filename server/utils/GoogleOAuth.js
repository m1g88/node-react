import google from 'googleapis'
import fs from 'fs'

const OAuth2 = google.auth.OAuth2
const scopes = ['https://www.googleapis.com/auth/userinfo.email']

let oauth2Client
export let url = ``

/**
* appRoot is Golbal variable
*/
const secret = `${appRoot}/config/client_secret.json`

fs.readFile(secret, (err, content) => {
   if (err) {
     console.log('Error loading client secret file: ' + err)
     return
   }
   // Authorize a client with the loaded credentials, then call the
   // Reports API.
   url = getGoogleAuthUrl(JSON.parse(content))
 })

/**
* @param  {string} params.query.code
* @return promise object { userinfo }
*/
export function getUserEmailFromAuthCode(authorizationCode){
  //console.log(`code : ${code}`)
 return  new Promise (
    function (resolve, reject) {
      oauth2Client.getToken(authorizationCode, function(err, token) {
        if (err) {
          console.log('Error while trying to retrieve access token', err);
          reject(err)
        } else {
          resolve(token)
        }
    })
  })
  .then((token) => {
    return oauth2Client.credentials = token
  })
  .then(() => {
    return getUserInfo()
  })
  .then((objUserInfo) => {
    //console.log(`objUserEmail : ` , objUserInfo)
    if (objUserInfo) {
      return objUserInfo
    }
  })
  .catch((reason) => {
      console.log(`Handle rejected promise ('${reason}') here.`);
  })

}


function getUserInfo () {
  //console.log(`getemail`)
  let oauth2 = google.oauth2('v2')
  //let plus = google.plus('v1');

  return new Promise (
    function (resolve, reject) {
      oauth2.userinfo.get({ auth: oauth2Client },
      function(err, response) {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
  })

}

function getGoogleAuthUrl(credentials) {
  let clientSecret = credentials.web.client_secret
  let clientId = credentials.web.client_id
  let redirectUrl = credentials.web.redirect_uris[0]

  oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl)

  let url = oauth2Client.generateAuthUrl({
      access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
      scope: scopes // If you only need one scope you can pass it as string
  });
  //console.log(`googleAuthUrl : ${url}`)
  return url

}

// generate a url that asks permissions for Google+ and Google Calendar scopes
