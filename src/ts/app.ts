//debugger;
import './../less/index' 
import { sayHelloTo } from './hello'
const span = document.createElement('span');
span.innerText = sayHelloTo('Javascript Developer');

document.body.appendChild(span);