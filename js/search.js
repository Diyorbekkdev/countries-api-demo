let searchIcon = document.querySelector('.search-icon');
let micButton = document.querySelector('.micButton');
let inputContainer = document.querySelector('.InputContainer');
let searchWrapper = document.querySelector('.search');

    // inputContainer.addEventListener('click', function(){
    //     inputContainer.classList.add('expand');
    // })

    let timeoutId; // Variable to store the timeout ID

    inputContainer.addEventListener('click', function() {
      inputContainer.classList.add('expand');
      
      clearTimeout(timeoutId); // Clear any existing timeout
      
      // Function to remove 'expand' class after 3 seconds of inactivity
      function removeExpandClass() {
        inputContainer.classList.remove('expand');
      }
      
      timeoutId = setTimeout(removeExpandClass, 3000); // Set timeout for 3 seconds
      
      // Clear the timeout if the user types within the input
      inputContainer.addEventListener('click', function() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(removeExpandClass, 3000);
      });
    });
    
    // Event listener to remove 'expand' class when user clicks outside the input
    document.addEventListener('click', function(event) {
      const isInputClicked = inputContainer.contains(event.target);
      
      if (!isInputClicked) {
        inputContainer.classList.remove('expand');
      }
    });
    
