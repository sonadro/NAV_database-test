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
const advancedInfoCard = document.querySelector(".advancedInfoCard");

/*const advancedInfoGrunnleggende = document.querySelector('#advInfoGrunnleggende');
const advancedInfoØkonomiskeForhold = document.querySelector('#advInfoOkonomiskeForhold');
const advancedInfoLivssituasjon = document.querySelector('#advInfoLissituasjon');
const advancedInfoNAV = document.querySelector('#advInfoNAV');
const advancedInfoLånekassen = document.querySelector('#advInfoLanekassen');
const advancedInfoArbeidsforhold = document.querySelector('#advInfoArbeidsforhold');
const advancedInfoInntektFortid = document.querySelector('#advInfoInntektFortid');
const advancedInfoInntekt = document.querySelector('#advInfoInntekt2022');

const advInfoButtonGrunnleggende = document.querySelector('#advInfoTog-grunnleggende');
const advInfoButtonØkonomiskeForhold = document.querySelector('#advInfoTog-okonomiskeForhold');
const advInfoButtonLivssituasjon = document.querySelector('#advInfoTog-livssituasjon');
const advInfoButtonNAV = document.querySelector('#advInfoTog-NAV');
const advInfoButtonLånekassen = document.querySelector('#advInfoTog-lanekassen');
const advInfoButtonArbeidsforhold = document.querySelector('#advInfoTog-arbeidsforhold');
const advInfoButtonInntektFortid = document.querySelector('#advInfoTog-inntektFortid');
const advInfoButtonInntekt2022 = document.querySelector('#advInfoTog-inntekt2022');*/

// Kode
const addDoc = function(obj, collection) {
    db.collection(`${collection}`).add(obj).then(() => {
        console.log('object added', obj);
    }).catch(err => console.error(err));
}

// Fetch dokumenter
const getDocs = function() {
    db.collection(`brukere`).get().then(snapshot => {
        // console.log(snapshot);
        snapshot.forEach(doc => {
            const data = doc.data();
            console.log(doc.id, data);
            genTemplate(data, doc.id); // Displays an info card of the data
        });
    }).catch(err => console.error(err));
}

const genTemplate = function(obj, id) {
    let status = 'Død';
    if (obj.status) {
        status = 'Lever'
    }
    const template = `
        <div class="userCardContainer" id="${id}">
            <h5 class="cardNameHeader" id="${id}">${obj.fornavn} ${obj.etternavn}</h5>
            <ul class="cardInfoList" id="${id}">
                <li class="cardInfoListElement" id="${id}">Alder: ${obj.alder}</li>
                <li class="cardInfoListElement" id="${id}">Livsstatus: ${status}</li>
                <li class="cardInfoListElement" id="${id}">Postnummer: ${obj.postnummer}</li>
            </ul>
        </div>
    `;
    infoDisplay.innerHTML += template;
}

getDocs();

infoDisplay.addEventListener('click', e => {
    if (e.target.getAttribute('class') === 'userCardContainer'){
        console.log(e.target.getAttribute('id'));
        openAdvancedInfo();
    }else if(e.target.parentElement.getAttribute('class') === 'userCardContainer'){
        console.log(e.target.getAttribute('id'));
        openAdvancedInfo();
    }else if(e.target.parentElement.parentElement.getAttribute('class') === 'userCardContainer'){
        console.log(e.target.getAttribute('id'));
        openAdvancedInfo();
    }
});

advancedInfoCard.addEventListener('click', e => {
    let target = e.target;
    //console.log(target);
    if(target.classList.contains('advInfoCatSelect')){
        //console.log(e.target.nextElementSibling);
        e.target.nextElementSibling.classList.toggle('hidden');
        e.target.lastChild.classList.toggle('rotateArrow');
    }
    /*if(target == advInfoButtonGrunnleggende){
        advancedInfoGrunnleggende.classList.toggle('hidden');
    }*/

})

let openAdvancedInfo = () => {
    advancedInfoCard.style.display = 'block';
    console.log("Card opened");
}
let closeAdvancedInfo = () => {
    advancedInfoCard.style.display = 'none';
}

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
        alder: grunnleggendeDataForm.alder.value,
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