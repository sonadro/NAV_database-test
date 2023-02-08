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

        // Add document
        db.collection(`${collection}`).doc(`${counter}`).set(obj);
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

// Form event listener
submitBtn.addEventListener('click', e => {
    e.preventDefault();
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
        fodselsdato: grunnleggendeDataForm.fodselsdato.value,
        alder: age,
        status: grunnleggendeDataForm.status.value,
        endringStatus: grunnleggendeDataForm.endringStatus.value,
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
});

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

//-------------------------------------------Forms regex listeners-------------------------------------------

//Grunnleggende data

grunnleggendeDataForm.fornavn.addEventListener('input', e => {
    let element = grunnleggendeDataForm.fornavn
    let name = element.value;
    console.log(name);
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        console.log("Valid name");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig navn");
        element.classList.add("ugyldig");
    }
})

grunnleggendeDataForm.etternavn.addEventListener('input', e => {
    let element = grunnleggendeDataForm.etternavn
    let name = element.value;
    console.log(name);
    let nameRegex = /^.[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        console.log("Valid etternavn");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig etternavn");
        element.classList.add("ugyldig");
    }
})

grunnleggendeDataForm.forelder1.addEventListener('input', e => {
    let element = grunnleggendeDataForm.forelder1
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9]{0,}[^,.e]$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig forelder");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig forelder");
        element.classList.add("ugyldig");
    }
})

grunnleggendeDataForm.forelder2.addEventListener('input', e => {
    let element = grunnleggendeDataForm.forelder2
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9]{0,}[^,.e]$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig forelder");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig forelder");
        element.classList.add("ugyldig");
    }
})

grunnleggendeDataForm.barn.addEventListener('input', e => {
    let element = grunnleggendeDataForm.barn
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9]{0,}[^,.e]$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig barn");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig barn");
        element.classList.add("ugyldig");
    }
})

grunnleggendeDataForm.postnummer.addEventListener('input', e => {
    let element = grunnleggendeDataForm.postnummer
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9]{0,}[^,.e]$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig postnummer");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig postnummer");
        element.classList.add("ugyldig");
    }
})

grunnleggendeDataForm.land.addEventListener('input', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    console.log(name);
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        console.log("Gyldig land");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig land");
        element.classList.add("ugyldig");
    }
})

grunnleggendeDataForm.botid.addEventListener('input', e => {
    let element = grunnleggendeDataForm.botid
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9]{0,}[^,.e]$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig botid");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig botid");
        element.classList.add("ugyldig");
    }
})  

//Økonomiske forhold

økonomiskeForholdForm.bankkonto.addEventListener('input', e => {
    let element = økonomiskeForholdForm.bankkonto
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig bankkonto");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig bankkonto");
        element.classList.add("ugyldig");
    }
})

økonomiskeForholdForm.kredittkort.addEventListener('input', e => {
    let element = økonomiskeForholdForm.kredittkort
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9][^,.e]{0,}$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig kredittkort");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig kredittkort");
        element.classList.add("ugyldig");
    }
})

økonomiskeForholdForm.lan.addEventListener('input', e => {
    let element = økonomiskeForholdForm.lan
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9][^,.e]{0,}$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig lån");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig lån");
        element.classList.add("ugyldig");
    }
})

økonomiskeForholdForm.fullmakt.addEventListener('input', e => {
    let element = økonomiskeForholdForm.fullmakt
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9][^,.e]{0,}$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig fullmakt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig fullmakt");
        element.classList.add("ugyldig");
    }
})

//Livssituasjon

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

// kall funksjoner
getDate();
getDocs();
addParents();