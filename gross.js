let form=document.getElementById("gross")

form.addEventListener('submit',function(e){
    // prevent the page from refreshing
    e.preventDefault()

    let basic_salary=document.getElementById("basic_salary").value
    let benefits=document.getElementById("benefits").value 

    // checking form input
    if(basic_salary0==0 || benefits==0){
        document.getElementById("gross_salary").innerHTML="ensure basic salary and benefits are valid"
       
        
    }else{
        let gross_salary=Number(basic_salary)+Number(benefits)
        document.getElementById("gross_salary").innerHTML=Number(gross_salary)
       
    }

   
})