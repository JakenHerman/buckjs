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

  exports.yearlyAmortization = (
    principle,
    _rate,
    term
  ) => {
    rate = (_rate/100) / 12;
    const numerator = rate*Math.pow((1+rate), (12*term));
    const denominator = Math.pow((1+rate), (12*term)) - 1;

    const paymentPerPeriod = principle * (numerator / denominator);
    return paymentPerPeriod.toFixed(2);
  };

  exports.fiftyThirtyTwentyRule = (
    monthly_income
  ) => ({
    necessities: monthly_income * .5,
    wants: monthly_income * .3,
    savings_and_debt: monthly_income * .2
  });

  /**
   * Caluclates the future value of an annuity
   * @param {number} original_value The original principle in the account
   * @param {number} payments_made The dollar value of regularly occuring contributions
   * @param {number} times_to_compound How many times the account will compound
   * @param {number} interest_rate The interest rate of the annuity
   * @returns {number}
   */
  exports.annuityFutureValue = (
    original_value,
    payments_made,
    times_to_compound,
    interest_rate
  ) => {
    const original_compounded = original_value * Math.pow((1 + interest_rate), times_to_compound);
    const payments_compounded = (payments_made * (Math.pow((1 + interest_rate), times_to_compound) - 1)) / interest_rate;
    return (original_compounded + payments_compounded).toFixed(2);
  };