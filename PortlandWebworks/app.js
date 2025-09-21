/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var  i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }                
  }

  const button = document.body.querySelector('[data-target="#collapseExample"]');
  /*
  Add click event listener where we will provide logic that updates the button text
  */
  button.addEventListener('click', function() {
    /*
    Update the text of the button to toggle beween "More" and "Less" when clicked
    */
    if(button.innerText === 'X' + " CLOSE") {
      button.innerHTML = '&#x2630 MENU' 
    } else {
      button.innerText = 'X' + " CLOSE";
    }
  });
  
  

//Search Button
$('.search-field').click(function() {
  $(this).next('.search-form').toggle("slide:right");
});








