//user greeting
function replaceName() {
    let nama = prompt("Halo, siapakah nama anda?","");
    document.getElementById("user-greeting").innerHTML = nama
}

replaceName()

//form validation
function formValidation (){
   let nameInput = document.getElementById('name-input').value;
   
   console.log(nameInput);

   //condition for validate form
   if(nameInput == "") {
        alert('Name must be filled out');
   } else {
        //Display result form
        document.getElementById('result-form').innerHTML = nameInput;
   }
}

document.getElementById('submit-button').addEventListener('click', formValidation);

