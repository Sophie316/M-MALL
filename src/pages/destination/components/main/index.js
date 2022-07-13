import './main.css';

import Tab from '../tab';
import Content from '../content';
import 'components/loading';

const tabContainer = document.querySelector('.tab');
const tab = new Tab(tabContainer);
const contentContainer = document.getElementById('destination-content');
const content = new Content(contentContainer);

const tabEls = tabContainer.querySelectorAll('.tab-item');

tabContainer.addEventListener('click',ev=>{
    const activeItem = ev.target;
    if(activeItem.classList.contains('tab-item')) {
        const index = activeItem.dataset.id-1;
        const tabPromise = tab.to(index);

        content.setLoading();

        tabPromise.then(data=>{
            content.set(data);
        })
    }
},false);

tabEls[0].click();

// tab.to(0).then(data=>{
//     content.set(data);
// })
// tab.setActiveItem(3);
// tab.to(2);