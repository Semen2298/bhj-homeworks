const rotatorCases = document.querySelectorAll('.rotator__case');

function rotateCases() {
    const activeCase = document.querySelector('.rotator__case_active');
    const activeIndex = Array.from(rotatorCases).indexOf(activeCase);
    const activeCaseDataSpeed = parseInt(activeCase.dataset.speed);
    const activeCaseDataColor = activeCase.dataset.color;
    
    activeCase.classList.remove('rotator__case_active');

    const nextIndex = (activeIndex + 1) % rotatorCases.length;

    rotatorCases[nextIndex].classList.add('rotator__case_active');
    rotatorCases[nextIndex].style.color = activeCaseDataColor;
    setTimeout(rotateCases, activeCaseDataSpeed)
} 
rotateCases()