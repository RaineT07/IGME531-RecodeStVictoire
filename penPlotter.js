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
    drawing+= lib.square(0+x,0+y,100,'#000000','none');

    //line 1
    drawing += lib.bezier([0+x,50+y],  [40+x, 30+y],[50+x, 70+y],[70+x, 30+y], '#000000');
    drawing += lib.bezier([70+x,30+y], [70+x, 50+y],[100+x,50+y],[100+x,50+y], '#000000');
    //line 2
    drawing += lib.bezier([50+x,0 +y], [20+x, 40+y],[30+x, 80+y],[60+x, 60+y], '#000000');
    drawing += lib.bezier([60+x,60+y], [40+x, 70+y],[40+x, 90+y],[50+x,100+y], '#000000');
    return drawing;
};

const tile2 = (x,y) => {
    let drawing = '';
    drawing+= lib.square(0+x,0+y,100,'#000000','none');

    //line 1
    drawing += lib.bezier([0+x, 50+y], [55+x,70+y],[35+x,-10+y],[25+x,20+y], '#000000');
    drawing += lib.bezier([25+x,20+y], [25+x,20+y],[15+x,60+y],[45+x,40+y], '#000000');
    drawing += lib.bezier([45+x,40+y], [30+x,60+y],[45+x,95+y],[50+x,100+y], '#000000');
    //line 2
    drawing += lib.bezier([50+x,0+y],[60+x,50+y],[40+x,30+y],[50+x,10+y], '#000000');
    drawing += lib.bezier([50+x,10+y],[60+x,0+y],[70+x,20+y],[50+x,50+y], '#000000');
    drawing += lib.bezier([50+x,50+y],[80+x,30+y],[90+x,40+y],[100+x,50+y], '#000000');   
    
    return drawing;
};

const tile3 = (x,y) => {

    let drawing = '';
    drawing+= lib.square(0+x,0+y,100,'#000000','none');

    //line 1
    drawing += lib.bezier([0+x,50+y], [40+x,40+y],[50+x,40+y],[75+x,75+y], '#000000');
    drawing += lib.bezier([75+x,75+y], [70+x,70+y],[40+x,40+y],[50+x,0+y], '#000000');
    //line 2
    drawing += lib.bezier([50+x,100+y], [60+x,80+y],[50+x,70+y],[40+x,90+y], '#000000');
    drawing += lib.bezier([40+x,90+y], [50+x,70+y],[70+x,40+y],[100+x,50+y], '#000000');

    return drawing;
};

const tile4 = (x,y) => {
    let drawing = '';
    drawing+= lib.square(0+x,0+y,100,'#000000','none');
    //line 1
    drawing += lib.bezier([0+x,50+y], [20+x,40+y],[30+x,20+y],[30+x,10+y], '#000000');
    drawing += lib.bezier([30+x,10+y], [30+x,20+y],[40+x,30+y],[50+x,20+y], '#000000');
    //line 2
    drawing += lib.bezier([50+x,100+y], [60+x,80+y],[50+x,70+y],[40+x,90+y], '#000000');
    drawing += lib.bezier([40+x,90+y], [50+x,70+y],[70+x,40+y],[100+x,50+y], '#000000');

    return drawing;
};


const penPlotter = () =>{    
    let svgStr = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1000 500" style="background-color: #efeeec;">';
    let drawing = '';
    drawing += lib.square(100,100,200,'#000000','none', 1.5);
    
    
    for(let x=0; x<=2; x++){
        for(let y=0;y<=2;y++) {
            //pick between 1-3 randomly
            let tile = '';
            let randTile = Math.floor(Math.random() * (3 - (1) + 1) + (1));
            let chosenTile = '';
            switch(randTile){
                case 1:
                    chosenTile = tile1(x*100,y*100);
                    break;
                case 2:
                    chosenTile = tile2(x*100,y*100);
                    break;
                case 3:
                    chosenTile = tile3(x*100,y*100);
                    break;
                default:
                    chosenTile = tile1(x*100,y*100);
            }
            let randRotate = Math.floor(Math.random()* ( 3 - (0) + 1) + (0));
            drawing += chosenTile;
            console.log(`x: ${x*50} y: ${y*50} tile: ${randTile} rotate: ${90*randRotate}`)
        }
    }
    svgStr += lib.translate(100,105,drawing) + '</svg>';
    return svgStr;

}

window.onload = () =>{
    const customSvg = penPlotter();
    // console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}