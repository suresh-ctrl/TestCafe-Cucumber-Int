const {Selector} = require('testcafe');
const { testController } = require('../testControllerHolder');

/*
Create and export a module with name "elements". This module contains functions.
Each function is returning a Selector for a particular web element and bind to testController.
This module can be imported and called from Step Definitions to access the web elements.
*/

//element = module name, which has functions and it returns selectors with testcontroller for step definitions call back
exports.elements = {
    //EleName
    usernametxt : function() {
        return Selector('#username').with({ boundTestRun: testController });
    },
    passwordtxt : function() {
        return Selector('#password').with({ boundTestRun: testController });
    },
    loginButton : function() {
        return Selector('.radius').with({boundTestRun : testController});
    },
    flashMessage : function() {
        return Selector('#flash').with({boundTestRun : testController});
    }
}