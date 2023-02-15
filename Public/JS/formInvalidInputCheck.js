const popup = document.querySelector('.ugyldigInputPopup');
const indexText = document.querySelector('.index');

let invalidInputs;
let ugyldigIndex = -1;

// Form event listener
submitBtn.addEventListener('click', e => {
    // alle invalid inputs
    invalidInputs = Array.from(document.querySelectorAll('.ugyldig'));

    popup.classList.add('hidden');
    if (invalidInputs.length) {
        popup.classList.remove('hidden');
        console.log(invalidInputs);
    }
    // onSubmit();
});

const prevBtn = document.querySelector('.forrige');
const nextBtn = document.querySelector('.neste');

prevBtn.addEventListener('click', () => {
    handleIndexChange(-1);
});

nextBtn.addEventListener('click', () => {
    handleIndexChange(1);
});

function handleIndexChange(increment) {
    ugyldigIndex += increment;

    if (ugyldigIndex < 0) {
        ugyldigIndex = invalidInputs.length - 1;
    } else if (ugyldigIndex > invalidInputs.length - 1) {
        ugyldigIndex = 0;
    }

    // remove highlight
    invalidInputs.forEach(elm => {
        elm.classList.remove('popupHighlight');
    });

    // add highlight & scroll
    invalidInputs[ugyldigIndex].classList.add('popupHighlight');
    invalidInputs[ugyldigIndex].scrollIntoView();
    scrollBy(0, -150);

    indexText.textContent = ugyldigIndex;
}