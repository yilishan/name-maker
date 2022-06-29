const nodejieba = require("nodejieba");
const shijing = require("../assets/shijing.json");

const content = shijing[0].content;
console.log('content==', content);
const result = nodejieba.cut(content);
console.log('分词：', result);