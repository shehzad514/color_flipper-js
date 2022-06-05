const colors=["green","red", "rgba(133,122,200","#f15025"];
const btn= document.querySelector("#btn");
const color =document.querySelector(".color");

btn.addEventListener("click", function()
{
    //here i take a const of randomnumber
    //by this we can select the index like color[1] etc
    //so as we know we have 4 number from 0 t0 3 so we make a function and call here 
    //to return these number 
    const randomnumber= getNumber();

    //now by js we change the bk clr whenever we click the btn 
    document.body.style.backgroundColor=colors[randomnumber];
    color.textContent =colors[randomnumber];
    //by this the text of color is also change 

});

//make a function getnumber
 function getNumber()
 {
     //in this we add 2 math function 
     //1 math random : by this it genrate 0 t0 1 numbers but not 1 
     //like return Math.random();
     //now if we see we get from 0 to 0.99999 not 1 2 or 3 
     //for this we * the length of colors 
     //like return Math.random()*colors.length;
     //by this we get numbr in points not exact number for this we use one another function
     //2 Math.floor : it will round the number and give exact number 
     return Math.floor(Math.random()*colors.length);
 }
