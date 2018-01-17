
onload = (() => { 
  const header = document.querySelector('.header-middle')
  const content = document.querySelector('#block-nw-nw-header')
  const menuSpan = document.querySelector('span');
  let menuOpen;
  let topOfHeader = header.offsetHeight;
  
   fixHeader = () => {
    if(window.scrollY >= topOfHeader ) {
        content.style.paddingTop = header.offsetHeight + 'px';
        document.body.classList.add('fixedHeader')
        content.classList.add('fixed')
        content.style.paddingTop = 0;
    } else{

      document.body.classList.remove('fixedHeader') 
      content.classList.remove('fixed')   
      content.style.paddingTop = 0;
      
    }
  }
  toggleMenu = () => {
    if(!menuOpen){
      document.body.classList.add('expand-menu')
      menuOpen = true 
    }else{
      document.body.classList.remove('expand-menu')
      menuOpen = false
    }    
  }
  menuSpan.addEventListener('click',toggleMenu);
  window.addEventListener('scroll', fixHeader);
})() 