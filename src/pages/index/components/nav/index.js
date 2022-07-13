import './nav.css';

import {URL,LAYOUT_NAV_ID} from './config';
import {getData} from 'api/getData';
import render from './nav.art';
//https://www.imooc.com/api/mall-wepApp/index/nav
getData(URL)
.then(data=>{
    document.getElementById(LAYOUT_NAV_ID).innerHTML = render({
        items:data
    });
})