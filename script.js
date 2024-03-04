


const formData=document.getElementById("form-data");
formData.addEventListener("submit",function(e){
    e.preventDefault();
    let p=document.getElementById("pamount").value;
    let r=document.getElementById("interest").value;
    let n=document.getElementById("numyr").value;
    let si=(p*r*n)/100;
    document.write("Simple interest is "+si);
})