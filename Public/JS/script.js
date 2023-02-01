const db = firebase.firestore(); // Databasen vår

// deklarasjoner
const infoDisplay = document.querySelector('#infoDisplay');
const advancedInfoCard = document.querySelector(".advancedInfoCard");
const advancedInfoCardContainer = document.querySelector(".advInfoCardContainer");
const body = document.querySelector("body");

// funksjoner
let closeAdvancedInfo = () => {
    advancedInfoCard.style.display = 'none';
    body.classList.toggle("noScroll");
    advancedInfoCardContainer.style.zIndex = "-1";
    advancedInfoCardContainer.style.backgroundColor = "rgb(0, 0, 0, 0)";
    advInfoCheck = false;
}

// function for opening the advanced info cards
let advInfoCheck;
const openAdvancedInfo = id => {
    // show card
    advancedInfoCard.style.display = 'block';
    advancedInfoCardContainer.style.zIndex = "2";
    advancedInfoCardContainer.style.backgroundColor = "rgb(0, 0, 0, 53%)";

    // define elements --- grunnleggende data
    const fornavnHeadElm = advancedInfoCard.querySelector('#advInfoHead-fornavn');
    const etternavnHeadElm = advancedInfoCard.querySelector('#advInfoHead-etternavn');
    const idHeadElm = advancedInfoCard.querySelector('#advInfoHead-ID');

    const fornavnElm = advancedInfoCard.querySelector('#advInfo-fornavn');
    const etternavnElm = advancedInfoCard.querySelector('#advInfo-etternavn');
    const fodselsdatoElm = advancedInfoCard.querySelector('#advInfo-fodselsdato');
    const alderElm = advancedInfoCard.querySelector('#advInfo-alder');
    const livsstatusElm = advancedInfoCard.querySelector('#advInfo-livsstatus');
    const endringStatusElm = advancedInfoCard.querySelector('#advInfo-endringLivsstatus');
    const ekteskapElm = advancedInfoCard.querySelector('#advInfo-ekteskap');
    const ektefelleElm = advancedInfoCard.querySelector('#advInfo-ektefelle');
    const forelder1Elm = advancedInfoCard.querySelector('#advInfo-forelder1');
    const forelder2Elm = advancedInfoCard.querySelector('#advInfo-forelder2');
    const barnElm = advancedInfoCard.querySelector('#advInfo-barn');
    const postnummerElm = advancedInfoCard.querySelector('#advInfo-postnummer');
    const landElm = advancedInfoCard.querySelector('#advInfo-land');
    const botidElm = advancedInfoCard.querySelector('#advInfo-botid');

    // økonomiske forhold
    const bankkontoElm = advancedInfoCard.querySelector('#advInfo-bankkonto');
    const kredittkortElm = advancedInfoCard.querySelector('#advInfo-kredittkort');
    const lanElm = advancedInfoCard.querySelector('#advInfo-lan')
    const datafullMaktElm = advancedInfoCard.querySelector('#advInfo-datafullmakt');

    // livssituasjon
    const alvorligSykElm = advancedInfoCard.querySelector('#advInfo-alvorligsyk');
    const flyktningElm = advancedInfoCard.querySelector('#advInfo-flyktning');
    const gravidElm = advancedInfoCard.querySelector('#advInfo-gravid');

    // NAV
    const medlemElm = advancedInfoCard.querySelector('#advInfo-medlem');
    const uforElm = advancedInfoCard.querySelector('#advInfo-ufor');
    const pensjonistElm = advancedInfoCard.querySelector('#advInfo-pensjonist');
    const yrkesskadeElm = advancedInfoCard.querySelector('#advInfo-yrkesskade');
    const dagpengerElm = advancedInfoCard.querySelector('#advInfo-dagpenger');
    const sykepengerElm = advancedInfoCard.querySelector('#advInfo-sykepenger');

    // lånekassen
    const stipendElm = advancedInfoCard.querySelector('#advInfo-stipend');
    const studiestedElm = advancedInfoCard.querySelector('#advInfo-studiested');

    // arbeidsforhold
    const freelancerElm = advancedInfoCard.querySelector('#advInfo-freelancer');
    const arbforholdstatusElm = advancedInfoCard.querySelector('#advInfo-arbforholdstatus');
    const sektorElm = advancedInfoCard.querySelector('#advInfo-sektor');
    const arbtidforrigemanedElm = advancedInfoCard.querySelector('#advInfo-arbtidforrigemaned');
    const arbtiddennemanedElm = advancedInfoCard.querySelector('#advInfo-arbtiddennemaned');

    // inntekt fortid
    const inntekt2019Elm = advancedInfoCard.querySelector('#advInfo-inntekt2019');
    const inntekt2020Elm = advancedInfoCard.querySelector('#advInfo-inntekt2020');
    const inntekt2021Elm = advancedInfoCard.querySelector('#advInfo-inntekt2021');

    // inntekt nåtid
    const inntekt1Elm = advancedInfoCard.querySelector('#advInfo-inntekt1');
    const inntekt2Elm = advancedInfoCard.querySelector('#advInfo-inntekt2');
    const inntekt3Elm = advancedInfoCard.querySelector('#advInfo-inntekt3');
    const inntekt4Elm = advancedInfoCard.querySelector('#advInfo-inntekt4');
    const inntekt5Elm = advancedInfoCard.querySelector('#advInfo-inntekt5');
    const inntekt6Elm = advancedInfoCard.querySelector('#advInfo-inntekt6');
    const inntekt7Elm = advancedInfoCard.querySelector('#advInfo-inntekt7');
    const inntekt8Elm = advancedInfoCard.querySelector('#advInfo-inntekt8');

    // Prevent further scrolling
    body.classList.toggle("noScroll");

    // fetch data
    db.collection('brukere').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            // fetch correct document
            if (doc.id === id) {
                const data = doc.data();

                // load data -- grunnleggende data
                fornavnHeadElm.textContent = data.fornavn;
                etternavnHeadElm.textContent = data.etternavn;
                idHeadElm.textContent = id;

                fornavnElm.textContent = data.fornavn;
                etternavnElm.textContent = data.etternavn;
                fodselsdatoElm.textContent = data.fodselsdato;
                alderElm.textContent = data.alder;
                livsstatusElm.textContent = data.status;
                endringStatusElm.textContent = data.endringStatus;
                ekteskapElm.textContent = data.ekteskap;
                ektefelleElm.textContent = data.ektefelle;
                forelder1Elm.textContent = data.foreldre[0];
                forelder2Elm.textContent = data.foreldre[1];
                barnElm.textContent = data.barn;
                postnummerElm.textContent = data.postnummer;
                landElm.textContent  = data.land;
                botidElm.textContent = data.botid;

                // økonomiske forhold
                bankkontoElm.textContent = data.avansertInfo[0].bankkonto;
                kredittkortElm.textContent = data.avansertInfo[0].kredittkort;
                lanElm.textContent = data.avansertInfo[0].lan;
                datafullMaktElm.textContent = data.avansertInfo[0].fullmakt;

                // livssituasjon
                alvorligSykElm.textContent = data.avansertInfo[0].alvorligSyk;
                flyktningElm.textContent = data.avansertInfo[0].flyktning;
                gravidElm.textContent = data.avansertInfo[0].gravid;

                // nav
                medlemElm.textContent = data.avansertInfo[0].medlem;
                uforElm.textContent = data.avansertInfo[0].ufor;
                pensjonistElm.textContent = data.avansertInfo[0].pensjonist;
                yrkesskadeElm.textContent = data.avansertInfo[0].yrkesskade;
                dagpengerElm.textContent = data.avansertInfo[0].dagpenger;
                sykepengerElm.textContent = data.avansertInfo[0].sykepenger;

                // lånekassen
                stipendElm.textContent = data.avansertInfo[0].stipend;
                studiestedElm.textContent = data.avansertInfo[0].studiested;

                // arbeidsforhold
                freelancerElm.textContent = data.avansertInfo[0].freelancer;
                arbforholdstatusElm.textContent = data.avansertInfo[0].forholdStatus;
                sektorElm.textContent = data.avansertInfo[0].sektor;
                arbtidforrigemanedElm.textContent = data.avansertInfo[0].forrigeManed;
                arbtiddennemanedElm.textContent = data.avansertInfo[0].denneManed;

                // inntekt fortid
                inntekt2019Elm.textContent = data.avansertInfo[0].inntekt2019;
                inntekt2020Elm.textContent = data.avansertInfo[0].inntekt2020;
                inntekt2021Elm.textContent = data.avansertInfo[0].inntekt2021;

                // inntekt nåtid
                inntekt1Elm.textContent = data.avansertInfo[0].inntekt1;
                inntekt2Elm.textContent = data.avansertInfo[0].inntekt2;
                inntekt3Elm.textContent = data.avansertInfo[0].inntekt3;
                inntekt4Elm.textContent = data.avansertInfo[0].inntekt4;
                inntekt5Elm.textContent = data.avansertInfo[0].inntekt5;
                inntekt6Elm.textContent = data.avansertInfo[0].inntekt6;
                inntekt7Elm.textContent = data.avansertInfo[0].inntekt7;
                inntekt8Elm.textContent = data.avansertInfo[0].inntekt8;
            }
        });
    });
    advInfoCheck = true;
    //console.log(advInfoCheck);
}

// HTML-injection
const genTemplate = function(obj, id) {
    let status = 'Lever';
    if (obj.status == 0) {
        status = 'Død'
    }

    const template = `
        <div class="userCardContainer" id="${id}">
            <h5 class="cardNameHeader" id="${id}">${id} - ${obj.fornavn} ${obj.etternavn}</h5>
            <ul class="cardInfoList" id="${id}">
                <li class="cardInfoListElement" id="${id}">Alder: ${obj.alder}</li>
                <li class="cardInfoListElement" id="${id}">Livsstatus: ${status}</li>
                <li class="cardInfoListElement" id="${id}">Postnummer: ${obj.postnummer}</li>
            </ul>
        </div>
    `;
    infoDisplay.innerHTML += template;
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
        });
        dataArr.sort((a, b) => a.id - b.id);
        dataArr.forEach(dat => {
            genTemplate(dat, dat.id); // Displays an info card of the data
        });
    }).catch(err => console.error(err));
}

// event listeners
infoDisplay.addEventListener('click', e => {
    if (e.target.getAttribute('class') === 'userCardContainer'){
        openAdvancedInfo(e.target.getAttribute('id'));
    }else if(e.target.parentElement.getAttribute('class') === 'userCardContainer'){
        openAdvancedInfo(e.target.getAttribute('id'));
    }else if(e.target.parentElement.parentElement.getAttribute('class') === 'userCardContainer'){
        openAdvancedInfo(e.target.getAttribute('id'));
    }
});

// eventlistener for toggling user information inside advanced info cards
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

advancedInfoCardContainer.addEventListener('click', e => {
    //console.log(e.target);
    if (e.target == advancedInfoCardContainer){
        closeAdvancedInfo();
    }
});

window.addEventListener('keydown', e => {
    //console.log(e.key);
    if(e.key == 'Escape' && advInfoCheck == true){
        //console.log(e.key);
        closeAdvancedInfo();
    }
})

// kall funksjoner
getDocs();