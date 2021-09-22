let rightbutton = document.querySelector('.carousel__button--right')
let leftbutton = document.querySelector('.carousel__button--left')
let indicators = document.querySelector('.carousel__nav')
let leftindicator = document.querySelector('.leftindicator')
let middleindicator = document.querySelector('.middleindicator')
let rightindicator = document.querySelector('.rightindicator')
let track = document.querySelector('.carousel__track')
let slides = Array.from(track.children)
let indicatorsArr = Array.from(indicators.children)
let i = 0

nextSlide(i)
indicator(i)

function nextSlide (i){
    for(s of slides){
        s.style.display = 'none'
    }
    slides[i].style.display = 'flex'
}

rightbutton.addEventListener('click',function(){
    if(i === slides.length - 1){
        i = -1
    }
    i++
   nextSlide(i)
   indicator(i)
})

leftbutton.addEventListener('click',function(){
    if(i === 0){
        i = slides.length
    }
    i--
   nextSlide(i)
   indicator(i)
})

function indicator (i){
    for(ind of indicatorsArr){
        ind.style.background = ''
    } 
    indicatorsArr[i].style.background = 'rgba(0,0,0,.75)'
}
 
leftindicator.addEventListener('click',function(){
    i = 0
    indicator(i)
    nextSlide(i)
})

middleindicator.addEventListener('click',function(){
    i = 1
    indicator(i)
    nextSlide(i)
})

rightindicator.addEventListener('click',function(){
    i = 2
    indicator(i)
    nextSlide(i)
})








