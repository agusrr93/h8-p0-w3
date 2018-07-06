var input="hello world!"
var c=input.length-1
var h=''
for(var i=0;i<input.length;i++)
{
    h=h+input[c]
    c=c-1
}

console.log(h)