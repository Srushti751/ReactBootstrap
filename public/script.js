//validation of contact form

let nameNode =document.getElementById("name");
let numNode =document.getElementById("mobile");
let errNode1 = document.getElementById("err1");
let errNode2 = document.getElementById("err2");



function validate1(){
    errNode1.innerHTML="";
    nameNode.style.border="";
    nameNode.style.background='';


    let name= nameNode.value;
    let regname = /^[a-zA-Z ]{2,100}$/; 

    if(name===""){
        errNode1.innerHTML= "<span class='error'> Please fill this field </span>";
        nameNode.style.border= "2px red solid ";
        nameNode.style.background='pink';
        return false;
    }
    else if(!(regname.test(name)))
    {
        errNode1.innerHTML= "<span class='error'> Only alphabets allowed </span>";
        nameNode.style.border= "2px red solid ";
        nameNode.style.background='pink';
        return false;
    }
    else{
        return true;
    }
}

function validate2(){
    errNode2.innerHTML="";
    numNode.style.border="";
    numNode.style.background="";


    let num= numNode.value;
let regmob = /^[6-9][0-9]{9}$/; 

    if(num===""){
        errNode2.innerHTML= "<span class='error'> Please fill this field </span>";
        numNode.style.border= "2px red solid ";
        numNode.style.background='pink';
        return false;
    }
    else if(!(regmob.test(num))){
        errNode2.innerHTML= "<span class='error'> Only 10 numbers allowed </span>";
        nameNode.style.border= "2px red solid ";
        nameNode.style.background='pink';
        return false;
    }
    else{
        return true;
    }
}

let mailNode = document.getElementById("mail");
let errNode3 = document.getElementById("err3");

function validate3(){
    errNode3.innerHTML="";
    mailNode.style.border="";
    mailNode.style.background="";
    

    let mail= mailNode.value;
    let ss= mail.substring(mail.indexOf('@')+1);
let regemail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    
    if(mail===""){
        errNode3.innerHTML= "<span class='error'> Please fill this field </span>";
        mailNode.style.border= "2px red solid ";
        mailNode.style.background='pink';
        return false;
    }
    else if(!(regemail.test(mail))){
        errNode3.innerHTML= "<span class='error'> Enter valid email </span>";
        nameNode.style.border= "2px red solid ";
        nameNode.style.background='pink';
        return false;
    }
    else if(!mail.includes("@") || ss===''){
        errNode3.innerHTML= "<span class='error'> Please enter valid email </span>";
        mailNode.style.border= "2px red solid ";
        mailNode.style.background='pink';
        return false;
    }
    else{
        return true;
    }
}

let msgNode = document.getElementById("msg");
let errNode4 = document.getElementById("err4");
function validate4(){
    errNode4.innerHTML="";
    msgNode.style.border="";
    msgNode.style.background="";
    

    let msg= msgNode.value;
    
    if(msg===""){
        errNode4.innerHTML= "<span class='error'> Please fill this field </span>";
        msgNode.style.border= "2px red solid ";
        msgNode.style.background='pink';
        return false;
    }
    else{
        return true;
    }
}

let errorText = document.querySelector(".al-txt");
function validateForm(){
    let st1= validate1();
    let st2= validate2();
    let st3= validate3();
    let st4= validate4();
   
    
    if(st1&&st2&&st3&&st4)
    {
        // Alert box
        errorText.style.display = "block";
        nameNode.value = null;
        mailNode.value = null;
        numNode.value = null;
        msgNode.value = null;
        // alert("Thank you!!! we will reach back soon.");
    }
    return(st1 && st2 && st3 && st4);    
 }
 


 