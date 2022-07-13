import './header.css';
import 'icons/iconfont.css';
import Header from 'components/header';

const scrollContainer = document.getElementById('details-content');
const scroll = document.getElementById('details-page');
const headerEl = scroll.querySelector('.header');

new Header(headerEl,0,scrollContainer);