import _ from 'lodash';
import './styles/common.css';
import SAlogo from './images/SAlogo.svg';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Beware', 'Silver', 'Abuse'], '! ');
    element.classList.add('hello');
    // Add the image to our existing div.
    var SAlogoImg = new Image();
    SAlogoImg.src = SAlogo;

    element.appendChild(SAlogoImg);

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());