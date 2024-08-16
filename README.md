 # wikitest
 Installation
To set up and run this project on your local machine, follow these steps:

Clone the Repository:
git clone https://github.com/SerhatAydinn06/wikitest.git
cd wikitest

Install Dependencies:
Ensure that you have Node.js installed. Then, install the necessary packages by running:
npm install

Configure WebdriverIO:
WebdriverIO should be configured based on your environment and requirements. A basic configuration file (wdio.conf.js) is already included in the repository.

Project Structure
/features/: Contains the Cucumber feature files where test scenarios are defined.
/step_definitions/: Holds the step definition files that map the steps in feature files to code.
/pageobjects/: Includes the Page Object files, representing the different pages of the Wikipedia website.
wdio.conf.js: WebdriverIO configuration file.
Usage
To execute the tests, run the following command:

npx wdio run wdio.conf.js

This command will start the WebdriverIO test runner, execute the test scenarios defined in the Cucumber feature files, and generate a test report.

Example Test Scenario
Given: I open the web browser for Wikipedia.
When: I type a search query into the search box and click the search button.
Then: The URL should match the expected one, and specific content should be displayed on the page.
Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bugfix.
Make your changes.
Commit your changes with a descriptive message.
Push to your fork and submit a pull request.
