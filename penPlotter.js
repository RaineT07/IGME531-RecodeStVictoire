/*

pen plotter tiles thoughts

physical world
fountain pen
bring my own ink?
I have my own pen but it seems like travis knows whats good

digital world
looping, very connected, curves???



*/

import * as lib from './recode_library.js';

const penPlotter = () =>{    
    let svgStr = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 500 250" style="background-color: #efeeec;">';
    let drawing = '';
    
    
    
    svgStr += lib.translate(40,140, lib.rotate(0,20,20,lib.bezier([0,0], [40,-80], [60, -40],[-20, -40], '#000000')));
    svgStr += lib.square(40,40,100,'#000000', 'none');




    svgStr += '</svg>';
    return svgStr;

}

window.onload = () =>{
    const customSvg = penPlotter();
    console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}