function clearInput() {
    let reset = confirm("Are you sure to reset the inputs?");
    if(reset=true){
    document.getElementById("name").value='';
    document.getElementById("surname").value='';
    document.getElementById("city").value='';
    }}