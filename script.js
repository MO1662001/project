const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.regisret-link');
registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
});
const btnpopup = document.querySelector('.btnlogin-popup');

const iconclose = document.querySelector('.icon-close');

registerlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
    document.querySelector(" .ff").style.display="none";
    document.querySelector(" .fg").style.display="block ";
});
btnpopup.addEventListener ('click',()=> {
    wrapper.classList.add('active-popup');
})

iconclose.addEventListener ('click',()=> {
    wrapper.classList.remove('active-popup');
})

// const dropdowns = document.querySelector('.dropdown')

// dropdowns.forEach(dropdown=> {
//     const select = dropdown.querySelector('.select');
//     const caret = dropdown.querySelector('.caret');
//     const menu = dropdown.querySelector('.menu');
//     const options = dropdown.querySelectorall('.menu li');
//     const selected = dropdown.querySelector('.selected');
// })

// select.add('click, () =>'{
//     select.classList.toggle('select-clicked');
//     caret.classList.toggle('caret-rotate');
     
// });

// options.forEach(option => {
//     option.addEventListener('click',() =>);
//     selected.innertext = option.innertext
//     select.classList.remove('selest-clicked');
//     caret.classList.remove('caret-rotate');
//     menu.classList.remove('menu_open');
//     options.forEach(option => {
//         option.classList.remove('active');
//     })
//     option.classList.add('active');
    
// })













