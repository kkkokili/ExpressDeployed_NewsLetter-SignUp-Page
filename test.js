// This File is used to test API setup correctly, it should be run in node terminal
// because the require function only be used in Node.js, it cannot be opened with browser
// jshint esversion: 8
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "1eb594d9d0ad2409e949e00fe3b4c695-us6",
  server: "us6",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();
