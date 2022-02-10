module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '53d81f916451ca5e7bd9318f4c0740f1'),
  },
});
