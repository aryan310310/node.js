function submitfun() {
    let fname=document.getElementById("fname").value
    localStorage.setItem("fname",fname)

    let mail=document.getElementById("mail").value
    localStorage.setItem("mail",mail)

    let num=document.getElementById("num").value
    localStorage.setItem("num",num)

  
    
    
    
}

// let div=document.getElementById("conatainer")

// div.innerHTML=`name : ${localStorage.getItem("fname")} <br>
// name : ${localStorage.getItem("mail")} <br>
// name : ${localStorage.getItem("num")} <br>
// name : ${localStorage.getItem("gender")} <br>`

let n1=document.getElementById("n1");
n1.innerText="Name : "+ localStorage.getItem("fname")

let m1=document.getElementById("m1");
m1.innerText="Number : "+localStorage.getItem("num")

let e1= document.getElementById("e1");
e1.innerText="Email : "+localStorage.getItem("mail")