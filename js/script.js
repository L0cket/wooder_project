'use strict'

function funcMenu(){
    let menuBtn = document.getElementById('menu_btn');
    let activeMenu = document.querySelector('.hidden_menu');
    let burgerLines = document.querySelectorAll('.burger-line');
    let burgerText = document.querySelector('.burger_text');

    menuBtn.addEventListener('click', showMenu);

    function showMenu(){
        for(let i = 0; i < burgerLines.length; i++){
            burgerLines[i].classList.toggle('active_lines');
        }
        burgerText.classList.toggle('active_burger_text');
        activeMenu.classList.toggle('hidden_menu_active');
        //document.querySelector('.header_nav').classList.toggle('hide_header_nav');
    }
}

function showLanguage(){
    const language = document.getElementById('localization');
    let localLanguage = document.querySelectorAll('.language');
    let arrow = document.querySelectorAll('.language_arrow');
    const localMenu = document.getElementById('local_menu');
    const langType = document.querySelector('.language_type');
    let localLangType = document.querySelectorAll('.language_language');

    let index = 0;

    language.addEventListener('click', showLocalMenu);

    localLanguage.forEach(function(item, indexLanguage){
        item.addEventListener('click', function(){
            index = indexLanguage;
            activeLanguage(index);
            activeArrow(index);
            activeLanguageType(index);
        })
    });

    function showLocalMenu(){
        localMenu.classList.toggle('active_localization_menu');
        langType.classList.toggle('localization_active');
    }

    function activeLanguage(n){
        for(let i = 0; i < localLanguage.length; i++){
            localLanguage[i].classList.remove('language_active');
        }
        localLanguage[n].classList.add('language_active');
    }

    function activeArrow(n){
        for(let i = 0; i < arrow.length; i++){
            arrow[i].classList.remove('active_arrow');
        }
        arrow[n].classList.add('active_arrow');
    }
    
    function activeLanguageType(n){
        langType.innerHTML = localLangType[n].innerHTML;
    }
}

function funcSlider(){
    let dots = document.querySelectorAll('.slider_circle');
    let sliderNumber = document.getElementById('slider_number');
    let index = 0;

    function activeDots(n){
        for(let i = 0; i < dots.length; i++){
            dots[i].classList.remove('slider_active');
        }
        dots[n].classList.add('slider_active');
    }

    function activeSlider(n){
        if(n == 0){
            sliderNumber.innerText = '01';
        } else{
            sliderNumber.innerText = '0' + (n + 1);
        }
    }

    function activeBg(n){
        let bg = document.querySelector('.header');
        let param = `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),`;
        let backgrounds = [`url('../img/header_left.jpg') left 0 top 30% / 55% 100%, url('../img/header_right.jpg') right 0 top 0 / auto 100%;`, `url('../img/bg-data-1.jpg');`, `url('../img/bg-data-2.jpg');`, `url('../img/bg-data-3.jpg');`,]
        bg.style.background = backgrounds[n];
    }

    dots.forEach(function(item, indexDot){
        item.addEventListener('click', function(){
            index = indexDot;
            activeSlider(index);
            activeDots(index);
            activeBg(index);
        })
    });
}

function moveFunc(){
    const slider = document.getElementById('slider');
    const text = document.getElementById('headerDescription');
    const content = document.querySelector('.header_content');
    const headerCenter = document.querySelector('.header_center');

    const headerNav = document.querySelector('.header_nav');
    const menuHidden = document.querySelector('.hidden_menu');
    const headerMenu = document.querySelector('.menu_navbar');

    const support = document.querySelector('.header_support');
    const supportMenu = document.querySelector('.header_menu');

    window.addEventListener('resize', moveBlocks);

    function moveBlocks(){
        if(window.innerWidth <= 835){
            headerCenter.append(text, slider);
            menuHidden.prepend(headerNav);
        } else{
            content.append(slider, text);
            headerMenu.append(headerNav);
            supportMenu.append(support);
        }

        if(window.innerWidth <= 500){
            menuHidden.insertBefore(support, menuHidden.children[1]);
        } else{
            supportMenu.append(support);
        }
    }
    moveBlocks();
}
funcMenu();
showLanguage();
funcSlider();
moveFunc();