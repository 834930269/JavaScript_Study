'use strict';

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));
var bmi = (weight-height)*(weight-height);
if (bmi<18.5) alert('过轻');
if (bmi<25 && bmi>=18.5) alert('正常');
if (bmi<28 && bmi>=25) alert('过重');
if (bmi<32 && bmi>=28) alert('肥胖');
if (bmi>=32) alert('严重肥胖');