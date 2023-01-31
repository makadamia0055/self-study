var obj = {};
for (var i = 0; i< 4; i++){
	obj['key' + i] = i;
}
console.log(obj);

var profile = 'chloe:30';
var person = {
	[profile] : true,
  [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);
/*
속성 접근자 [] 안에 식을 넣거나 변수를 대입하여 동적으로 객체 속성들을 
생성

*/