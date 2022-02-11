module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '32aedc99c41ded716812de08ec788329'),
  },
});
