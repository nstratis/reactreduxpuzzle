/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Import the JSON file of scores
import scores from './scores.json'
// Set a timeout for the requests
const TIMEOUT = 100
// Export the default functions
export default {
  getScores: (callback, timeout) => setTimeout(() => callback(scores), timeout || TIMEOUT),
}
