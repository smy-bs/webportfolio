'user strict';

const onButton = document.querySelector('.mywork__list');
const projects = document.querySelectorAll('.mywork__project');
onButton.addEventListener('click',(event)=>{
    const filter = event.target.dataset.category;
   if(filter ==null){
    return;
   }
   projects.forEach((project)=>{
   if(filter === 'all' || filter === project.dataset.type){
    project.style.display = 'block';
   }else{
    project.style.display = 'none';
   }
   });
});