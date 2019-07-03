(function(){
//select options

const services=[
{
value:1,
title:'great - 20%'
},
{
    value:2,
    title:'ok - 10%'
},
{
        value:3,
        title:'bad - 2%'
}
]
//add select options for the select element

services.forEach(function(service){
const option=document.createElement("option");  //created a element
option.textContent=service.title;  //whatever the value we want to print 
option.value=service.value; //stores the value of services

document.getElementById("input-service").appendChild(option);
});

//input all the values

const form=document.getElementById("tip-form");
const amount=document.getElementById("input-bill");
const users=document.getElementById("input-users");
const service=document.getElementById("input-service");
 
//customers feedback

const feedback=document.querySelector(".feedback");//gets the input of the feedback class
const loader=document.querySelector(".loader");//for the loading image
const results=document.querySelector(".results");

//submit form
form.addEventListener("submit",function(event){
    event.preventDefault();  //it just prevents the null value
let bill=amount.value;
let people=users.value;
let quality=service.value;

if(bill==='' || bill<='0' || (people==='' || people<='0')||quality==='0'){
    feedback.classList.add('showItem','alert-danger');  
    feedback.innerHTML= '<p>please check the values</p>'+
    '<p>bill cannot be less than zero</p>'+
    '<p>people sharing the bill cannot be less than zero</p>'+
    '<p>service has to be selected</p>';
    //
    setTimeout(function() {
        feedback.classList.remove("showItem","alert-danger");
    },10000);
}
else{
    feedback.classList.add('showItem','alert-success');
    feedback.innerHTML='<p>calculating.....';
    loader.classList.add('showItem');
    setTimeout(function(){
        loader.classList.remove("showItem");
        feedback.classList.remove("showItem","alert-success");

        showresults(bill,people,quality);
        clearForm();
    },4000);
}

//calculating and showing results
function showresults(bill,people,quality){
    let percent=0;
    if(quality==='1'){
        percent=0.2;
    }
    else if(quality==='2'){
        percent=0.1;
    }
    else if(quality==='3'){
        percent=0.02;
    }
    let tipAmount=parseInt(bill)*percent;
    let total=parseInt(bill)+tipAmount;
    let person=total/parseInt(people);

    results.classList.add("showItem");
    document.getElementById("tip-amount").textContent=tipAmount;
    document.getElementById("total-amount").textContent=total;
    document.getElementById("person-amount").textContent=person.toFixed(2);

}

//for clearing the form
function clearForm(){
amount.value="";
users.value="";
service.value="";
}

});
})();