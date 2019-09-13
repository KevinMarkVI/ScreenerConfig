var Steps = require('screener-runner/src/steps');

module.exports = {
  // full repository name for your project:
  projectRepo: 'KevinBerg/RunnerDemo',

  // this example assumes Environment Variables listed below exist on your system:
  apiKey: process.env.SCREENER_API_KEY,

  newSessionForEachState: true,

  // array of UI states to capture visual snapshots of.
  // each state consists of a url and a name.
  states: [
    {
      url: 'https://www.saucedemo.com',
      name: 'Sauce Demo Application',
      steps: new Steps()
        .setValue('#user-name','standard_user')
        .setValue('#password','secret_sauce')
        .click('#login_button_container > div > form > input.btn_action')
        .snapshot('Standard Page')
        .end()
    },
  ],

  browsers: [
    {
      browserName: 'chrome',
      version: '74.0'
    },
    // {
    //   browserName: 'firefox'
    // },
    // {
    //   browserName: 'internet explorer',
    //   version: '11'
    // },
    // {
    //   browserName: 'microsoftedge',
    //   version: '17.17134'
    // },
    // {
    //   browserName: 'safari',
    //   version: '11.1'
    // }
  ],

  sauce: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    tunnelIdentifier: 'myTunnel',
    maxConcurrent: 100
  }
};