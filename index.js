/**
 * Calculates the value of account after applying compount interest for given N of years
 * @param {number} original_value The original principle in the account
 * @param {number} interest_rate The compound interest rate
 * @param {number} years How many years the account will compound annually
 * @returns {number}
 */
exports.annualCompoundInterestByYear = (
    original_value,
    interest_rate,
    years
  ) => (original_value * Math.pow(1 + interest_rate / 100, years)).toFixed(2);