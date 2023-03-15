// database
const db = firebase.firestore();

// global variables
let parentList = [];
let age;

// FORMS deklarasjon
const grunnleggendeDataForm = document.querySelector('.grunnleggendeData');
const økonomiskeForholdForm = document.querySelector('.okonomiskeForhold');
const livssituasjonForm = document.querySelector('.livsSituasjon');
const NAVForm = document.querySelector('.NAV');
const lånekassenForm = document.querySelector('.lanekassen');
const arbeidsForholdForm = document.querySelector('.arbeidsForhold');
const inntektFortidForm = document.querySelector('.inntektFortid');
const inntekt2022Form = document.querySelector('.inntekt2022');

// andre deklarasjoner
const submitBtn = document.querySelector('.submitKnapp');
const toggle1Btn = document.querySelector('.suggestions1DropBtn');
const toggle2Btn = document.querySelector('.suggestions2DropBtn');
let statusField = document.querySelector("#status");
let statusFieldDead = document.querySelector("#statusDead");
let statusChangeField = document.querySelector("#endringStatus");
let statusChangeFieldLabel = document.querySelector("#endringStatusLabel");
const countryField = grunnleggendeDataForm.land;
const childFields = grunnleggendeDataForm.barn.parentElement.parentElement;

// funksjoner
const addDoc = function(obj, collection) {
    let counter = 0;
    db.collection('databaseValues').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            counter = data.count + 1;
            console.log(counter);
        });
    });

    setTimeout(() => {
        db.collection('databaseValues').doc('generalUserData').set({
            count: counter
        });

        try {
            // Add document
            db.collection(`${collection}`).doc(`${counter}`).set(obj);
            console.log(obj);
        } catch (err) {
            console.error(err);

            db.collection('databaseValues').doc('generalUserData').set({
                count: counter - 1
            });
        }
    }, 1000);
}

// getdate
const getDate = function() {
    // få dagens dato
    const date = new Date();

    let day = date.getDate();
    if (day.toString().length == '1') {
        day = "0" + day;
    }

    let month = date.getMonth() + 1;
    if (month.toString().length == '1') {
        month = "0" + month;
    }

    const year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    const currentDate = `${year}-${month}-${day}`;
    const earliestDate = `${year - 150}-${month}-${day}`;

    grunnleggendeDataForm.fodselsdato.setAttribute('max', currentDate);
    grunnleggendeDataForm.fodselsdato.setAttribute('min', earliestDate);

    grunnleggendeDataForm.endringStatus.setAttribute('max', currentDate);
    grunnleggendeDataForm.endringStatus.setAttribute('min', earliestDate);
}

// Fetch dokumenter
const getDocs = function() {
    db.collection(`brukere`).get().then(snapshot => {
        // console.log(snapshot);
        let dataArr = [];
        snapshot.forEach(doc => {
            let data = doc.data();
            data.id = doc.id;
            dataArr.push(data);
            if(data.barn){
                parentList.push(doc.id);
                parentList.sort((a, b) => a - b);
            }
        });
        addParents();
        dataArr.sort((a, b) => a.id - b.id);
    }).catch(err => console.error(err));
}

// vis foreldre
function addParents(){
    let parentField1 = document.querySelector('.suggestions1');
    let parentField2 = document.querySelector('.suggestions2');
    //console.log(parentField1.innerHTML);
    for(i = 0; i < parentList.length; i++){
        //console.log(parentList);
        let parentID = parentList[i];
        //console.log(parentID);
        let html = `
        <div class="suggestion">
            <button id="${parentID}">${parentID}</button>
        </div>
        `
        parentField1.innerHTML += html;
        parentField2.innerHTML += html;
    }
    
    // legg til verdien i input-felt
    parentField1.addEventListener('click', e => {
        e.preventDefault();
        grunnleggendeDataForm.forelder1.value = e.target.id;
    });

    parentField2.addEventListener('click', e => {
        e.preventDefault();
        grunnleggendeDataForm.forelder2.value = e.target.id;
    });
}

// ON SUBMIT FUNKSJON -------------------------------
function onSubmit() {
    // fødselsdato
    const args = grunnleggendeDataForm.fodselsdato.value.split('-');

    const bornDay = args[2];
    const bornMonth = args[1];
    const bornYear = args[0];

    // endringstatus
    const endringStatusArgs = grunnleggendeDataForm.endringStatus.value.split('-');

    const endringDag = endringStatusArgs[2];
    const endringMåned = endringStatusArgs[1];
    const endringÅr = endringStatusArgs[0];

    const foreldre = [grunnleggendeDataForm.forelder1.value, grunnleggendeDataForm.forelder2.value];
    const NAV = {
        medlem: NAVForm.medlem.value,
        ufor: NAVForm.ufor.value,
        pensjonist: NAVForm.pensjonist.value,
        yrkesskade: NAVForm.yrkesskade.value,
        dagpenger: NAVForm.dagpenger.value,
        sykepenger: NAVForm.sykepenger.value
    };

    const økonomiskeForhold = {
        bankkonto: økonomiskeForholdForm.bankkonto.value,
        kredittkort: økonomiskeForholdForm.kredittkort.value,
        lan: økonomiskeForholdForm.lan.value,
        fullmakt: økonomiskeForholdForm.fullmakt.value
    };

    const inntekt2022 = {
        inntekt1: inntekt2022Form.inntekt2.value,
        inntekt2: inntekt2022Form.inntekt1.value,
        inntekt3: inntekt2022Form.inntekt3.value,
        inntekt4: inntekt2022Form.inntekt4.value,
        inntekt5: inntekt2022Form.inntekt5.value,
        inntekt6: inntekt2022Form.inntekt6.value,
        inntekt7: inntekt2022Form.inntekt7.value,
        inntekt8: inntekt2022Form.inntekt8.value
    };

    const inntektFortid = {
        inntekt2019: inntektFortidForm.inntekt2019.value,
        inntekt2020: inntektFortidForm.inntekt2020.value,
        inntekt2021: inntektFortidForm.inntekt2021.value
    };

    const livssituasjon = {
        alvorligSyk: livssituasjonForm.alvorligSyk.value,
        flyktning: livssituasjonForm.flyktning.value,
        gravid: livssituasjonForm.gravid.value
    };

    const lånekassen = {
        stipend: lånekassenForm.stipend.value,
        studiested: lånekassenForm.studiested.value
    };

    const arbeidsForhold = {
        freelancer: arbeidsForholdForm.freelancer.value,
        forholdStatus: arbeidsForholdForm.forholdStatus.value,
        sektor: arbeidsForholdForm.sektor.value,
        forrigeManed: arbeidsForholdForm.forrigeManed.value,
        denneManed: arbeidsForholdForm.denneManed.value
    };

    const avansertInfo = [økonomiskeForhold, livssituasjon, NAV, lånekassen, arbeidsForhold, inntektFortid, inntekt2022];

    const brukerObjekt = {
        fornavn: grunnleggendeDataForm.fornavn.value,
        etternavn: grunnleggendeDataForm.etternavn.value,
        fodselsdato: `${bornDay}.${bornMonth}.${bornYear}`,
        alder: age,
        status: grunnleggendeDataForm.status.value,
        endringStatus: `${endringDag}.${endringMåned}.${endringÅr}`,
        ekteskap: grunnleggendeDataForm.ekteskap.value,
        ektefelle: grunnleggendeDataForm.ektefelle.value,
        foreldre,
        barn: grunnleggendeDataForm.barn.value,
        postnummer: grunnleggendeDataForm.postnummer.value,
        land: grunnleggendeDataForm.land.value,
        botid: grunnleggendeDataForm.botid.value,
        avansertInfo
    };


    addDoc(brukerObjekt, 'brukere');
}

// event listeners
statusField.addEventListener("input", e => {
    //console.log(e);
    if(statusField.value == statusFieldDead.value){
        statusChangeField.classList.remove("hidden");
        statusChangeFieldLabel.classList.remove("hidden");
    }else{
        statusChangeField.classList.add("hidden");
        statusChangeFieldLabel.classList.add("hidden");
    }
})

// ektefelle felt bare vises hvis personen er gift
grunnleggendeDataForm.ekteskap.addEventListener('input', e => {
    const label = document.querySelector('.ektefelleLabel');
    //console.log(grunnleggendeDataForm.ekteskap.value);
    if (grunnleggendeDataForm.ekteskap.value === '1') {
        label.classList.remove('hidden');
        grunnleggendeDataForm.ektefelle.classList.remove('hidden');
    } else {
        label.classList.add('hidden');
        grunnleggendeDataForm.ektefelle.classList.add('hidden');
    }
});

// foreldre felt
toggle1Btn.addEventListener('click', e => {
    e.preventDefault();
    const suggestions1Div = document.querySelector('.suggestions1');
    suggestions1Div.classList.toggle('hidden');
});

toggle2Btn.addEventListener('click', e => {
    e.preventDefault();
    const suggestions2Div = document.querySelector('.suggestions2');
    suggestions2Div.classList.toggle('hidden');
});


// fødselsdato felt fyller ut alder automatisk
grunnleggendeDataForm.fodselsdato.addEventListener('input', () => {
    const args = grunnleggendeDataForm.fodselsdato.value.split('-');

    // fødselsdato
    const bornDay = args[2];
    const bornMonth = args[1];
    const bornYear = args[0];
    
    // dagens dato
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();
    
    // definer alder
    age = currentYear - bornYear;
    if (bornMonth >= currentMonth && bornDay >= currentDay) {
        age++;
    }
});


//Temporary fix: moved the childFields declaration to the top of the file, and call the addChild() as an onclick since with eventlistener it would only run once
function addChild() {
    // let childFields = grunnleggendeDataForm.barn.parentElement.parentElement;
    console.log(childFields);

    template = `<div class="inputScalable">
                    <label class="inputTitle">Nytt barn</label>
                    <input class="userInfoInput" type="text">
                </div>`;
    childFields.innerHTML += template;
}

// document.getElementById("addBarn").addEventListener("click", function(event){
//     event.preventDefault();
//     addChild();
// });

// kall funksjoner
getDate();
getDocs();
addParents();