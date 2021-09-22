let sliderImages = document.querySelectorAll('.slide'),
arrowPreview = document.querySelector('#prev'),
arrowNext = document.querySelector('#next'),
current = 0;

function reset(){
    for(let i = 0; i < sliderImages.length; i++){
      sliderImages[i].style.display = 'none';
    }
}

// Init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft(){
   reset();
   sliderImages[current - 1].style.display = 'block';
   current--;
}

// Show next
function slideRight(){
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Preview arrow click
arrowPreview.addEventListener('click', function(){
  if(current === 0){
    current = sliderImages.length;
  }
  slideLeft();
});

// Next arrow click
arrowNext.addEventListener('click', function(){
  if(current === sliderImages.length -1){
    current = -1
  }
  slideRight();
});


startSlide();


