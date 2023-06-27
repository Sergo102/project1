// Theme-toggle
window.addEventListener('DOMContentLoaded', (event) => {
  const themeToggleVar = document.querySelector('.theme-toggle');
  let body = document.querySelector('body');
  // Announcing variables

  themeCheckFunc();
  // Calling function to change theme in case, it was changed before
  
  themeToggleVar.addEventListener('click', themeToggleFunc);
  // Adding 'click' event and function to toggle
  
  function themeCheckFunc(){
    if(body.className == 'dark' && localStorage.getItem('dark-mode') === 'enabled'){
      body.className = 'dark';
      localStorage.setItem("dark-mode", "enabled");
    }else{      
      body.className = 'light';
      localStorage.setItem("dark-mode", "disabled");  
    }
  }
  
  function themeToggleFunc(){
    if(body.className == 'dark' && localStorage.getItem('dark-mode') === 'enabled'){
      body.className = 'light';
      localStorage.setItem("dark-mode", "disabled");  
    }else{
      body.className = 'dark';
      localStorage.setItem("dark-mode", "enabled");
    }
  }
  
});

// Menu-toggle
window.addEventListener('DOMContentLoaded', (event) => {
  let menuToggle = document.querySelector('#menu-toggle');
  let section = document.querySelector('#about1st');
  let body = document.querySelector('body');
  // Creating a variable for toggle and for the section

  menuToggle.addEventListener('click', menuToggleClick);
  // Adding a 'click' event for toggle

  function menuToggleClick(){
    if(menuToggle.className == 'unactive' && 
    section.classList.contains('unactive')){
      menuToggle.className = 'active';

      section.classList.add('active');
      section.classList.remove('unactive');

      body.classList.add('no-scroll');
    }else{
      menuToggle.className = 'unactive';

      section.classList.remove('active');
      section.classList.add('unactive');

      body.classList.remove('no-scroll');
    };
  }
})