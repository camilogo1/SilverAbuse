import './styles/common.css';
import _ from 'lodash';
import { cube } from './math.js';
import SAlogo from './images/SAlogo.svg';
import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

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

    element.appendChild(btn);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    btn.onclick = e =>
        import ( /* webpackChunkName: "dynoMod" */ './dynoMod').then(module => {
            var print = module.default; 
            print(); 
        });

    return element;
}

document.body.appendChild(component());
console.log('Hello webpack! 5 cubed is equal to ', cube(5));

/*if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    });
}*/