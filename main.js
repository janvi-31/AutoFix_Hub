//MENU-BUTTON
function showSidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='flex';
    setTimeout(() => {
        sidebar.style.transform = 'translateX(0)'; // Slide in smoothly
    }, 10);
}
function hideSidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(100%)'; // Slide out smoothly
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 300);
}    

//SCROLLING

document.querySelectorAll('.nav__links a, .sidebar a').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            hideSidebar();
        }
    });
});

//BACK-TO-TOP ARROW

let calcScrollValue=()=>{
    let scrollProgress=document.getElementById("progress");
    let progressValue=document.getElementById("progress-value");
    let pos=document.documentElement.scrollTop;
    let calcHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrollValue=Math.round((pos*100)/calcHeight);
    if(pos>100){
        scrollProgress.style.display="grid";
    }
    else{
        scrollProgress.style.display="none";
    }
    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop=0;
    });
    scrollProgress.style.background=`conic-gradient( #c22525 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll=calcScrollValue;
window.onload=calcScrollValue;
