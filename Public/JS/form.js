const db = firebase.firestore();

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

const bankkonto = document.getElementById("bankkonto")
const kredittkort = document.getElementById("kredittkort")
const lan = document.getElementById("lan")
const fullmakt = document.getElementById("fullmakt")

const alvorligSyk = document.getElementById("alvorligSyk")
const flyktning = document.getElementById("flyktning")
const gravid = document.getElementById("gravid")

const medlem = document.getElementById("medlem")
const ufor = document.getElementById("ufor")
const pensjonist = document.getElementById("pensjonist")
const yrkesskade = document.getElementById("yrkesskade")
const dagpenger = document.getElementById("dagpenger")
const sykepenger = document.getElementById("sykepenger")

const stipend = document.getElementById("stipend")
const studiested = document.getElementById("studiested")

const freelancer = document.getElementById("freelancer")
const forholdStatus = document.getElementById("forholdStatus")
const sektor = document.getElementById("sektor")
const forrigeManed = document.getElementById("forrigeManed")
const denneManed = document.getElementById("denneManed")

const inntekt2019 = document.getElementById("inntekt2019")
const inntekt2020 = document.getElementById("inntekt2020")
const inntekt2021 = document.getElementById("inntekt2021")

const inntekt1 = document.getElementById("inntekt1")
const inntekt2 = document.getElementById("inntekt2")
const inntekt3 = document.getElementById("inntekt3")
const inntekt4 = document.getElementById("inntekt4")
const inntekt5 = document.getElementById("inntekt5")
const inntekt6 = document.getElementById("inntekt6")
const inntekt7 = document.getElementById("inntekt7")
const inntekt8 = document.getElementById("inntekt8")





let fields = [fornavn, etternavn, fodselsdato, livsstatus, endringStatus, ekteskap, ektefelle, forelder1, forelder2]
console.log(fields);


function grabIdInfo() {
    let id = document.getElementById("testInput").value
    console.log(id);
    var docRef = db.collection("brukere")
    
    docRef.doc(id).get().then((doc) => {
        // Document was found in the cache. If no cached document exists,
        // an error will be returned to the 'catch' block below.
        console.table(doc.data());
        console.log(doc.data().fornavn);

        fornavn.value = doc.data().fornavn
        etternavn.value = doc.data().etternavn

        splitResult = doc.data().fodselsdato.split(".")
        console.log(splitResult);
        let dob = `${splitResult[2]}-${splitResult[1]}-${splitResult[0]}`
        fodselsdato.value = dob

        livsstatus.value = doc.data().status
        endringStatus.value = doc.data().endringStatus
        ekteskap.value = doc.data().ekteskap
        ektefelle.value = doc.data().ektefelle
        forelder1.value = doc.data().foreldre[0]
        forelder2.value = doc.data().foreldre[1]
        barn.value = doc.data().barn
        land.value = doc.data().land
        botid.value = doc.data().botid

        bankkonto.value = doc.data().avansertInfo[0].bankkonto
        kredittkort.value = doc.data().avansertInfo[0].kredittkort
        lan.value = doc.data().avansertInfo[0].lan
        fullmakt.value = doc.data().avansertInfo[0].fullmakt

        alvorligSyk.value = doc.data().avansertInfo[1].alvorligSyk
        flyktning.value = doc.data().avansertInfo[1].flyktning
        gravid.value = doc.data().avansertInfo[1].gravid

        medlem.value = doc.data().avansertInfo[2].medlem
        ufor.value = doc.data().avansertInfo[2].ufor
        pensjonist.value = doc.data().avansertInfo[2].pensjonist
        yrkesskade.value = doc.data().avansertInfo[2].yrkesskade
        dagpenger.value = doc.data().avansertInfo[2].dagpenger
        sykepenger.value = doc.data().avansertInfo[2].sykepenger

        stipend.value = doc.data().avansertInfo[3].stipend
        studiested.value = doc.data().avansertInfo[3].studiested

        freelancer.value = doc.data().avansertInfo[4].freelancer
        forholdStatus.value = doc.data().avansertInfo[4].forholdStatus
        sektor.value = doc.data().avansertInfo[4].sektor
        forrigeManed.value = doc.data().avansertInfo[4].forrigeManed
        denneManed.value = doc.data().avansertInfo[4].denneManed

        inntekt2019.value = doc.data().avansertInfo[5].inntekt2019
        inntekt2020.value = doc.data().avansertInfo[5].inntekt2020
        inntekt2021.value = doc.data().avansertInfo[5].inntekt2021

        inntekt1.value = doc.data().avansertInfo[6].inntekt1
        inntekt2.value = doc.data().avansertInfo[6].inntekt2
        inntekt3.value = doc.data().avansertInfo[6].inntekt3
        inntekt4.value = doc.data().avansertInfo[6].inntekt4
        inntekt5.value = doc.data().avansertInfo[6].inntekt5
        inntekt6.value = doc.data().avansertInfo[6].inntekt6
        inntekt7.value = doc.data().avansertInfo[6].inntekt7
        inntekt8.value = doc.data().avansertInfo[6].inntekt8


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