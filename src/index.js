import _ from 'lodash';
import './styles/common.css';
import SAlogo from './images/SAlogo.svg';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Beware', 'Silver', 'Abuse'], '! ');
    element.classList.add('hello');
    // Add the image to our existing div.
    var SAlogoImg = new Image();
    SAlogoImg.src = SAlogo;

    element.appendChild(SAlogoImg);

    return element;
}

document.body.appendChild(component());