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
const addDoc = function(fornavn, etternavn, fodselsdato, alder, status, endringStatus, ekteskap, ektefelle, barn, postnummer, land, botid, forelder1, forelder2) {
    const obj = {
        fornavn: fornavn,
        etternavn: etternavn,
        fodselsdato: fodselsdato,
        alder: alder,
        status: status,
        endringStatus: endringStatus,
        ekteskap: ekteskap,
        ektefelle: ektefelle,
        barn: barn,
        postnummer: postnummer,
        land: land,
        botid: botid,
        forelder1: forelder1,
        forelder2: forelder2
    }
    db.collection('personer').add(obj).then(() => {
        console.log('object added', obj);
    }).catch(err => console.error(err));
}

// Fetch dokumenter
const getDocs = function() {
    db.collection('testCollection').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            console.log(data);
        });
    }).catch(err => console.error(err));
}

// Form event listeners
grunnleggendeDataForm.addEventListener('submit', e => {
    e.preventDefault();

    addDoc(form.fornavn.value, form.etternavn.value, form.fodselsdato.value, form.alder.value, form.status.value, form.endringStatus.value, form.ekteskap.value, form.ektefelle.value, form.barn.value, form.postnummer.value, form.land.value, form.botid.value, form.forelder1.value, form.forelder2.value)
});