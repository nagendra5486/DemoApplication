function login_user(){
    debugger;

    const username=document.getElementById('username').value;
    console.log(username);
    const password =document.getElementById('password').value;
    console.log(password)

    const userDetails={
        "username":username,
        "password":password,
    }
    console.log(userDetails);

    localStorage.setItem('userlogin',JSON.stringify(userDetails))

    console.log(username === "apj" && password === "123")
if(username === "apj" && password === "123"){

console.log("login page")
}
else{
    console.log("not sucessfull")
}
}

function cancel(){

    alert("cancel")
}


function singup(){
    alert("you singingup")
}