import './tab.css';
import {getData} from 'api/getData';
import {URL,TAB_ITEM_CLASS,TAB_ITEM_ACTIVE_CLASS_NAME} from './config';

class Tab {
    constructor(el) {
        this.itemEls = el.querySelectorAll(TAB_ITEM_CLASS);
    }
    setActiveItem(index){
        for(const itemEl of this.itemEls) {
            itemEl.classList.remove(TAB_ITEM_ACTIVE_CLASS_NAME);
        }
        this.itemEls[index].classList.add(TAB_ITEM_ACTIVE_CLASS_NAME);
    }
    to(index) {
        this.setActiveItem(index);
        return getData(`${URL}/${this.itemEls[index].dataset.id}`);
    }
}

export default Tab;