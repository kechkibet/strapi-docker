module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      sizeLimit: 5096 * 1024 * 1024, // 5096mb in bytes
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('CDN_URL'),
        rootPath: env('CDN_ROOT_PATH'),
        accessKeyId: env('SCALEWAY_ACCESS_KEY_ID'),
        secretAccessKey: env('SCALEWAY_ACCESS_SECRET'),
        endpoint: env('SCALEWAY_ENDPOINT'), // e.g. "s3.fr-par.scw.cloud"
        params: {
          Bucket: env('SCALEWAY_BUCKET'),
        },
      },
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
