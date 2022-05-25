import _ from 'lodash';
import './style.css';
import logo from './img.jpg';
import data from './data.xml';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['你好', '世界'], ' ');
    element.classList.add('hello');

    const img = new Image();
    img.src = logo;

    element.appendChild(img);

    console.log(data);

    return element;
}

document.body.appendChild(component());