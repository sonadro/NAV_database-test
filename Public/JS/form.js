const db = firebase.firestore(); // Databasen vår

// deklarasjoner
const sampleContainer = document.querySelector("div.sampleContain");

let parentList = [];
let age;
let childIndex = 1;

const grunnleggendeDataForm = document.querySelector('.grunnleggendeData');
const økonomiskeForholdForm = document.querySelector('.okonomiskeForhold');
const livssituasjonForm = document.querySelector('.livsSituasjon');
const NAVForm = document.querySelector('.NAV');
const lånekassenForm = document.querySelector('.lanekassen');
const arbeidsForholdForm = document.querySelector('.arbeidsForhold');
const inntektFortidForm = document.querySelector('.inntektFortid');
const inntekt2022Form = document.querySelector('.inntekt2022');

const submitBtn = document.querySelector('.submitKnapp');
const toggle1Btn = document.querySelector('.suggestions1DropBtn');
const toggle2Btn = document.querySelector('.suggestions2DropBtn');
let statusField = document.querySelector("#status");
let statusFieldDead = document.querySelector("#statusDead");
let statusChangeField = document.querySelector("#endringStatus");
let statusChangeFieldLabel = document.querySelector("#endringStatusLabel");
const countryField = grunnleggendeDataForm.land;
let childArea = Array.from(document.querySelectorAll("div.childArea input"));
const childFields = grunnleggendeDataForm.barn.parentElement.parentElement;

const fornavn = document.getElementById("fornavn")
const etternavn = document.getElementById("etternavn")
const fodselsdato = document.getElementById("fodselsdato")
const livsstatus = document.getElementById("status")
const endringStatus = document.getElementById("endringStatus")
const ekteskap = document.getElementById("ekteskap")
const ektefelle = document.getElementById("ektefelle")
const forelder1 = document.getElementById("forelder1")
const forelder2 = document.getElementById("forelder2")
const barn = document.getElementById("barn")
const land = document.getElementById("land")
const botid = document.getElementById("botid")

let fields = [fornavn, etternavn, fodselsdato, livsstatus, endringStatus, ekteskap, ektefelle, forelder1, forelder2]

// HTML-injection for samplekort
const genSample = function(obj, id) {
    const template = `
        <div class="sampleBox" id="${id}">
            <h5 class="sampleNameHeader" id="${id}">${obj.fornavn} ${obj.etternavn}</h5>
            <ul class="sampleInfoList" id="${id}">
                <li class="sampleInfoListElement" id="${id}">Alder: ${obj.alder}</li>
                <li class="sampleInfoListElement" id="${id}">Livsstatus: ${obj.status}</li>
            </ul>
        </div>
    `;
    sampleContainer.innerHTML += template;
}

// Fetch dokumenter
const getDocs = function() {
    let dataArr = [];
    let filterArr = [];
    db.collection(`brukere`).get().then(snapshot => {
        snapshot.forEach(doc => {
            let data = doc.data();
            data.id = doc.id;

            // livsstatus sjekk
            if (data.status === "0") {
                data.status = 'Død';
            } else if (data.status === "1") {
                data.status = 'Lever';
            }

            dataArr.push(data);
        });
        dataArr.sort((a, b) => a.id - b.id);
    }).then(() => {
        // Filtrer array slik at det bare blir 6 personer
        for(i=0; i < 6; i++){
            let selectedPerson = Math.floor(Math.random() * dataArr.length);
            filterArr.push(dataArr[selectedPerson]);
            dataArr.splice(selectedPerson, 1);
        }
    }).then(() => {
        filterArr.forEach(dat => {
            genSample(dat, dat.id); // Lag en samplebox med dataen
        });
    }).catch(err => console.error(err));
}

function grabIdInfo(id) {
    let personid = id
    console.log(personid);
    var docRef = db.collection("brukere")
    
    docRef.doc(personid).get().then((doc) => {
        // Document was found in the cache. If no cached document exists,
        // an error will be returned to the 'catch' block below.
        const data = doc.data();

        fornavn.value = data.fornavn;
        etternavn.value = data.etternavn;

        splitResult = data.fodselsdato.split(".");
        console.log(splitResult);
        let dob = `${splitResult[2]}-${splitResult[1]}-${splitResult[0]}`;
        fodselsdato.value = dob;

        livsstatus.value = data.status;
        endringStatus.value = data.endringStatus;
        ekteskap.value = data.ekteskap;
        ektefelle.value = data.ektefelle;
        forelder1.value = data.foreldre[0];
        forelder2.value = data.foreldre[1];
        barn.value = data.barn;
        land.value = data.land;
        botid.value = data.botid;
        postnummer.value = data.postnummer;

        // etter dataen har lastet, finn nye ugyldige felt
        popup.getNewInvalidFields();

    }).catch((error) => {
        console.log("Error getting cached document:", error);
    });
}

function test() {
    let testy = "20.02.2020"
    splitResult = testy.split(".")
    console.log(splitResult);
    let dob = `${splitResult[2]}-${splitResult[1]}-${splitResult[0]}`
    console.log("DOB: "+dob);
}

livsstatus.addEventListener("input", e => {
    if(livsstatus.value == endringStatus.value){
        endringStatus.classList.remove("hidden");
        endringStatus.classList.remove("hidden");
        console.log("unhiding");
    }else{
        endringStatus.classList.add("hidden");
        endringStatus.classList.add("hidden");
        console.log("hiding");
    }
})

sampleContainer.addEventListener('click', e => {
    if (e.target.getAttribute('class') === 'sampleBox'){
        grabIdInfo(e.target.getAttribute('id'));
    }else if(e.target.parentElement.getAttribute('class') === 'sampleBox'){
        grabIdInfo(e.target.getAttribute('id'));
    }else if(e.target.parentElement.parentElement.getAttribute('class') === 'sampleBox'){
        grabIdInfo(e.target.getAttribute('id'));
    };
});

getDocs();