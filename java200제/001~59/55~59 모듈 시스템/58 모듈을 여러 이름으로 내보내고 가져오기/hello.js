export const version = 'v1.0';

export var personA = {
	name: 'a'
};

export function add(a, b) {
return a+b;
}

export class Person {
	constructor(name) {
		this.name = name;
	}
}
// export {version, Person} 의 형태로 선언 이후 export도 가능
//단 이때는 무조건 {}안에 넣어야함. export Person; 은 안됨.