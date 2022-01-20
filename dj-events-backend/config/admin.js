module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8be5ddc63e1d26c0ed9e1cf217e1c12f'),
  },
});
