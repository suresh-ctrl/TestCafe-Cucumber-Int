# add test scenarios here in feature file
# Since, we are using the Cucumber (Gherkin) Full Support extension in VSCode,

# please notice the syntax highlighting and completion, while writing the scenarios

Feature: login page
As a user enter valid credentials to check successful login message
Scenario: Scenario Outline name: Enter credentials in login page and get message successfully
Given user navigates to the heroku form page
When enter username "tomsmith" in the username field
And  enter password "SuperSecretPassword!" in the password field
And click submit 
Then login successfully message is displayed "You logged into a secure area!"

# Example: Valid Credentials
# |username|password|message|
# |tomsmith|SuperSecretPassword!|You logged into a secure area!|
    