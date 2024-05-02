let form=document.getElementById("myform")

form.addEventListener('submit',function(e){
    // prevent the page from refreshing
    e.preventDefault()

    let first_name=document.getElementById("first_name").value 
    let second_name=document.getElementById("second_name").value 

    let full_name=first_name+" "+second_name
    document.getElementById("full_name").innerHTML=full_name
})