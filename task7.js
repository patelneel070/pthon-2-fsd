
// function fun(person){
    
//     return person.sort((a,b)=>b.age-a.age)[0]
// }
// console.log(fun(person))
// setTimeout(()=>{
//     console.log("this will display after 5 seconds")
// },5000)
// console.log('hi')
// setInterval(()=>{
//     console.log("this will display after 5 seconds")
// },1000)

// function ut(){
//     const times=new Date().toLocaleTimeString()
//     console.log(times)
// }
// ut()
// setInterval(ut,1000)
function main(cb){
    console.log('operatoin1')
    setTimeout(()=>{
        cb('operation end')
    },2000)
    console.log('operation2')

}
function fun(result){
    console.log('final result',result)
}
main(fun)
