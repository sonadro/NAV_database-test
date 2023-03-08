const popup = document.querySelector('.ugyldigInputPopup');

let submitted = false;

let invalidInputs = 0;
let dropdowns = Array.from(document.querySelectorAll('.userInfoDropdown'));
let ugyldigIndex = 0;

function getNewInvalids() {
    invalidInputs = Array.from(document.querySelectorAll('.ugyldig'));

    allInputs = Array.from(document.querySelectorAll('.userInfoInput'));

    allInputs.forEach(input => {
        if (!input.classList.contains('ugyldig')) {
            input.classList.remove('popupHighlight');
        }
    });

    if (!invalidInputs.length) return;

    if (submitted) {
        getNewInvalidDropdowns();
    }

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

function getNewInvalidDropdowns(){
    //Select and update the dropdowns with a default value
    dropdowns.forEach((dropdown) => {
        if(dropdown.value === "default"){
            // console.log("Invalid field detected");
            dropdown.classList.add("ugyldig");
        }else{
            dropdown.classList.remove("ugyldig");
        }
    })
}

// Form event listener
submitBtn.addEventListener('click', e => {

    // finn nye ugyldige inputs
    getNewInvalids();
    getNewInvalidDropdowns();

    // endre highlight
    if (invalidInputs != 0) {
        invalidInputs[ugyldigIndex].classList.add('popupHighlight');
        invalidInputs[ugyldigIndex].scrollIntoView();
        scrollBy(0, -150);
    }

    submitted = true;
    popup.classList.add('hidden');

    if (invalidInputs) {
        popup.classList.remove('hidden');
    } else {
        popup.classList.add('hidden');
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
    console.log('indexchange');

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