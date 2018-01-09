import './styles/common.css';
import React from 'react';
import { render } from 'react-dom';
import homeImg from './images/homepage.jpg';
import homeLogo from './images/SAlogoWhite.svg';
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

const headImg = document.createElement('img');
headImg.src = homeImg;
headImg.id = 'home-head-image';

const headLogo = document.createElement('img');
headLogo.src = homeLogo;
headLogo.id = 'logo-svg';

const mainElement = document.createElement('div');
mainElement.id = 'react-container';

const logoDiv = document.createElement('div');
logoDiv.id = 'logo-container';

const docBody = document.body;

docBody.appendChild(logoDiv).appendChild(headImg);
docBody.appendChild(logoDiv).appendChild(headLogo);
docBody.appendChild(mainElement);

render(routes, mainElement);

