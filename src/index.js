import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.onclick = printMe;
    btn.innerHTML = 'BUTTON';
    element.appendChild(btn);

    return element;
}

let element = component(); // 当页面重新渲染时重新获取元素
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', () => {
        console.log('Accepting the updated print module !');
        // printMe();
        document.body.removeChild(element);
        element = component(); // 当  print.js 改变后重新绑定最新的回调
        document.body.appendChild(element);
    })
}