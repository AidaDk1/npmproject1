var moment=require('moment');
var unique=require('uniq');

var myDate=new Date();
var myCoolDate=moment(myDate).format('LL');
var myList = [1,1,1,2,2,4,3,1,1,2,4,5,5,5,8,9];
var uniqList=unique(myList);
console.log(uniqList);
console.log(myCoolDate);