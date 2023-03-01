const popup = document.querySelector('.ugyldigInputPopup');

let submitted = false;

let invalidInputs;
let dropdowns = Array.from(document.querySelectorAll('.userInfoDropdown'));
let ugyldigIndex = 0;

function getNewInvalids() {

    //TODO: Dropdowns som viser default verdi blir markert med ugyldig når forms blir sendt inn
    dropdowns.forEach((dropdown) => {
        //console.log('Test', dropdown.children);
        Array.from(dropdown.childNodes).forEach((child) => {
            console.log(child.textContent);
        })
    })
    invalidInputs = Array.from(document.querySelectorAll('.ugyldig'));

    allInputs = Array.from(document.querySelectorAll('.userInfoInput'));

    allInputs.forEach(input => {
        if (!input.classList.contains('ugyldig')) {
            input.classList.remove('popupHighlight');
        }
    });

    if (!invalidInputs.length) return;

    if (submitted) {
        try {
            invalidInputs[ugyldigIndex].classList.add('popupHighlight');
        } catch (err) {
            console.error(err)
        }
    }

    if (submitted) {
        if (invalidInputs.length) {
            popup.classList.remove('hidden');
        } else {
            popup.classList.add('hidden');
        }
    }
}

// Form event listener
submitBtn.addEventListener('click', e => {
    invalidInputs[ugyldigIndex].classList.add('popupHighlight');
    invalidInputs[ugyldigIndex].scrollIntoView();
    scrollBy(0, -150);

    submitted = true;

    popup.classList.add('hidden');
    if (invalidInputs.length) {
        popup.classList.remove('hidden');
        console.log(invalidInputs);
    } else {
        onSubmit();
    }
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
}