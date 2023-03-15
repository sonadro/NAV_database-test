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
})

//-------------------------------------------Forms regex listeners-------------------------------------------

//Grunnleggende data

grunnleggendeDataForm.fornavn.addEventListener('input', e => {
    let element = grunnleggendeDataForm.fornavn
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig");
        element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.etternavn.addEventListener('input', e => {
    let element = grunnleggendeDataForm.etternavn
    let name = element.value;
    let nameRegex = /^.[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.forelder1.addEventListener('input', e => {
    let element = grunnleggendeDataForm.forelder1
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.forelder2.addEventListener('input', e => {
    let element = grunnleggendeDataForm.forelder2
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.barn.addEventListener('input', e => {
    let element = grunnleggendeDataForm.barn
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})


grunnleggendeDataForm.land.addEventListener('input', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    for(i = 0; i < landArray.length; i++){
        grunnleggendeDataForm.postnummer.value = "";
        if(nameRegex.test(name) == true && landArray[i].navn == name){
            selectedLand = landArray[i];
            element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
            grunnleggendeDataForm.postnummer.removeAttribute('disabled');
            break;
        }else{
            selectedLand = undefined;
            element.classList.add("ugyldig");
            grunnleggendeDataForm.postnummer.setAttribute('disabled', true);
        }
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.postnummer.addEventListener('input', e => {
    let element = grunnleggendeDataForm.postnummer
    let num = element.value;
    let temp = `^${selectedLand.post}$`;
    let nameRegex = new RegExp(`${temp}`);// /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.land.addEventListener('input', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.botid.addEventListener('input', e => {
    let element = grunnleggendeDataForm.botid
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})  

//Økonomiske forhold

økonomiskeForholdForm.bankkonto.addEventListener('input', e => {
    let element = økonomiskeForholdForm.bankkonto
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

økonomiskeForholdForm.kredittkort.addEventListener('input', e => {
    let element = økonomiskeForholdForm.kredittkort
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

økonomiskeForholdForm.lan.addEventListener('input', e => {
    let element = økonomiskeForholdForm.lan
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

økonomiskeForholdForm.fullmakt.addEventListener('input', e => {
    let element = økonomiskeForholdForm.fullmakt
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

//NAV

NAVForm.sykepenger.addEventListener('input', e => {
    let element = NAVForm.sykepenger
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

//Arbeidsforhold

arbeidsForholdForm.forrigeManed.addEventListener('input', e => {
    let element = arbeidsForholdForm.forrigeManed
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

arbeidsForholdForm.denneManed.addEventListener('input', e => {
    let element = arbeidsForholdForm.denneManed
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

//Inntekt fortid

inntektFortidForm.inntekt2019.addEventListener('input', e => {
    let element = inntektFortidForm.inntekt2019
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

inntektFortidForm.inntekt2020.addEventListener('input', e => {
    let element = inntektFortidForm.inntekt2020
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){ 
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

inntektFortidForm.inntekt2021.addEventListener('input', e => {
    let element = inntektFortidForm.inntekt2021
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

//Inntekt 2022

inntekt2022Form.inntekt1.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt1
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

inntekt2022Form.inntekt2.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt2
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

inntekt2022Form.inntekt3.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt3
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

inntekt2022Form.inntekt4.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt4
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

inntekt2022Form.inntekt5.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt5
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

inntekt2022Form.inntekt6.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt6
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidInputFields();
})

inntekt2022Form.inntekt7.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt7
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntekt2022Form.inntekt8.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt8
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

//-------------------------------------------Forms regex onfocusout listeners-------------------------------------------

//Grunnleggende data

grunnleggendeDataForm.fornavn.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.fornavn
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.etternavn.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.etternavn
    let name = element.value;
    let nameRegex = /^.[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.forelder1.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.forelder1
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.forelder2.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.forelder2
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.barn.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.barn
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})


grunnleggendeDataForm.land.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    for(i = 0; i < landArray.length; i++){
        grunnleggendeDataForm.postnummer.value = "";
        if(nameRegex.test(name) == true && landArray[i].navn == name){
            selectedLand = landArray[i];
            element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
            grunnleggendeDataForm.postnummer.removeAttribute('disabled');
            break;
        }else{
            selectedLand = undefined;
            element.classList.add("ugyldig");
            grunnleggendeDataForm.postnummer.setAttribute('disabled', true);
        }
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.postnummer.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.postnummer
    let num = element.value;
    let temp = `^${selectedLand.post}$`;
    let nameRegex = new RegExp(`${temp}`);// /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.land.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

grunnleggendeDataForm.botid.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.botid
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})  

//Økonomiske forhold

økonomiskeForholdForm.bankkonto.addEventListener('focusout', e => {
    let element = økonomiskeForholdForm.bankkonto
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

økonomiskeForholdForm.kredittkort.addEventListener('focusout', e => {
    let element = økonomiskeForholdForm.kredittkort
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

økonomiskeForholdForm.lan.addEventListener('focusout', e => {
    let element = økonomiskeForholdForm.lan
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

økonomiskeForholdForm.fullmakt.addEventListener('focusout', e => {
    let element = økonomiskeForholdForm.fullmakt
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

//NAV

NAVForm.sykepenger.addEventListener('focusout', e => {
    let element = NAVForm.sykepenger
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

//Arbeidsforhold

arbeidsForholdForm.forrigeManed.addEventListener('focusout', e => {
    let element = arbeidsForholdForm.forrigeManed
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

arbeidsForholdForm.denneManed.addEventListener('focusout', e => {
    let element = arbeidsForholdForm.denneManed
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

//Inntekt fortid

inntektFortidForm.inntekt2019.addEventListener('focusout', e => {
    let element = inntektFortidForm.inntekt2019
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntektFortidForm.inntekt2020.addEventListener('focusout', e => {
    let element = inntektFortidForm.inntekt2020
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){ 
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntektFortidForm.inntekt2021.addEventListener('focusout', e => {
    let element = inntektFortidForm.inntekt2021
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

//Inntekt 2022

inntekt2022Form.inntekt1.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt1
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntekt2022Form.inntekt2.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt2
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntekt2022Form.inntekt3.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt3
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntekt2022Form.inntekt4.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt4
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntekt2022Form.inntekt5.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt5
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntekt2022Form.inntekt6.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt6
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntekt2022Form.inntekt7.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt7
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

inntekt2022Form.inntekt8.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt8
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig");
element.classList.remove('popupHighlight');
    }else{
        element.classList.add("ugyldig");
    }
    popup.getNewInvalidFields();
})

//-------------------------------------------Forms dropdown listeners-------------------------------------------

let dropDowns = Array.from(document.querySelectorAll("form select"));
//let func = popup.getNewInvalidFields();

['input', 'blur'].forEach(event => {
    dropDowns.forEach(dropdown => {
        dropdown.addEventListener(event, (e) => {
            if(dropdown.value === "default"){
                console.log("Invalid field detected");
                dropdown.classList.add("ugyldig");
            }else{
                dropdown.classList.remove("ugyldig");
            }
            popup.getNewInvalidFields();
        });
    })
})


// grunnleggendeDataForm.status.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// grunnleggendeDataForm.ekteskap.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// livssituasjonForm.alvorligSyk.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// livssituasjonForm.flyktning.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// livssituasjonForm.gravid.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// NAVForm.medlem.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// NAVForm.ufor.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// NAVForm.pensjonist.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// NAVForm.yrkesskade.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// NAVForm.dagpenger.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// lånekassenForm.stipend.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// lånekassenForm.studiested.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// arbeidsForholdForm.freelancer.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// arbeidsForholdForm.forholdStatus.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })

// arbeidsForholdForm.sektor.addEventListener('input', e => {
//     popup.getNewInvalidFields();
// })
