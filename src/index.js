import './styles/common.css';
import React from 'react';
import { render } from 'react-dom';
//import { cube } from './math.js';
//import printMe from './print.js';
import routes from './routes';

if (process.env.NODE_ENV !== 'production') {
    console.log('DDDDDDDD>>>>>>>Development mode!');
}
/*
    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    btn.onclick = e =>
        import ('./dynoMod').then(module => {
            var print = module.default; 
            print(); 
        });

    return element;
}*/

window.React = React;

const mainElement = document.createElement('div');
mainElement.id = 'react-container';

document.body.appendChild(mainElement);

render(routes, mainElement);

