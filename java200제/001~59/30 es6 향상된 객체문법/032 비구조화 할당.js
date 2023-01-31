var obj = {a:1, b: 2, c: 30, d: 44, e:5};

var{a, c} = obj;
// 객체 비구조화 할당
// 중괄호 {} 안에 속성 이름을 넣어 객체의 여러 속성들을 한번에 가져 올 수 있음.
console.log(`a>>>${a}`);
console.log(`c>>>${c}`);

var {a:newA= 1, f: newF=5} = obj;
console.log(`newA>>>${newA}`);
console.log(`newF>>>${newF}`);