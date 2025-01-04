import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


document.body.style.overflowY = "scroll"; /* Enable scrolling */
document.body.style.scrollbarWidth = "none"; /* Hide scrollbar in supported browsers */
