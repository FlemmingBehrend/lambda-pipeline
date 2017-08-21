"use strict";

const _ = require('lodash');
const version = require('./version');

exports.handler = (event, context, callback) => {
  let appInfo = _.join([version.applicationName, version.applicationVersion, 'CD', 'pipeline - feb demo'], '-');

  callback(null, {
    "statusCode": 200,
    "body": appInfo,
    "headers": {
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "GET,OPTIONS",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
