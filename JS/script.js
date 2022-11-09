const db = firebase.firestore();

const addDoc = function() {
    const obj = {
        boolField: true,
        numField: 10,
        textField: 'texters'
    }
    db.collection('testCollection').add(obj).then(() => {
        console.log('object added', obj);
    }).catch(err => console.error(err));
}

const getDocs = function() {
    db.collection('testCollection').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            const data = doc.data();
            console.log(data);
        });
    }).catch(err => console.error(err));
}