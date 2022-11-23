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

// Kode
// const addDoc = function(obj) {
//     db.collection('personer').add(obj).then(() => {
//         console.log('object added', obj);
//     }).catch(err => console.error(err));
// }

// Fetch dokumenter
const getDocs = function(id) {
    db.collection(`Users/${id}/advancedInfo`).get().then(snapshot => {
        // console.log(snapshot);
        snapshot.forEach(doc => {
            const data = doc.data();
            console.log(data.id, data);
        });
    }).catch(err => console.error(err));
}

getDocs('1');

const onFormSubmit = function() {

}

// Form event listener
submitBtn.addEventListener('click', e => {
    console.log(e);
});