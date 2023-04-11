module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'awesomer2.uk',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'awesomer2.uk',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::body",
    config: {
      formLimit: "5096mb", // modify form body
      jsonLimit: "5096mb", // modify JSON body
      textLimit: "5096mb", // modify text body
      formidable: {
        maxFileSize: 5094 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
];
