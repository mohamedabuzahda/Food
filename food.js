
  
  function ppp() {
    document.getElementById("non").style.display = "block";
  }
   
  function bu() {
    document.getElementById("non").style.display = "none";
  }
  

  
  function ppp() {
    document.getElementById("non").style.display = "block";
  }
   
  function cu() {
    document.getElementById("non").style.display = "none";
  }
  
  function ppp() {
    document.getElementById("non").style.display = "block";
  }
   
  function du() {
    document.getElementById("non").style.display = "none";
  }
  
  function ppp() {
    document.getElementById("non").style.display = "block";
  }
   
  function eu() {
    document.getElementById("non").style.display = "none";
  }
  
    

  

    if(localStorage.getItem("themeMode") === "dark"){
    addCssDark();
    }else{
    localStorage.setItem("themeMode", "light");
    }
    function changeTheme(){
    if(localStorage.getItem("themeMode") === "light"){
    addCssDark();
    localStorage.setItem("themeMode", "dark");
    }else{
    document.getElementById("masdark").remove();
    document.getElementById("toggles").classList.remove("active");
    localStorage.setItem("themeMode", "light");
    document.getElementById("toggles").title = "Change to dark mode";
    }
    }
    function addCssDark(){
    document.head.innerHTML = document.head.innerHTML + '<style id="masdark">html, html * {color: #eeeeee !important; background-color: #292929 !important;} a {color: #8db2e5 !important;} a:visited {color: rgb(211, 138, 138) !important;} #toggles.active {background: #fff !important;}</style>';
    document.getElementById("toggles").classList.add("active");
    document.getElementById("toggles").title = "Change to light mode";
    }
    
