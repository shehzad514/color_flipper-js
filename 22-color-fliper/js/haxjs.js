const hax =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//this is fo hex color which are from 0 to 9 and from A to F : f12e33
const btn = document.querySelector("#btn");
const color =document.querySelector(".color");
btn.addEventListener('click', function()
{
    let haxColor= '#';
    for(let i=0; i<6;i++)
    {
        haxColor += hax[getNumber()];
        //1st step maijab i ki value 0  haxcolor = # so function call ho jai ga waha sy ik value ayi 
        // ge wo # k sath add ho ge 
        //esi tarh for loop chaly ga tu 6 values ay gy r wo # k sath add hoty jai gy jab loop hatnm ho jai tu hamry sath ik 
        //rendom hax code genrate ho jai ga phr osi hesab sy color change ho jai ga r values b 
          
    }
color.textContent=haxColor;
document.body.style.backgroundColor=haxColor
});

function getNumber()
{
    return Math.floor(Math.random()* hax.length);
}