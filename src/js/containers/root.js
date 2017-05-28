/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Check the current environment and export the correct component container
if(process.env.NODE_ENV === 'production'){
  module.exports = require('./root.dev');
} else {
  module.exports = require('./root.dev');
}
