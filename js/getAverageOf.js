function getAverageOfOddLems(createArrayTemplate){
   var arr=createArrayTemplate.filter(function(item){
      return item%2!=0
   }
)
var average=arr.reduce(function(val,caunt){
  return val+caunt
})
return average/arr.length
}