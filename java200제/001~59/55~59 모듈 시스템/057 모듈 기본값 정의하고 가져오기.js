export default 'hello';

export default function hello(name) {
	console.log('hello ' + name);

};

/** default 키워드 : 모듈에서 기본 값으로 내보내는 값을 정의
 *  default 값 뒤에	기본형과 참조형 모두 올 수 있음.
 *  default 키워드 다음에 var, let, const 같은 변수 선언 키워드가 올 수 없음
 *  해당 모듈의 기본 값을 선언하는 것이기 때문에 변수 선언 키워드가 오면 문법적 오류가 나옴.
 */

export default class Hello{
	constructor(greeting){
		this.greeting = greeting;
	}
	hi(name){
		console.log(`${this.greeting} ${name}`);
	}
}