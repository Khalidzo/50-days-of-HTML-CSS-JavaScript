const inputs = document.querySelectorAll('.number-container input');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length >= 1) {
      input.value = input.value.slice(0, 1);
      input.classList.add('active');
      
      if(index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } 
    else if (input.value.length === 0) {
      input.classList.remove('active');
    }

  });
});