//debugger;
import { sayHelloTo } from '@scripts/helpers'
import md5 = require('blueimp-md5');

const h1 = document.createElement('h1');
h1.innerText = sayHelloTo('Javascript - Developer - P2');

const p = document.createElement('p');
p.innerHTML = '"<strong>JHIKHUKJ</strong>" em md5:<strong>' + md5('JHIKHUKJ') + '</strong>';

document.body.appendChild(h1);
document.body.appendChild(p);
console.log($('body h1').html());