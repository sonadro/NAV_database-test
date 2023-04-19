const db = firebase.firestore(); // Databasen vår

// deklarasjoner
const sampleContainer = document.querySelector("div.sampleContain");

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
        console.log(dataArr);
        // Filtrer array slik at det bare blir 6 personer
    }).then(() => {
        for(i=0; i < 6; i++){
            let selectedPerson = Math.floor(Math.random() * dataArr.length);
            console.log(dataArr[selectedPerson]);
            filterArr.push(dataArr[selectedPerson]);
        }
    }).then(() => {
        filterArr.forEach(dat => {
            genSample(dat, dat.id); // Lag en samplebox med dataen
        });
    }).catch(err => console.error(err));
}

getDocs();