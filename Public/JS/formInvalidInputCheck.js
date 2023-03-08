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

        // forrige index
        let prevIndex;
        if (this.invalidIndex - 1 < 0) {
            prevIndex = this.invalidInputFields.length - 1;
        } else {
            prevIndex = this.invalidIndex - 1;
        }

        // neste index
        let nextIndex;
        if (this.invalidIndex + 1 > this.invalidInputFields.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex = this.invalidIndex + 1;
        }

        // fjern class fra forrige highlight, legg til class til ny highlight
        this.invalidInputFields[prevIndex].classList.remove('popupHighlight');
        this.invalidInputFields[this.invalidIndex].classList.add('popupHighlight');
        this.invalidInputFields[nextIndex].classList.remove('popupHighlight');

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

    if (popup.invalidInputFields) {
        popup.element.classList.remove('hidden');
        console.log('invalid');
    } else {
        popup.element.classList.add('hidden');
        console.log('valid');
    }
});

// TODO: handleindexchange (Scroll), hide popup når ingenting er ugyldig