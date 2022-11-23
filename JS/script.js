const db = firebase.firestore(); // Databasen vår

// FORMS deklarasjon
const grunnleggendeDataForm = document.querySelector('.grunnleggendeData');
const økonomiskeForholdForm = document.querySelector('.okonomiskeForhold');
const livssituasjonForm = document.querySelector('.livsSituasjon');
const NAVForm = document.querySelector('.NAV');
const lånekassenForm = document.querySelector('.lanekassen');
const arbeidsForholdForm = document.querySelector('.arbeidsForhold');
const inntektFortidForm = document.querySelector('.inntektFortid');
const inntekt2022Form = document.querySelector('.inntekt2022');

const submitBtn = document.querySelector('.submitKnapp');
const infoDisplay = document.querySelector('#infoDisplay');

// Kode
const addDoc = function(obj, collection) {
    db.collection(`${collection}`).add(obj).then(() => {
        console.log('object added', obj);
    }).catch(err => console.error(err));
}

// Fetch dokumenter
const getDocs = function() {
    db.collection(`Users`).get().then(snapshot => {
        // console.log(snapshot);
        snapshot.forEach(doc => {
            const data = doc.data();
            console.log(doc.id, data);
            genTemplate(data); // Displays an info card of the data
        });
    }).catch(err => console.error(err));
}

const genTemplate = function(obj) {
    let deceased = 'Død';
    if (JSON.parse(obj.deceased)) {
        deceased = 'Lever'
    }
    const template = `
        <div class="userCardContainer">
            <h5 class="cardNameHeader">${obj.firstName} ${obj.lastName}</h5>
            <ul class="cardInfoList">
                <li class="cardInfoListElement">Alder: ${obj.age}</li>
                <li class="cardInfoListElement">Livsstatus: ${deceased}</li>
                <li class="cardInfoListElement">Postnummer: ${obj.postalCode}</li>
            </ul>
        </div>
    `;
    infoDisplay.innerHTML += template;
}

getDocs();

// Form event listener
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const parents = [grunnleggendeDataForm.forelder1.value, grunnleggendeDataForm.forelder2.value];
    // const NAV = [];
    const userObject = {
        firstName: grunnleggendeDataForm.fornavn.value,
        lastName: grunnleggendeDataForm.etternavn.value,
        DOB: grunnleggendeDataForm.fodselsdato.value,
        age: grunnleggendeDataForm.alder.value,
        deceased: grunnleggendeDataForm.status.value,
        deceasedDate: grunnleggendeDataForm.endringStatus.value,
        marriageState: grunnleggendeDataForm.ekteskap.value,
        marriageWho: grunnleggendeDataForm.ektefelle.value,
        parent: parents,
        children: grunnleggendeDataForm.barn.value,
        postalCode: grunnleggendeDataForm.postnummer.value,
        country: grunnleggendeDataForm.land.value,
        homeYears: grunnleggendeDataForm.botid.value
    };

    addDoc(userObject, 'personer');
});