// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appTitle: "Proofread PWA",
  firebaseConfig : {
    apiKey: "AIzaSyD9_7d8lS_P6YT2uQlm0ZjTxt1ANhYsIM0",
    authDomain: "proofreading-44369.firebaseapp.com",
    databaseURL: "https://proofreading-44369.firebaseio.com",
    projectId: "proofreading-44369",
    storageBucket: "proofreading-44369.appspot.com",
    messagingSenderId: "426423372307",
    appId: "1:426423372307:web:a0114bcc7beb6986"
  },
  dateFormat: "dd/MMM/yyyy",
  dateFormatShort: "dd/MMM/yy"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
