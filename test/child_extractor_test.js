"use strict";

var assert = require('assert');
var childExtractor = require('../app/child_extractor.js');

describe('child_extractor.js Test', function() {
	
	describe('#getChildInfoSync()', function() {
		
		it('should return specific format', function() {
			var result = childExtractor.getChild('디나시');
			
			assert.deepStrictEqual(result, {
				name: '디나시',
				link: 'http://destinychild.inven.co.kr/dataninfo/child/detail.php?d=99&c=5500008',
				type: '화속성',
				class: '방어형'
			});

		});

		it('should return null at wrong input', function() {
			var result = childExtractor.getChild('뒤틀린 다나');
			assert.deepStrictEqual(result, null);
		});

	});

});