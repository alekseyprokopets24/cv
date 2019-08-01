const aboutMe = document.querySelector('.about-me');
const skills = document.querySelector('.skills');
const myProjects = document.querySelector('.my-projects');
const containerSections = document.querySelector('.container-sections');
const main = document.querySelector('.main');
const header = document.querySelector('.header');



const aboutMeBtn = document.querySelector('#aboutMeBtn');
const skillsBtn = document.querySelector('#skillsBtn');
const projectsBtn = document.querySelector('#projectsBtn');


aboutMeBtn.addEventListener('click', showAboutMePage);
skillsBtn.addEventListener('click', showSkillsPage);
projectsBtn.addEventListener('click', showMyProjectsPage);




function showAboutMePage() {
    aboutMe.classList.remove('page-disactive');
    skills.classList.add('page-disactive');
    myProjects.classList.add('page-disactive');

    aboutMeBtn.classList.add('button-hover');
    skillsBtn.classList.remove('button-hover');
    projectsBtn.classList.remove('button-hover');

    scroll();
}

function showSkillsPage() {
    aboutMe.classList.add('page-disactive');
    skills.classList.remove('page-disactive');
    myProjects.classList.add('page-disactive');

    window.scrollTo(0, document.body.scrollHeight);

    aboutMeBtn.classList.remove('button-hover');
    skillsBtn.classList.add('button-hover');
    projectsBtn.classList.remove('button-hover');

    scroll();
}

function showMyProjectsPage() {
    aboutMe.classList.add('page-disactive');
    skills.classList.add('page-disactive');
    myProjects.classList.remove('page-disactive');

    aboutMeBtn.classList.remove('button-hover');
    skillsBtn.classList.remove('button-hover');
    projectsBtn.classList.add('button-hover');

    scroll();
}

function scroll() {
    main.style.height = '100vh';
    containerSections.style.height = '80%';
    setTimeout(() => {
        window.scrollTo(100, document.body.scrollHeight);
    }, 200);
}

window.onload =  setTimeout(() => {

    header.classList.add('w3-center', 'w3-animate-top');
    main.classList.add('w3-center', 'w3-animate-bottom');
    
}, 200);
