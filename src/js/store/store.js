/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Check the current environment and export the correct store
if(process.env.NODE_ENV === 'production'){
  //module.exports = require('./store.prod');
} else {
  module.exports = require('./store.dev');
}
