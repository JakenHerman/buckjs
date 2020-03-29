const assert = require('assert');
const buck = require('../index');

describe('Compound Interest', function() {
  describe('#annualCompountInterestByYear()', function() {
    it('should return 161.05 when principal is 100 at 10% interest for 5 years', function() {
      assert.equal(buck.annualCompoundInterestByYear(100, 10, 5), 161.05);
    });
    
    it('should return 161.05 when principal is 100 at 10% interest for 0 or null years', function() {
      assert.equal(buck.annualCompoundInterestByYear(100, 10, null), 100.00);
    });

    
    it('should return 161.05 when principal is 100 at 0 or null interest for 5 years', function() {
      assert.equal(buck.annualCompoundInterestByYear(100, null, 5), 100.00);
    });
    
    it('should return 0.00 if no principal is given', function() {
      assert.equal(buck.annualCompoundInterestByYear(null, 10, 5), 0.00);
    });
  });
});

describe('Amortization', function() {
  describe('#yearlyAmortization()', function() {
    it('should return 400.76 when principal is 20,000 at 7.5% interest for 5 years', function() {
      assert.equal(buck.yearlyAmortization(20000, 7.5, 5), 400.76);
    });

    it('should return 1060.66 when principal is 100,000 at 5.0% interest for 10 years', function() {
      assert.equal(buck.yearlyAmortization(100000, 5, 10), 1060.66);
    });
  
  });
});

describe('50/30/20 Rule', function() {
  describe('#fiftyThirtyTwenty()', function() {
    it('should return a json object with properties 50, 30, 20 when given monthly_income of 100', function() {
      const result = buck.fiftyThirtyTwentyRule(100);
      assert.equal(result.necessities, 50);
      assert.equal(result.wants, 30);
      assert.equal(result.savings_and_debt, 20);
    });
  });
});