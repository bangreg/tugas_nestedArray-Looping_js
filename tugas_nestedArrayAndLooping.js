function panggilNestedArray(value){

  var copy = []
  for(var i=0;i<value.length; i++){
    for(var j=0;j<value[i].length; j++){
       //lewati undefined values untuk mencegah array kosong
       if(value[i][j]=== undefined) continue
       // buat baris baru jika belum ada
       if (copy[j] === undefined) copy[j] = []
       //tukar values di koordinat x dan y untuk var copy
       copy[j][i] = value[i][j]
    }
  }console.log(copy)
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)
