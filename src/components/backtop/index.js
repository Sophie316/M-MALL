import './backtop.css';
import 'icons/iconfont.css';

import Scroll from 'utils/scroll';

const CHANGED_CLASS_NAME = 'backtop-hidden';

class Backtop{
    constructor(el,criticalPoint,scrollContainer,EventEl=scrollContainer){
        this.el = el;
        this.criticalPoint = criticalPoint;
  
        //盛放滚动条的容器
        this.scrollContainer = scrollContainer;
        //监听滚动事件的容器
        this.EventEl = EventEl;

        new Scroll({
            criticalPoint,
            change:()=>{
                this.show();
            },
            init:()=>{
                this.hide();
            }
        },scrollContainer,
        EventEl);
        this.bindEvent();
    }
    bindEvent(){
        this.el.addEventListener('click',()=>{
            this.scrollTo();
        },false);
    }
    scrollTo(top = 0,left = 0) {
        this.scrollContainer.scrollTo({
            top,
            left,
            behavior:'smooth'
        })
    }
    //显示
    show(){
        this.el.classList.remove(CHANGED_CLASS_NAME);
    }
    //隐藏
    hide(){
        this.el.classList.add(CHANGED_CLASS_NAME);
    }
}

export default Backtop;