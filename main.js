/*----------- NavBar Active Links -------------*/

const navLink = document.querySelectorAll(".nav_link")
 
 function linkAction(){
 				
 			navLink.forEach(n => n.classList.remove('active'))
 			this.classList.add('active')			   		 		
 }
   navLink.forEach(n => n.addEventListener('click', linkAction))
  
/*----------- NavBar Onclick Logo -------------*/
const homeActive = document.querySelector("#home_link");
const logo = document.querySelector(".logo");

logo.onclick = ()=>{
		   menu.classList.remove("active");
		   menuBtn.classList.remove("change");
		   window.location.href='#home';		   
}


/*----------- NavBar Active Link Scroll -------------*/

const sec = document.querySelectorAll("section")

function activeMenu(){
		let len = sec.length;
		while(--len && window.scrollY + 250 < sec[len].offsetTop){}
			navLink.forEach(ltx => ltx.classList.remove("active"));
			navLink[len].classList.add("active");
				 
}

activeMenu();
window.addEventListener("scroll", activeMenu);


/*----------- NavBar Active Link Onclick -------------*/

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
 

tabs.forEach(tab =>{
      tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

     tabContents.forEach(tabContent =>{
        tabContent.classList.remove('education_active')
        
 				
     })
      target.classList.add('education_active')
    
     tabs.forEach(tab =>{
        tab.classList.remove('education_active')
     
     })
      tab.classList.add('education_active') 
  })   
})



/* ------------ NavBar Responsive Toggle Button ------------ */  
const menu = document.querySelector(".nav_list");
const menuBtn = document.querySelector(".nav_icon");

	
 menuBtn.onclick = ()=>{
			if(menuBtn.className === "nav_icon"){				
				    menuBtn.classList.toggle("change");
				    menu.classList.add("active");	
			}	
			else{
			  	  menuBtn.classList.toggle("change");
				    menu.classList.remove("active");	
			}	
 }
				
		menu.onclick = ()=>{
		   menu.classList.remove("active");
		   menuBtn.classList.remove("change");
		}
	

/* ----------------- Scroll Page Transition ------------------- */	const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  })
	
sr.reveal('.reveal_title',{})
sr.reveal('.button',{delay: 100})
sr.reveal('.pic',{delay: 300})


sr.reveal('.image',{})
sr.reveal('.school_content',{delay: 100})
sr.reveal('.course_work',{delay: 300})


sr.reveal('.education_tabs',{})
sr.reveal('.about_title',{delay: 100})
sr.reveal('.about_text',{delay: 300})


sr.reveal('.technicalskl_content',{})
sr.reveal('.softskl_content',{})
sr.reveal('.my_skills',{interval: 200})

sr.reveal('.contact_box',{interval: 200})