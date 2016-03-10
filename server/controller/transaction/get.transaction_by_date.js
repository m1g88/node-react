import request from 'superagent'

const url = `${config.paynow_url}:${config.port}/paynow/1/auth`

export default (req, res, next) => {
  /**
   * req.session provire by express-session
   */
  let userProfiles = req.session.userProfiles

  res.status()

}
