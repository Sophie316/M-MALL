import {INIT_STATE,CHANGED_STATE} from './constants';
import DEFAULTS from './defaults';

class Scroll{
    constructor(options,scrollContainer,EventEl=scrollContainer){
        this.options = Object.assign({},DEFAULTS,options);
        //盛放滚动条的容器
        this.scrollContainer = scrollContainer;
        //监听滚动事件的容器
        this.EventEl = EventEl;

        this.setState(INIT_STATE);
        this.bindEvent();
    }
    setState(state){
        this.state = state;
    }
    bindEvent(){
        const {change,init} = this.options;
        this.EventEl.addEventListener('scroll',()=>{
            if(this.needChange()) {
                this.state = CHANGED_STATE;
                change();
            } else if (this.needInit()) {
                this.state = INIT_STATE;
                init();
            }
        },false);
    }
    needChange(){
        return this.state !== CHANGED_STATE && this.scrollContainer.scrollTop > this.options.criticalPoint;
    }
    needInit(){
        return this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.options.criticalPoint;
    }
}

export default Scroll;