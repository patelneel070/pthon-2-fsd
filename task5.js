var arr=[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

var obj={}
function fun(arr){
    for(let i of arr){
        obj[i[0]]=i[1]
    }
}
fun(arr)
console.log(obj)
