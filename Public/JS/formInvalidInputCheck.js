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

    addHighlight() {
        // oppdater array med alle input felter
        this.allInputFields = Array.from(document.querySelectorAll('.userInfoInput'));

        // fjern highlight fra alle elementer
        this.allInputFields.forEach(inputField => {
            inputField.classList.remove('popupHighlight');
        });

        // legg til highlight til nytt element (bare hvis submitted = true)
        if (this.submitted) this.invalidInputFields[this.invalidIndex].classList.add('popupHighlight');
    }

    indexChange(inc) {
        // increment index
        this.invalidIndex += inc;

        // index er mellom 0 og lengden på invalidInputFields array
        if (this.invalidIndex < 0) this.invalidIndex = this.invalidInputFields.length - 1;
        if (this.invalidIndex > this.invalidInputFields.length - 1) this.invalidIndex = 0;
        console.log(this.invalidIndex);

        // legg til class til ny highlight
        this.addHighlight();

        this.invalidInputFields[this.invalidIndex].scrollIntoView();
        scrollBy(0, -150);
    }

    getNewInvalidFields() {
        // oppdater classes
        this.allInputFields.forEach(field => {
            if (!field.classList.contains('ugyldig') && field.value == '' && !field.classList.contains('hidden')) {
                field.classList.add('ugyldig');
                //console.log('ugyldig');
                //console.log(field);
            }
        });

        // finn nye ugyldige inputs
        this.invalidInputFields = Array.from(document.querySelectorAll('.ugyldig'));

        // hvis form er submittet, vis popup
        if (this.submitted) {
            if (this.invalidInputFields.length === 0) {
                this.element.classList.add('hidden');
            } else {
                this.element.classList.remove('hidden');
            }
        }
    }
}

const popup = new Popup();

// submit listener
document.querySelector('.submitKnapp').addEventListener('click', e => {
    e.preventDefault();

    popup.submitted = true;
    popup.getNewInvalidFields();

    if (popup.invalidInputFields.length !== 0) {
        popup.element.classList.remove('hidden');
        console.log('ugyldig');
    } else {
        popup.element.classList.add('hidden');
        console.log('gyldig');
        onSubmit();
    }
});