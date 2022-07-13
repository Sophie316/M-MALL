import 'swiper/swiper-bundle.min.css';
import './slider.css';
import Swiper from 'swiper/swiper-bundle.min.js';

import config,{SWIPER_CONTAINER_CLASS,URL,LAYOUT_ID} from './config';

import render from './slider.art';
import {getData} from 'api/getData';

getData(URL)
.then(data=>{
    document.getElementById(LAYOUT_ID).innerHTML = render({
        ...config,
        ...{imgs:data}
    });

    // console.log(render({...{imgs:data}}));

    new Swiper(SWIPER_CONTAINER_CLASS,config);
})
//data数据：[{url:},{}]

//端口
//https://www.imooc.com/api/mall-wepApp/index/slider