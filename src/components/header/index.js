import './header.css';
import Scroll from 'utils/scroll';

const CHANGED_CLASS_NAME = 'header-transition';

class Header{
    constructor(el,criticalPoint,scrollContainer,EventEl=scrollContainer){
        this.el = el;

        new Scroll({
            criticalPoint,
            change:()=>{
                this.change();
            },
            init:()=>{
                this.init();
            }
        },scrollContainer,
        EventEl);
    }
    change(){
        this.el.classList.add(CHANGED_CLASS_NAME);
    }
    init(){
        this.el.classList.remove(CHANGED_CLASS_NAME);
    }
}

export default Header;