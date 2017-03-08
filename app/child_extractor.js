"use strict";

const syncRequest = require('sync-request');
const cheerio = require('cheerio');

let dataCache = {
	data: null,
	expire: null
};

exports.getChild = (childName) => {
	let children = this.getChildren();
	let result = children.find(e => childName === e.name);
	return result;
};

exports.getChildren = () => {
	return getChildrenInfoFromCache();
};

let getChildrenInfoFromCache = () => {

	if (dataCache.expire === null || dataCache.expire + 60000 < Date.now()) {
		dataCache.data = createChildrenInfo();
	}
	return dataCache.data;
};

let createChildrenInfo = () => {
	
	let URL = 'http://dchild.inven.co.kr/dataninfo/child/';
	let CHILD_URL = 'http://destinychild.inven.co.kr/dataninfo/child/detail.php?code=';
	
	let allResponse = syncRequest('GET', URL);
	let allBody = allResponse.getBody('utf8');

	let $ = cheerio.load(allBody);
	let $all = $('div.childList tbody');
	let entries = $all.find('tr');

	let results = [];
	entries.each((i, e) => {
		let $entry = $(e);
		let name = $entry.find('td.name b').text();
		let link = $entry.find('td.name a').attr('href');
		results.push({ name, link });
	});

	return results;
};



let getTotalInfo = () => {
	

	//dataCache = 
};