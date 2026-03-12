var arr=['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
var obj={}
function fun(arr){
         obj[arr[0]]=arr[arr.length-1]
    
}
fun(arr)
console.log(obj)
