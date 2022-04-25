console.log('test');
// obj about reference
let obj={
    name: 'Mattis',
    age:5,
}
console.log(obj);
console.log(obj.name);
console.log(obj.age);

let obj2= obj;
console.log(obj2.name);

obj.name ='Noah';
console.log(obj.name);
console.log(obj2.name);

// funtion
const num =1;
const num2 =2;
const result= num +num2;
console.log(result);

function add(a,b) {
    return a + b;
}
const result2= add(4,7);
console.log(result2);
// wichtig

const doSomething = add;
console.log(doSomething);
const result3 =doSomething(8,9);
console.log(result3);

function print(f,g){
    console.log(`${f} ${g}`);
}
print(8,33);
console.log('-----------');
console.clear();

function surprise(operator){
    const result = operator(10,22);
    console.log(result);

}
surprise(add);
// console.log(surprise);
console.clear();
// boolean &operator && 
//  false: 0, -0,'', null, undefined
// true:-1, 'hello",'false'
let num4;
if(num) {
    console.log('true');
}else{
    console.log('false');
}
console.clear();
// class & callbacks 

class Counter{
    constructor(){
        this.counter =0;
    }
    increase(){
        this.counter++;
        console.log(this.counter);
        if(this.counter %5 ===0){
            console.log('stop');
        }
         
        
    }
}

const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();