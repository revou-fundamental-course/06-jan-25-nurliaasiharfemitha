//user greeting
function replaceName() {
    let nama = prompt("Halo, siapakah nama anda?","");
    document.getElementById("user-greeting").innerHTML = nama
}

replaceName()

function formValidation (){
   let nameInput = document.getElementById('nameinput');
   console.log(nameInput);
}

document.getElementById('submit-button').addEventListener('click', formValidation);

