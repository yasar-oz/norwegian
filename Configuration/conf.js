let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
   framework: 'jasmine',
   jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000

},
   directConnect: 'true',
   specs: ['../Tests/signUpForEmail.spec.js'],

// suites:{
//     smoke: ['../Tests/BankManagerSimple.spec.js','../Tests/demo.spec.js'],
//     regression: ['../Tests/*.spec.js'] //We may not have a control on which one to start first
// },


   onPrepare: function(){
    // browser.manage().timeouts().implicitlyWait(10000),
    jasmine.getEnv().addReporter(new SpecReporter({
       displayFailuresSummary: true,
       displayFailuredSpec: true,
       displaySuiteNumber: true,
       displaySpecDuration: true,
       showstack: false
    }));

    jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: '../Report/Screenshots',
           preserveDirectory: false,
           screenshotsSubfolder: 'images',
           jsonsSubfolder: 'jsons',
           docName: 'Storm-Report.html'

        }).getJasmine2Reporter());
   },

   capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
            '--start-fullscreen'
            
            ]
        },
        'shardTestFiles': true,
        'maxInstances': 1
    }
    
 };