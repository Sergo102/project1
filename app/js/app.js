// Theme-toggle
window.addEventListener('DOMContentLoaded', (event) => {
  const themeToggleVar = document.querySelector('.theme-toggle');
  let body = document.querySelector('body');
  let logo = document.querySelector('.logo');
  // Announcing variables

  themeCheckFunc();
  // Calling function to change theme in case, it was changed before
  
  themeToggleVar.addEventListener('click', themeToggleFunc);
  // Adding 'click' event and function to toggle
  
  function themeCheckFunc(){
    if(body.className == 'dark' && localStorage.getItem('dark-mode') === 'enabled'){
      body.className = 'dark';
      logo.src = 'img/main-page/Dark-logo.png';
      localStorage.setItem("dark-mode", "enabled");
    }else{      
      body.className = 'light';
      logo.src = 'img/main-page/Light-logo.png';
      localStorage.setItem("dark-mode", "disabled");  
    }
  }
  
  function themeToggleFunc(){
    if(body.className == 'dark' && localStorage.getItem('dark-mode') === 'enabled'){
      body.className = 'light';
      logo.src = 'img/main-page/Light-logo.png';
      localStorage.setItem("dark-mode", "disabled");  
    }else{
      body.className = 'dark';
      logo.src = 'img/main-page/Dark-logo.png';
      localStorage.setItem("dark-mode", "enabled");
    }
  }
  
});

// Menu-toggle
window.addEventListener('DOMContentLoaded', (event) => {
  let menuToggle = document.querySelector('#menu-toggle');
  let section = document.querySelector('.about');
  // Creating a variable for toggle and for the section

  menuToggle.addEventListener('click', menuToggleClick);
  // Adding a 'click' event for toggle

  function menuToggleClick(){
    if(menuToggle.className == 'unactive' && 
    section.classList.contains('unactive')){
      menuToggle.className = 'active';
      section.classList.add('active');
      section.classList.remove('unactive');
    }else{
      menuToggle.className = 'unactive';
      section.classList.remove('active');
      section.classList.add('unactive');
    };
  }
})