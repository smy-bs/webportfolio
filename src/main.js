'user strict';

//헤더의 높이를 가져오기ㅡ 
//window.addEventListener('scroll', function(){
  //  console.log(window.scrollY)});
//round off number 718.5000610351562 / 143.70001220703125
//스크롤되면 헤더바의 색깔이 어두워지게하기
// when scroll in this position change color for header

//header 스크롤시 다크 스타일링적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY>headerHeight) {
        header.classList.add('header--dark');
            }
            else{
                header.classList.remove('header--dark');
            }
});

//home transparent

const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener("scroll",() => {
   home.style.opacity = 1 - window.scrollY / homeHeight;
         });


//arrowup 

const arrowup = document.querySelector('.arrowup');
document.addEventListener("scroll", () => {
    // const scrollPosition = window.scrollY || this.window.pageYOffset;
    // const showPosition = 718;
    // if(scrollPosition > showPosition){
    //     arrowup.style.display = "block";
    // }else{
    //     arrowup.style.display = "none";
    // }
if(window.scrollY>homeHeight / 2){
    arrowup.style.display = "block";
}else{
    arrowup.style.display = "none";
}
});

// navbar menu
const navToggle = document.querySelector('.menu__toggle');
const headerNav = document.querySelector('.header__nav');

navToggle.addEventListener('click', () => {

    // if(headerNav.style.display ==="block"){
    //     headerNav.style.diplay="none";
    // }else{
    //     headerNav.style.display="block";
    // }
    headerNav.classList.toggle('open');
    //headerNav.classList.remove('open');

});

headerNav.addEventListener('click', () => {
    headerNav.classList.remove('open');
});

