var assert = require('assert');
var childExtractor = require('../app/child_extractor.js');

describe('child_extractor.js Test', function() {
	
	describe('#getChildInfoSync()', function() {
		
		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(4));
		});

		it('should return specific format', function() {
			var result = childExtractor.getChild('디나시');
			
			assert.deepStrictEqual(result, {
				name: '디나시',
				link: 'http://destinychild.inven.co.kr/dataninfo/child/detail.php?d=99&c=5500008',
				//type: '화속성',
				//class: '방어형'
			});

		});

	});

});