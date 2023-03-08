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
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.etternavn.addEventListener('input', e => {
    let element = grunnleggendeDataForm.etternavn
    let name = element.value;
    let nameRegex = /^.[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.forelder1.addEventListener('input', e => {
    let element = grunnleggendeDataForm.forelder1
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.forelder2.addEventListener('input', e => {
    let element = grunnleggendeDataForm.forelder2
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.barn.addEventListener('input', e => {
    let element = grunnleggendeDataForm.barn
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})


grunnleggendeDataForm.land.addEventListener('input', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    for(i = 0; i < landArray.length; i++){
        grunnleggendeDataForm.postnummer.value = "";
        if(nameRegex.test(name) == true && landArray[i].navn == name){
            selectedLand = landArray[i];
            element.classList.remove("ugyldig")
            grunnleggendeDataForm.postnummer.removeAttribute('disabled');
            break;
        }else{
            selectedLand = undefined;
            element.classList.add("ugyldig");
            grunnleggendeDataForm.postnummer.setAttribute('disabled', true);
        }
    }
    getNewInvalids();
})

grunnleggendeDataForm.postnummer.addEventListener('input', e => {
    let element = grunnleggendeDataForm.postnummer
    let num = element.value;
    let temp = `^${selectedLand.post}$`;
    let nameRegex = new RegExp(`${temp}`);// /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.land.addEventListener('input', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.botid.addEventListener('input', e => {
    let element = grunnleggendeDataForm.botid
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})  

//Økonomiske forhold

økonomiskeForholdForm.bankkonto.addEventListener('input', e => {
    let element = økonomiskeForholdForm.bankkonto
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

økonomiskeForholdForm.kredittkort.addEventListener('input', e => {
    let element = økonomiskeForholdForm.kredittkort
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

økonomiskeForholdForm.lan.addEventListener('input', e => {
    let element = økonomiskeForholdForm.lan
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

økonomiskeForholdForm.fullmakt.addEventListener('input', e => {
    let element = økonomiskeForholdForm.fullmakt
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//NAV

NAVForm.sykepenger.addEventListener('input', e => {
    let element = NAVForm.sykepenger
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//Arbeidsforhold

arbeidsForholdForm.forrigeManed.addEventListener('input', e => {
    let element = arbeidsForholdForm.forrigeManed
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

arbeidsForholdForm.denneManed.addEventListener('input', e => {
    let element = arbeidsForholdForm.denneManed
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//Inntekt fortid

inntektFortidForm.inntekt2019.addEventListener('input', e => {
    let element = inntektFortidForm.inntekt2019
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntektFortidForm.inntekt2020.addEventListener('input', e => {
    let element = inntektFortidForm.inntekt2020
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){ 
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntektFortidForm.inntekt2021.addEventListener('input', e => {
    let element = inntektFortidForm.inntekt2021
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//Inntekt 2022

inntekt2022Form.inntekt1.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt1
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt2.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt2
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt3.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt3
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt4.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt4
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt5.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt5
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt6.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt6
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt7.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt7
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt8.addEventListener('input', e => {
    let element = inntekt2022Form.inntekt8
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//-------------------------------------------Forms regex onfocusout listeners-------------------------------------------

//Grunnleggende data

grunnleggendeDataForm.fornavn.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.fornavn
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.etternavn.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.etternavn
    let name = element.value;
    let nameRegex = /^.[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.forelder1.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.forelder1
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.forelder2.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.forelder2
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.barn.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.barn
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})


grunnleggendeDataForm.land.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    for(i = 0; i < landArray.length; i++){
        grunnleggendeDataForm.postnummer.value = "";
        if(nameRegex.test(name) == true && landArray[i].navn == name){
            selectedLand = landArray[i];
            element.classList.remove("ugyldig")
            grunnleggendeDataForm.postnummer.removeAttribute('disabled');
            break;
        }else{
            selectedLand = undefined;
            element.classList.add("ugyldig");
            grunnleggendeDataForm.postnummer.setAttribute('disabled', true);
        }
    }
    getNewInvalids();
})

grunnleggendeDataForm.postnummer.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.postnummer
    let num = element.value;
    let temp = `^${selectedLand.post}$`;
    let nameRegex = new RegExp(`${temp}`);// /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.land.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.land
    let name = element.value;
    let nameRegex = /^[a-zæøåÆØÅ ]{2,}$/i;
    if(nameRegex.test(name) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

grunnleggendeDataForm.botid.addEventListener('focusout', e => {
    let element = grunnleggendeDataForm.botid
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})  

//Økonomiske forhold

økonomiskeForholdForm.bankkonto.addEventListener('focusout', e => {
    let element = økonomiskeForholdForm.bankkonto
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

økonomiskeForholdForm.kredittkort.addEventListener('focusout', e => {
    let element = økonomiskeForholdForm.kredittkort
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

økonomiskeForholdForm.lan.addEventListener('focusout', e => {
    let element = økonomiskeForholdForm.lan
    let num = element.value;
    let nameRegex = /^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

økonomiskeForholdForm.fullmakt.addEventListener('focusout', e => {
    let element = økonomiskeForholdForm.fullmakt
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//NAV

NAVForm.sykepenger.addEventListener('focusout', e => {
    let element = NAVForm.sykepenger
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//Arbeidsforhold

arbeidsForholdForm.forrigeManed.addEventListener('focusout', e => {
    let element = arbeidsForholdForm.forrigeManed
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

arbeidsForholdForm.denneManed.addEventListener('focusout', e => {
    let element = arbeidsForholdForm.denneManed
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//Inntekt fortid

inntektFortidForm.inntekt2019.addEventListener('focusout', e => {
    let element = inntektFortidForm.inntekt2019
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntektFortidForm.inntekt2020.addEventListener('focusout', e => {
    let element = inntektFortidForm.inntekt2020
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){ 
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntektFortidForm.inntekt2021.addEventListener('focusout', e => {
    let element = inntektFortidForm.inntekt2021
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//Inntekt 2022

inntekt2022Form.inntekt1.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt1
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt2.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt2
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt3.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt3
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt4.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt4
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt5.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt5
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt6.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt6
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt7.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt7
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

inntekt2022Form.inntekt8.addEventListener('focusout', e => {
    let element = inntekt2022Form.inntekt8
    let num = element.value;
    let nameRegex =/^[0-9]+$/;
    if(nameRegex.test(num) == true){
        element.classList.remove("ugyldig")
    }else{
        element.classList.add("ugyldig");
    }
    getNewInvalids();
})

//-------------------------------------------Forms dropdown listeners-------------------------------------------

let dropDowns = Array.from(document.querySelectorAll("form select"));
//let func = getNewInvalids();

['input', 'blur'].forEach(event => {
    dropDowns.forEach(dropdown => {
        console.log(dropdown);
        dropdown.addEventListener(event, (e) => {
            if(dropdown.value === "default"){
                console.log("Invalid field detected");
                dropdown.classList.add("ugyldig");
            }else{
                dropdown.classList.remove("ugyldig");
            }
            getNewInvalids();
        });
    })
})


// grunnleggendeDataForm.status.addEventListener('input', e => {
//     getNewInvalids();
// })

// grunnleggendeDataForm.ekteskap.addEventListener('input', e => {
//     getNewInvalids();
// })

// livssituasjonForm.alvorligSyk.addEventListener('input', e => {
//     getNewInvalids();
// })

// livssituasjonForm.flyktning.addEventListener('input', e => {
//     getNewInvalids();
// })

// livssituasjonForm.gravid.addEventListener('input', e => {
//     getNewInvalids();
// })

// NAVForm.medlem.addEventListener('input', e => {
//     getNewInvalids();
// })

// NAVForm.ufor.addEventListener('input', e => {
//     getNewInvalids();
// })

// NAVForm.pensjonist.addEventListener('input', e => {
//     getNewInvalids();
// })

// NAVForm.yrkesskade.addEventListener('input', e => {
//     getNewInvalids();
// })

// NAVForm.dagpenger.addEventListener('input', e => {
//     getNewInvalids();
// })

// lånekassenForm.stipend.addEventListener('input', e => {
//     getNewInvalids();
// })

// lånekassenForm.studiested.addEventListener('input', e => {
//     getNewInvalids();
// })

// arbeidsForholdForm.freelancer.addEventListener('input', e => {
//     getNewInvalids();
// })

// arbeidsForholdForm.forholdStatus.addEventListener('input', e => {
//     getNewInvalids();
// })

// arbeidsForholdForm.sektor.addEventListener('input', e => {
//     getNewInvalids();
// })
