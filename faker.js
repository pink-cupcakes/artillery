'use strict';
// Make sure to "npm install faker" first.
const Faker = require('faker');
const env = require('./config.js');

const cookie = (cookieContext, events, done) => {
    // add variables to virtual user's context:
    cookieContext.vars.cookieAuth = env.cookieToken;
    // continue with executing the scenario:
    return done();
};

const basicAuth = (basicContext, events, done) => {
    // add variables to virtual user's context:
    basicContext.vars.basicAuth = env.basicAuth;
    // continue with executing the scenario:
    return done();
};

const generateClientData = (clientContext, events, done) => {
    // generate data with Faker:
    var name = `${Faker.company.companyName()}`;
    // add variables to virtual user's context:
    clientContext.vars.name = name;
    // continue with executing the scenario:
    return done();
};

const generateUserData = (userContext, events, done) => {
    // generate data with Faker:
    var name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
    var billingRate = Faker.random.number({'min': 200, 'max': 400});
    var CostRate = Faker.random.number({'min': 50, 'max': 150});
    // add variables to virtual user's context:
    userContext.vars.name = name;
    userContext.vars.email = `aqi+${name.split(' ')[0]}@clicktime.com`;
    userContext.vars.billingRate = parseFloat(billingRate);
    userContext.vars.CostRate = CostRate;
    // continue with executing the scenario:
    return done();
};

const jobSetJson = (requestParams, context, ee, next) => {
    console.log(context)
    requestParams.json = {
        JobNumber: context.vars.jobNumber,
        Name: context.vars.name
    };
    return next();
};

const generageJobData = (jobContext, events, next) => {
    // generate data with Faker:
    var name = `${Faker.name.firstName()}`;
    var jobNumber = Faker.random.number(100);
    // add variables to virtual user's context:
    jobContext.vars.name = name;
    jobContext.vars.jobNumber = jobNumber;
    // continue with executing the scenario:
    return next();
};


const generageTaskData = (taskContext, events, done) => {
    // generate data with Faker:
    var name = `${Faker.name.firstName()} ${Faker.name.lastName()}`;
    var billingRate = Faker.random.number({'min': 200, 'max': 400});
    var CostRate = Faker.random.number({'min': 50, 'max': 150});
    // add variables to virtual user's context:
    taskContext.vars.name = name;
    taskContext.vars.email = `aqi+${name.split(' ')[0]}@clicktime.com`;
    taskContext.vars.billingRate = parseFloat(billingRate);
    taskContext.vars.CostRate = CostRate;
    // continue with executing the scenario:
    return done();
};

module.exports = {
    cookie              : cookie,
    basicAuth           : basicAuth,
    generateClientData  : generateClientData,
    generateUserData    : generateUserData,
    generageJobData     : generageJobData,
    generageTaskData    : generageTaskData,
    jobSetJson          : jobSetJson
};