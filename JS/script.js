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
    let deceased = 'Lever';
    if (JSON.parse(obj.deceased)) {
        deceased = 'Død'
    }
    const template = `
        <div class="userCardContainer" id="test">
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

infoDisplay.addEventListener('click', e => {
    console.log(e.target.getAttribute('id'));
});

// Form event listener
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const parents = [grunnleggendeDataForm.forelder1.value, grunnleggendeDataForm.forelder2.value];
    const NAV = {
        member: NAVForm.medlem.value,
        disabled: NAVForm.ufor.value,
        pensioner: NAVForm.pensjonist.value,
        workInjury: NAVForm.yrkesskade.value,
        bonusJobPay: NAVForm.dagpenger.value,
        sickPay: NAVForm.sykepenger.value
    };

    const economicStatus = {
        bankAccount: økonomiskeForholdForm.bankkonto.value,
        creditCard: økonomiskeForholdForm.kredittkort.value,
        loan: økonomiskeForholdForm.lan.value,
        accessToData: økonomiskeForholdForm.fullmakt.value
    };

    const incomeCurrent = {
        income1: inntekt2022Form.inntekt1.value,
        income2: inntekt2022Form.inntekt2.value,
        income3: inntekt2022Form.inntekt3.value,
        income4: inntekt2022Form.inntekt4.value,
        income5: inntekt2022Form.inntekt5.value,
        income6: inntekt2022Form.inntekt6.value,
        income7: inntekt2022Form.inntekt7.value,
        income8: inntekt2022Form.inntekt8.value
    };

    const incomePast = {
        income2019: inntektFortidForm.inntekt2019.value,
        income2020: inntektFortidForm.inntekt2020.value,
        income2021: inntektFortidForm.inntekt2021.value
    };

    const lifeStatus = {
        horriblySick: livssituasjonForm.alvorligSyk.value,
        refugee: livssituasjonForm.flyktning.value,
        pregnant: livssituasjonForm.gravid.value
    };

    const lånekassen = {
        scholarship: lånekassenForm.stipend.value,
        studyInEU: lånekassenForm.studiested.value
    };

    const work = {
        freelancer: arbeidsForholdForm.freelancer.value,
        jobStatus: arbeidsForholdForm.forholdStatus.value,
        sector: arbeidsForholdForm.sektor.value,
        workHoursLast: arbeidsForholdForm.forrigeManed.value,
        workHoursCurrent: arbeidsForholdForm.denneManed.value
    };

    const advancedInfo = [economicStatus, lifeStatus, NAV, lånekassen, work, incomePast, incomeCurrent];

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
        homeYears: grunnleggendeDataForm.botid.value,
        advancedInfo: advancedInfo
    };

    addDoc(userObject, 'personer');
});