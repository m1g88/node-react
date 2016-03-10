let config = {}

let env = process.env.NODE_ENV || 'development'
process.env.NODE_ENV = env

config.paynow_url = 'http://107.167.180.200'
config.port = 443

config.admin_email = 'new@paysbuy.co.th'
config.admin_password = 'idontknow'


module.exports = config
