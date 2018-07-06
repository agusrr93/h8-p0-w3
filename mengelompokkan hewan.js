var arr=["cacing","ayam","kuda","anoa","kancil"]
var arr1=["cacing","ayam","kuda","anoa","kancil","unta","cicak"]

function groupAnimals(arr)
{
    var depan=[30]
    
    var kategori=[]
    for(var i=0;i<arr.length;i++)
    {
        kategori.push(arr[i][0])
    }

        //prioritas tampilan di array
    kategori.sort()
    //menghapus redundancy
    for(var i=0;i<arr.length;i++)
    {
        for(var j=0;j<arr.length;j++)
        {
            if(kategori[i]==kategori[j]&&i!=j)
            {
                 kategori.splice(j,1);  
            }
        }
    }

    //pendataan tiap array sejenis
    arr_hasil=[]
    for(var i=0;i<kategori.length;i++)
    {
      arr_baru=[]
        for(var j=0;j<arr.length;j++)
        {
            if(kategori[i]==arr[j][0])
            {
                 arr_baru.push(arr[j])  
            }
        }
        arr_hasil.push(arr_baru)
    }
    
console.log(arr_hasil)
  
}

groupAnimals(arr)
groupAnimals(arr1)





