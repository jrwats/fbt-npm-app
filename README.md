# Standalone Babel/Webpack/React Demo using NPM modules

[fbt-runtime](https://www.npmjs.com/package/fbt-runtime)
[babel-plugin-fbt](https://www.npmjs.com/package/babel-plugin-fbt)
[babel-plugin-fbt-runtime](https://www.npmjs.com/package/babel-plugin-fbt-runtime)

* `yarn install` to pull in dependencies down
* `yarn manifest` to generate enum and source manifests
* `yarn collect-fbts` to collect FBT translatable texts
* `yarn translate-fbts` to generate translatedFbts.js from translation_input.json
* `yarn build` to generate static files in `./output/`.
  * The commands above are required to run this step
* `yarn start` to run a local server with hot reloading.
* `yarn test` to run unit tests.
