//debugger;
import 'bootstrap'
import 'bootstrap-select'
import { sayHelloTo } from '@scripts/helpers'
import md5 = require('blueimp-md5');

const h1 = document.createElement('h1');
h1.innerText = sayHelloTo('Javascript - Developer - P10');

const p = document.createElement('p');
p.innerHTML = '"<strong>JHIKHUKJ</strong>" em md5:<strong>' + md5('JHIKHUKJ') + '</strong>';

document.body.appendChild(h1);
document.body.appendChild(p);
console.log($('body h1').html());
toastr.info('Mensagem informativa.', 'Informação');
toastr.warning('Mensagem informativa.', 'Informação');