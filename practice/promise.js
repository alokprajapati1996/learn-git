let promise=new Promise(function(resolve,reject){
let x=10
if(x==9){
    resolve("ok")
}else
{
    reject("error")
}
})
// promise.then((res)=> console.log(res))
// .catch((err)=>console.log(err));
promise.then(function(resolve){
    
})

