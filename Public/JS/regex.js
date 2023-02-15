//Last inn land-databasen
let landArray = [];
let selectedLand;
db.collection("land").get().then(snapshot => {
    snapshot.docs.forEach((doc) => {
        let land = {
            navn: doc.data().navn,
            post: doc.data().postRegex
        }
        landArray.push(land);
    })
    console.log(landArray);
})

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
    let nameRegex = /^[0-9]+$/;
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
    let nameRegex = /^[0-9]+$/;
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
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig barn");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig barn");
        element.classList.add("ugyldig");
    }
})


grunnleggendeDataForm.land.addEventListener('input', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    console.log(name);
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    for(i = 0; i < landArray.length; i++){
        grunnleggendeDataForm.postnummer.value = "";
        if(nameRegex.test(name) == true && landArray[i].navn == name){
            console.log("Gyldig land");
            selectedLand = landArray[i];
            element.classList.remove("ugyldig")
            grunnleggendeDataForm.postnummer.removeAttribute('disabled');
            break;
        }else{
            console.log("Ugyldig land");
            selectedLand = undefined;
            element.classList.add("ugyldig");
            grunnleggendeDataForm.postnummer.setAttribute('disabled', true);
        }
    }
})

grunnleggendeDataForm.postnummer.addEventListener('input', e => {
    let element = grunnleggendeDataForm.postnummer
    let num = element.value;
    console.log(num);
    let temp = `^${selectedLand.post}$`;
    console.log(temp);
    let nameRegex = new RegExp(`${temp}`);// /^[0-9]+$/;
    console.log(typeof nameRegex, nameRegex)
    if(nameRegex.test(num) == true){
        console.log("Gyldig postnummer");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig postnummer");
        element.classList.add("ugyldig");
    }
})

grunnleggendeDataForm.botid.addEventListener('input', e => {
    let element = grunnleggendeDataForm.botid
    let num = element.value;
    console.log(num);
    let nameRegex = /^[0-9]+$/;
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
    let nameRegex = /^[0-9]+$/;
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
    let nameRegex = /^[0-9]+$/;
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
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig fullmakt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig fullmakt");
        element.classList.add("ugyldig");
    }
})

//NAV

NAVForm.sykepenger.addEventListener('input', e => {
    let element = NAVForm.sykepenger
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig sykepengeverdi");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig sykepengeverdi");
        element.classList.add("ugyldig");
    }
})

//Arbeidsforhold

arbeidsForholdForm.forrigeManed.addEventListener('input', e => {
    let element = arbeidsForholdForm.forrigeManed
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig arbeidstid");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig arbeidstid");
        element.classList.add("ugyldig");
    }
})

arbeidsForholdForm.denneManed.addEventListener('input', e => {
    let element = arbeidsForholdForm.denneManed
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig arbeidstid");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig arbeidstid");
        element.classList.add("ugyldig");
    }
})

//Inntekt fortid

inntektFortidForm.inntekt2019.addEventListener('input', e => {
    let element = inntektFortidForm.inntekt2019
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

inntektFortidForm.inntekt2020.addEventListener('input', e => {
    let element = inntektFortidForm.inntekt2020
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

inntektFortidForm.inntekt2021.addEventListener('input', e => {
    let element = inntektFortidForm.inntekt2021
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

//Inntekt 2022

inntekt2022Form.inntekt1.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt1
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

inntekt2022Form.inntekt2.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt2
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

inntekt2022Form.inntekt3.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt3
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

inntekt2022Form.inntekt4.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt4
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

inntekt2022Form.inntekt5.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt5
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

inntekt2022Form.inntekt6.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt6
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

inntekt2022Form.inntekt7.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt7
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})

inntekt2022Form.inntekt8.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt8
    let num = element.value;
    console.log(num);
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        console.log("Gyldig inntekt");
        element.classList.remove("ugyldig")
    }else{
        console.log("Ugyldig inntekt");
        element.classList.add("ugyldig");
    }
})