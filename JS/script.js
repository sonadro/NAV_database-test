const db = firebase.firestore(); // Databasen vår

// FORMS deklarasjon
const grunnleggendeDataForm = document.querySelector('.grunnleggendeData');
const okonomiskeForholdForm = document.querySelector('.okonomiskeForhold');
const livssituasjonForm = document.querySelector('.livsSituasjon');
const NAVForm = document.querySelector('.NAV');
const lanekassenForm = document.querySelector('.lanekassen');
const arbeidsForholdForm = document.querySelector('.arbeidsForhold');
const inntektFortidForm = document.querySelector('.inntektFortid');
const inntekt2022Form = document.querySelector('.inntekt2022');

// Kode
// const addDoc = function(obj) {
//     db.collection('personer').add(obj).then(() => {
//         console.log('object added', obj);
//     }).catch(err => console.error(err));
// }

// Fetch dokumenter
const getDocs = function() {
    db.collection('personer').get().then(snapshot => {
        // console.log(snapshot.ref.collection('info').get());
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            console.log(doc);
        });
    }).catch(err => console.error(err));
}

getDocs();

// Form event listeners
inntekt2022Form.addEventListener('submit', e => {
    e.preventDefault();

    // addDoc();
});