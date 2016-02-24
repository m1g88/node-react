/**
 * @param {object} res.body
 */
// export function getAliveSession (  ) {
//   new Promise((resolve, reject) => {
//     sessionStore.all((error, sessions) => {
//       if (error) {
//         reject(err)
//       } else {
//         resolve(sessions)
//       }
//     })
//   })
//   .then((sessions) => {
//     console.log(`getAliveSession ` , sessions)
//     return sessions
//   })
//   .catch((err) => {
//     console.log(`Error getAliveSession : `,err)
//     return err
//   })
// }
//
//
// export function findDuplicateSession (allCurrentSession,newSession){
//   new Promise(function(resolve, reject) {
//     resolve(_.findKey(allCurrentSession, (o) => {
//         return !_.isEmpty(o.userProfiles) &&
//                 !_.isEmpty(o.userProfiles.username) &&
//                   o.userProfiles.username == newSession.username
//       })
//     )
//   })
//
// }
//
//
// export function destroySessionBySID (SID){
//   new Promise((resolve, reject) => {
//       sessionStore.destroy(SID , (error) => {
//       // log error here
//       reject(error)
//     })
//     resolve (true)
//   })
//   .then(() => {
//
//   })
// }

export function checkDuplicateSession(reqBody) {

  new Promise((resolve, reject) => {
    sessionStore.all((error, sessions) => {
      if (error) {
        reject(err);
      } else {
        resolve(sessions)
      }
    })
  })
  .then((sessions)=>{
    //console.log(sessions)
    /**
    * return sessions SID
    */
    return _.findKey(sessions, (o) => {
          return !_.isEmpty(o.userProfiles) &&
              !_.isEmpty(o.userProfiles.username) &&
                o.userProfiles.username == objBody.username
  })
})
.then((key)=>{
  /**
  *  have a key, if
  */
  if (key)
    sessionStore.destroy(key , (error) => {
      // log error here
    })
    // console.log('key :' + key)
    req.session.userProfiles = req.body
    res.redirect('/')
  })

}
