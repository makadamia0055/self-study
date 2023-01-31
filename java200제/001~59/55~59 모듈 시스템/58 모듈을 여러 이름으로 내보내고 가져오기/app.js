import { add, Person, version} from '.hello.js';

const result = add(1, 2);
const harin = new Person('하린');

console.log(result);
console.log(harin.name);
console.log(version);

// 모듈에서 가져온 이름은 오직 읽기만 가능, 다시 다른 값을 할당하면 오류가 남.