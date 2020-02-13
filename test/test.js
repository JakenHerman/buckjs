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