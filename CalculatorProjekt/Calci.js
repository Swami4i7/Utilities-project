const operators=['+','-','*','/'];

m=toString(document.getElementById('num1').innerHTML);
let i;

for(i<0;i<tval.length)
let tval;
let c=0
// while(c<3)
// {
// if(m!=operators)
 {
    function getval(m)
    {
        tval += m;
    }
// }
// else{
//     op=m;
// }
// }

let result;

switch (tval) 
{
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        result = 'Invalid operator';
}
   document.getElementById('result').innerHTML = result;
}
