// Last inn land-databasen
let landArray = [];
let selectedLand;
db.collection('land').get().then(snapshot => {
    snapshot.docs.forEach((doc) => {
        let land = {
            navn: doc.data().navn,
            post: doc.data().postRegex
        }
        landArray.push(land);
    });
});

// REGEX LISTENER FUNKSJON
const addRegexEventListeners = function(element, regex) {
    // Hvilke event listeners som skal legges til (på ALLE felt utenom land & postnummer)
    const listeners = ['input', 'focusout'];

    // legg til alle listeners
    listeners.forEach(listener => {
        element.addEventListener(listener, () => {
            const value = element.value;

            if (regex.test(value) === true) {
                // hvis gyldig, fjern ugyldig class, og legg til highlight til neste ugyldige felt (ugyldig-felt popup)
                element.classList.remove('ugyldig');
                popup.addHighlight();
            } else {
                // hvis ugyldig, legg til ugyldig class
                element.classList.add('ugyldig');
            };

            // etterpå finner ugyldig-felt popupen alle nye ugyldige felt.
            popup.getNewInvalidFields();
        });
    });
};

// -------------------------------------------Forms legg til regex listeners-------------------------------------------

// Grunnleggende data
addRegexEventListeners(grunnleggendeDataForm.fornavn, /^[a-zæøåÆØÅ ]{2,}$/i);
addRegexEventListeners(grunnleggendeDataForm.etternavn, /^[a-zæøåÆØÅ ]{2,}$/i);
addRegexEventListeners(grunnleggendeDataForm.forelder1, /^[0-9]+$/);
addRegexEventListeners(grunnleggendeDataForm.forelder2, /^[0-9]+$/);

// land regex (er annerledes)
grunnleggendeDataForm.land.addEventListener('input', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    for(i = 0; i < landArray.length; i++){
        grunnleggendeDataForm.postnummer.value = '';
        if(nameRegex.test(name) == true && landArray[i].navn == name){
            selectedLand = landArray[i];
            element.classList.remove('ugyldig');
            popup.addHighlight();
            break;
        }else{
            selectedLand = undefined;
            element.classList.add('ugyldig');
        }
    }
    popup.getNewInvalidFields();
})

addRegexEventListeners(grunnleggendeDataForm.postnummer, /^[0-9]{4}$/);
addRegexEventListeners(grunnleggendeDataForm.land, /^[a-zæøåÆØÅ ]{2,}$/i);
addRegexEventListeners(grunnleggendeDataForm.botid, /^[0-9]+$/);

// Økonomiske forhold
addRegexEventListeners(økonomiskeForholdForm.bankkonto, /^[0-9]+$/);
addRegexEventListeners(økonomiskeForholdForm.kredittkort, /^[0-9]+$/);
addRegexEventListeners(økonomiskeForholdForm.lan, /^[0-9]{0,}$/);
addRegexEventListeners(økonomiskeForholdForm.fullmakt, /^[0-9]{0,}$/);

// NAV
addRegexEventListeners(NAVForm.sykepenger, /^[0-9]{0,}$/);

// Arbeidsforhold
addRegexEventListeners(arbeidsForholdForm.forrigeManed, /^[0-9]+$/);
addRegexEventListeners(arbeidsForholdForm.denneManed, /^[0-9]+$/);

// Inntekt fortid
addRegexEventListeners(inntektFortidForm.inntekt2019, /^[0-9]+$/);
addRegexEventListeners(inntektFortidForm.inntekt2020, /^[0-9]+$/);
addRegexEventListeners(inntektFortidForm.inntekt2021, /^[0-9]+$/);

// Inntekt 2022
addRegexEventListeners(inntekt2022Form.inntekt1, /^[0-9]+$/);
addRegexEventListeners(inntekt2022Form.inntekt2, /^[0-9]+$/);
addRegexEventListeners(inntekt2022Form.inntekt3, /^[0-9]+$/);
addRegexEventListeners(inntekt2022Form.inntekt4, /^[0-9]+$/);
addRegexEventListeners(inntekt2022Form.inntekt5, /^[0-9]+$/);
addRegexEventListeners(inntekt2022Form.inntekt6, /^[0-9]+$/);
addRegexEventListeners(inntekt2022Form.inntekt7, /^[0-9]+$/);
addRegexEventListeners(inntekt2022Form.inntekt8, /^[0-9]+$/);

// Regex for barn-felt
function addChildRegex() {
    ['input', 'focusout'].forEach(event => {
        let child = childArea[childIndex - 1];
        child.addEventListener(event, (e) => {
            let num = child.value;
            let nameRegex = /^[0-9]{0,}$/;
            if (nameRegex.test(num) == true) {
                child.classList.remove('ugyldig');
                popup.addHighlight();
            } else {
                child.classList.add('ugyldig');
            };
            popup.getNewInvalidFields();
        });
    });
};

// land regex (er annerledes)
grunnleggendeDataForm.land.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.land;
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;

    for(i = 0; i < landArray.length; i++) {
        grunnleggendeDataForm.postnummer.value = '';
        if (nameRegex.test(name) == true && landArray[i].navn == name) {
            selectedLand = landArray[i];
            element.classList.remove('ugyldig');
            popup.addHighlight();
            break;
        } else {
            selectedLand = undefined;
            element.classList.add('ugyldig');
        };
    };
    popup.getNewInvalidFields();
});

// -------------------------------------------Forms dropdown listeners-------------------------------------------

let dropDowns = Array.from(document.querySelectorAll('form select'));

['input', 'blur'].forEach(event => {
    dropDowns.forEach(dropdown => {
        dropdown.addEventListener(event, (e) => {
            if (dropdown.value === 'default') {
                console.log('Invalid field detected');
                dropdown.classList.add('ugyldig');
            } else {
                dropdown.classList.remove('ugyldig');
            };
            popup.getNewInvalidFields();
        });
    });
});

addChildRegex();