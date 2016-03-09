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
export function getUserInfoFromAuthCode(authorizationCode){
  //console.log(`code : ${code}`)

 return new Promise ((resolve, reject) => {
   oAuthGetToken(authorizationCode)
   .then(getUserInfo)
   .then(objUserInfo => resolve(objUserInfo))
   .catch((e) => {
       console.log(`Handle rejected promise ('${e}') here.`)
       reject(e)
   })
  })
}


/**
 *  Google auth url
 * @param { object } credentials
 * @return { promise }
 */
function oAuthGetToken (authorizationCode) {
  return new Promise ((resolve,reject) => {
    oauth2Client.getToken(authorizationCode, (err, token) => {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        reject(err)
      } else {
        console.log(`[ oAuthGetToken Success ]`)
        resolve(token)
      }
    })
  })
}


function getUserInfo (token) {

  // if you need to use plus 'let plus = google.plus('v1')'
  const oauth2 = google.oauth2('v2')
  const fieldsConfig = 'id,email,name,hd,gender,picture'


  return new Promise ((resolve, reject) => {
      oauth2Client.credentials = token
      oauth2.userinfo.get(
        { auth: oauth2Client, fields: fieldsConfig} ,(err, response) => {
          if (err) {
            console.log(`[getUserInfo : ${err}]`)
            reject(err)
          } else {
            console.log(`[ getUserInfo Success ]`)
            resolve(response)
          }
        }
      )
  })

}


/**
 * Generate Google auth url
 * @param { object } credentials
 * @return { promise }
 */
function getGoogleAuthUrl (credentials) {

  let clientSecret = credentials.web.client_secret
  let clientId = credentials.web.client_id
  let redirectUrl = credentials.web.redirect_uris[0]

  oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl)

  let url = oauth2Client.generateAuthUrl({
      access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
      scope: scopes // If you only need one scope you can pass it as string
  })

  //console.log(`googleAuthUrl : ${url}`)
  return url

}

// generate a url that asks permissions for Google+ and Google Calendar scopes
