class Popup {
    constructor() {
        this.element = document.querySelector('.ugyldigInputPopup');
        this.submitted = false;
        this.invalidIndex = -1;
        this.allDropdowns = Array.from(document.querySelectorAll('.userInfoDropdown'));
        this.invalidInputFields = Array.from(document.querySelectorAll('.ugyldig'));
        this.allInputFields = Array.from(document.querySelectorAll('.userInfoInput'));
        this.prevBtn = document.querySelector('.forrige');
        this.nextBtn = document.querySelector('.neste');
    }

    indexChange(inc) {
        // increment index
        this.invalidIndex += inc;

        // index er mellom 0 og lengden på invalidInputFields array
        if (this.invalidIndex < 0) this.invalidIndex = this.invalidInputFields.length - 1;
        if (this.invalidIndex > this.invalidInputFields.length - 1) this.invalidIndex = 0;
        console.log(this.invalidIndex);

        // fjern class fra forrige highlight
        this.invalidInputFields.forEach(inputField => {
            inputField.classList.remove('popupHighlight');
        });

        // legg til class til ny highlight
        this.invalidInputFields[this.invalidIndex].classList.add('popupHighlight');

        this.invalidInputFields[this.invalidIndex].scrollIntoView();
        scrollBy(0, -150);
    }

    getNewInvalidFields() {
        // oppdater classes
        this.allInputFields.forEach(field => {
            if (!field.classList.contains('ugyldig') && field.value === null) {
                field.classList.add('ugyldig');
            }
        });

        // finn nye ugyldige inputs
        this.invalidInputFields = Array.from(document.querySelectorAll('.ugyldig'));
    }
}

const popup = new Popup();

popup.getNewInvalidFields();

// submit listener
document.querySelector('.submitKnapp').addEventListener('click', e => {
    e.preventDefault();

    popup.submitted = true;
    popup.getNewInvalidFields();

    if (!popup.invalidInputFields === undefined) {
        popup.element.classList.remove('hidden');
    } else {
        popup.element.classList.add('hidden');
        onSubmit();
    }
});

// TODO: handleindexchange (Scroll), hide popup når ingenting er ugyldig