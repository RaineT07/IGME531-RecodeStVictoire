
import * as lib from './recode_library.js';

const genSvg = () =>{
    let svgStr = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" style="background-color: #efeeec;">';
    let drawing = '';
    for(let x=1; x<=2; x++){
        for(let y=1;y<=2;y++){
            let squareSet = '';
            for(let z=1;z<=3;z++){
                squareSet += lib.translate(x*10*-z/2,y*10*-z/2, lib.scale(z/3,z/3,lib.square(x*10,y*10,10,'#141414', 'none')));
            }
            drawing+=lib.translate(x*10,y*10,squareSet);
        }
    }
    svgStr+= lib.translate(20,20, drawing);
    svgStr += '</svg>';
    return svgStr;
}

window.onload = () =>{
    const customSvg = genSvg();
    console.log(customSvg);
    document.querySelector('svg').outerHTML = customSvg;
}