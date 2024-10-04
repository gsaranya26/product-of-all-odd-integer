let m=parseInt(prompt("enter the number"))
let n=parseInt(prompt("enter the number"))
if(m>n){
    alert("1")
}
else{
    let product=1
    for(let i=m;i<=n;i++){
        if(i%2!=0){
            product*=i
        }
    }
    alert(product)
}