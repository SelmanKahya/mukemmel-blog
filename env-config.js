const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://ahmetdadak.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://ahmetdadak.herokuapp.com',
  'process.env.CLIENT_ID': 'j8cm0De3RGDVbmrILDAzBc0RqWs09OF1'
}