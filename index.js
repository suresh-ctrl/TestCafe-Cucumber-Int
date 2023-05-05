
var reporter = require('cucumber-html-reporter');

var options = {

        theme: 'bootstrap',

        jsonFile: 'reports/cucumber_report.json',

        output: 'reports/cucumber_report.html',

        reportSuiteAsScenarios: true,

        scenarioTimestamp: true,

        launchReport: true,

        metadata: {

            "Title": "Sample Report",

            "Browser": "Chrome",

            "Platform": "Windows 10"

        }

    };

reporter.generate(options);