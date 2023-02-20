const form = document.querySelector("form");

const validateNumber = (numA, numB) => numA < numB;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const numA = document.querySelector("#number_A");
  const numB = document.querySelector("#number_B");

  if(validateNumber(numA.value, numB.value)) {
    document.querySelector(".success_message").style.display = 'block';
    document.querySelector(".error_message").style.display = 'none';

    numA.value = '';
    numB.value = '';
  } else {
    document.querySelector(".error_message").style.display = 'block';
    document.querySelector(".success_message").style.display = 'none';

    numA.value = '';
    numB.value = '';

  }
  
});