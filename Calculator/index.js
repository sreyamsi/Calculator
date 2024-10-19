let string="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string=eval(string);
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML == "AC"){
            string="";
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})
function sin()
{
    string=Math.sin(string);
}
function cos()
{
    string=Math.cos(string);
}
function tan()
{
    string=Math.tan(string);
}
function pow()
{
    string=Math.pow(string,2);
}
function sqrt()
{
    string=Math.sqrt(string);
}
function log()
{
    string=Math.log(string);
}
function pi()
{
    string=3.14159265359;
}
function e()
{
    string=2.71828182846;
}
// function fact(){
//     let i,x,f;
//     f=1;
//     num=string;
//     for(i=1;i<=x;i++)
//     {
//         f=f*i;
//     }
//     string=f;
// }
function pow3(){
    string=Math.pow(string,3);
}
function backspc()
{
    string=string.substr(0,string.length-1);
}
