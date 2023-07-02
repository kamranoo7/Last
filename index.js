let app=JSON.parse(localStorage.getItem("job"))||[]
document.querySelector("form").addEventListener("submit",Job)
async function Job(event){
    event.preventDefault();

let comapny =  document.getElementById("company").value
let city=document.getElementById("city").value
let location=document.getElementById('location').value
let Role=document.getElementById("Role").value
let level=document.getElementById("level").value
let Language=document.getElementById("Language").value
let Contract=document.getElementById("Contract").value
let date=document.getElementById("date").value
let Data={
comapny,
city,
location,
Role,
level,
Language,Contract,
date, 
}

app.push(Data)
localStorage.setItem("job",JSON.stringify(app))
let res=await fetch("http://localhost:3000/pitches",{
method:"POST",
body:JSON.stringify(Data),
headers:{
    "Content-Type":"application/json"
},
})
let data=await res.json()
console.log(data)
}