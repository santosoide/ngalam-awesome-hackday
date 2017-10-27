const ONE_DAY = 60 * 60 * 24 * 1000;

module.exports = {
  auth: {
    secret: 'super secret',
    cookie: {
      enabled: true,
      httpOnly: false,
      maxAge: ONE_DAY,
      secure: process.env.NODE_ENV === 'production'
    },
    facebook: {
      path: '/auth/facebook',
      clientID: '305260689954584',
      clientSecret: 'a90d91556f498187552ad032347f642c',
      permissions: {
        authType: 'rerequest'
      },
      scope: ['public_profile', 'email'],
      profileFields: ['id', 'displayName', 'photos', 'email', 'first_name', 'last_name', 'age_range'],
      accessTokenField: 'accessToken'
    }
  }
};
