
//date field 
//     let d=document.getElementById("date").value;
//     let ErrDate=document.getElementById("p-date");
//     if(d==null){
//         ErrDate.innerHTML="this field must be filled out";
         
 
   

function affiche() {
    let mail = document.getElementById("mail").value;
    let phone = document.getElementById("phone-number").value;
    let date = document.getElementById("date").value;
    let msg = document.getElementById("message").value;
    let affErrEmail=document.getElementById("sp-email");
    let affErrPhone= document.getElementById("sp-phone-number");
    let affErrdate=document.getElementById("sp-date");
    let affMsg=document.getElementById("sp-message");
    let regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // let regexPhone = /^+212[0-9]{9}$/;
    // let regexPhone=/^(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}$/;
    let regexPhone=/^\+212[0-9]{9}$/;
    let Check=true;

 
 // // Email validation & check

   if(mail==""){
    affErrEmail.innerHTML = "this field must be filled out ";
    
} else  if (!regexEmail.test(mail) ) {
    affErrEmail.innerHTML = "Invalid email address  ";
    Check=false;
  }
else{
    affErrEmail.innerHTML ="";
}


// // Phone validation
 if(phone==""){
     affErrPhone.innerHTML = "this field must be filled out ";
}

else if (!regexPhone.test(phone)) {
affErrPhone.innerHTML = "Invalid phone number. It should start with '+212' and have 9 digits.";
Check=false;

}
else{
     affErrPhone.innerHTML ="";
 }

// // Date validation (you can add a regex for date if needed)
   let selectedDate =  new Date(date);
   let year = selectedDate.getFullYear();

   if(isNaN(year)){
    // console.log("test khawi"+year);
  affErrdate.innerHTML = "this field must be filled out "; 
  }
   else if (year < 2000 || year > 2024) {
   affErrdate.innerHTML = "Date should be between 2000 and 2024";
   Check=false;

  //  console.log("type date again"+ year);
    }
   else{
       affErrdate.innerHTML ="";
   }

// // Message validation
// var regexMsg = /^[a-zA-Z]+$/;
var regexMsg=/^[A-Za-z]+$/;

if(msg==""){
    affMsg.innerHTML  = "this field must be filled out ";
}
  else if (!regexMsg.test(msg)) {
  affMsg.innerHTML = "Message should only contain letters";
  Check=false;
 }
  else{
    affMsg.innerHTML = ""; 
 }

 
/////////////test display
// Initialize an array to store the form data
var formDataArray = [];

  // Create an object to store the form data
    var formData = {
      mail,
      phone,
      date,
      msg};
      if(Check){
    // to create a new array from calling a function for every array element.
        formDataArray.map(formData => formData);
        // console.log(map1);
        formDataArray.push(formData);
      
   // Display the form values in the result div
   var resultDiv = document.getElementById("display");
  formDataArray.forEach(formData => display.innerHTML += "<br>" + Object.values(formData).join(" "));
}

  
 }




