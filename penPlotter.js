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


const tile1 = (x,y) => {
    let drawing = '';
    drawing += lib.bezier([0+x,50+y],  [40+x, 30+y],[50+x, 70+y],[70+x, 30+y], '#000000');
    drawing += lib.bezier([70+x,30+y], [70+x, 50+y],[100+x,50+y],[100+x,50+y], '#000000');
    drawing += lib.bezier([50+x,0 +y], [20+x, 40+y],[30+x, 80+y],[60+x, 60+y], '#000000');
    drawing += lib.bezier([60+x,60+y], [40+x, 70+y],[40+x, 90+y],[50+x,100+y], '#000000');
    return drawing;
};

const tile2 = (x,y) => {
    let drawing = '';
    drawing += lib.bezier([0+x, 50+y], [70+x,70+y],[50+x,-10+y],[40+x,20+y], '#000000');
    drawing += lib.bezier([40+x,20+y], [40+x,20+y],[30+x,60+y],[60+x,40+y], '#000000');
    drawing += lib.bezier([60+x,40+y], [40+x,60+y],[40+x,90+y],[50+x,100+y], '#000000');
    
    return drawing;
};



const penPlotter = () =>{    
    let svgStr = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 500 250" style="background-color: #efeeec;">';
    let drawing = '';
    
    
    
    // svgStr += lib.translate(40,140, lib.rotate(0,20,20,lib.bezier([0,0], [40,-80], [60, -40],[-20, -40], '#000000')));
    drawing += tile2(40,40);
    drawing += lib.translate(40,40, lib.square(0,0,100,'#000000', 'none'));
    // drawing = lib.translate(40,40, drawing);





    svgStr += drawing + '</svg>';
    return svgStr;

}

window.onload = () =>{
    const customSvg = penPlotter();
    console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}