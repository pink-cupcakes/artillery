'use strict';
// Make sure to "npm install faker" first.
const Faker = require('faker');
const env   = require('./config.js');
const fs    = require('fs');

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

const generageJobData = (jobContext, events, done) => {
    // generate data with Faker:
    var name = `${Faker.name.firstName()}`;
    // add variables to virtual user's context:
    jobContext.vars.name = name;
    // continue with executing the scenario:
    return done();
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

const generateTimeData = (timeContext, events, done) => {
    // generate data with Faker:
    var day = Faker.random.number({'min': 1, 'max': 30});
    // add variables to virtual user's context:
    timeContext.vars.date = `2018-09-${day}`;
    // continue with executing the scenario:
    return done();
};

const setBatchRequest = (requestParams, context, ee, next) => {
    // var array = fs.readFileSync(__dirname + '/batch-TimeEntry.txt').toString('').split("\r\n");
    // console.log(array.join(''));
    
    requestParams.body = '@batch-TimeEntry.txt';
    // console.log(requestParams);
    return next();
};

const logger = (requestParams, response, context, ee, next) => {
    console.log(requestParams);
    next();
}

module.exports = {
    cookie              : cookie,
    basicAuth           : basicAuth,
    generateClientData  : generateClientData,
    generateUserData    : generateUserData,
    generageJobData     : generageJobData,
    generageTaskData    : generageTaskData,
    generateTimeData    : generateTimeData,
    setBatchRequest     : setBatchRequest,
    logger              : logger
};