var input=["0001","Roman Alamsyah","Bandar Lampung","21/05/1989","Membaca"]

function dataHandling2(arr)
{
  var tgl=[3]
   arr.splice(1,2,"Roman Alamsyah Elsharawi","Provinsi Bandar Lampung")
   arr.splice(4,2,"Pria","SMA Internasional Metro")
   console.log(arr)
   tgl=arr[3].split('/')
   //switch case
   num=parseInt(tgl[1])
   
   switch(num)
   {
     case 1:num='januari'
     break
     case 2:num='februari'
     break
     case 3:num='maret'
     break
     case 4:num='april'
     break
     case 5:num='mei'
     break
     case 6:num='juni'
     break
     case 7:num='juli'
     break
     case 8:num='agustus'
     break
     case 9:num='september'
     break
     case 10:num='oktober'
     break
     case 11:num='november'
     break
     case 12:num='desember'
     break
   }
   console.log(num)
   //urutkan descending
   var art=[3]
  for(var i=0;i<tgl.length;i++)
  {
      art[i]=parseInt(tgl[i])
  }
//sorting
f=art.sort()
console.log(f)
var f=[3]
for(var i=0;i<tgl.length;i++)
{
      f[i]=art[i].toString()
      if(i==tgl.length-1)
      {
         if(art[i]<10)
         {
           f[i]="0"+f[i]
         }
      }
}

console.log(f)
//join array

var t=tgl.join('-')
console.log(t)  

//nama di splice
var nama=arr[1].slice(0,15)
console.log(nama)  
}
dataHandling2(input)


