var arr1=[2,4,6]
var arr2=[1,2,3,4,5,6,7,8,9]
var arr3=[100,151,122,99,111]
var arr4=[]
function mengelompokkanAngka(arr)
{
  genap=[]
  ganjil=[]
  kelipatan3=[]
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]%2===0&&arr[i]%3!=0)
    {
        genap.push(arr[i])
    }
    if(arr[i]%2!=0&&arr[i]%3!=0)
    {
       ganjil.push(arr[i])
    }
    if(arr[i]%3===0)
    {
      kelipatan3.push(arr[i])
    }
  }
  var hasil=[genap,ganjil,kelipatan3]
  console.log(hasil)
  return hasil
 
}
mengelompokkanAngka(arr1)
mengelompokkanAngka(arr2)
mengelompokkanAngka(arr3)
mengelompokkanAngka(arr4)



