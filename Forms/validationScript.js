    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
      let inputString = document.getElementById("inputField")

      // Regular expression pattern for alphanumeric input

      let regex = /^[a-zA-Z0-9]+$/

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form
        document.getElementById("myForm").addEventListener('submit', function(event){
          if(regex.test(inputString.value)){
            alert("Form submitted!")
          }
        // Invalid input: display error message
          else{
            alert("Invalid input")
            event.preventDefault()
          }
        })
