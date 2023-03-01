const db = firebase.firestore();


async function checkDuplicate(username, email) {
    var duplicate = 0;

    db.collection("adminCol").where("username", "==", username).get().then(async (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const userDetails = doc.data()
            duplicate += 1
            console.log(userDetails);
        });
    }).then(() => {
        console.log(duplicate);
        return duplicate;
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
    return duplicate;

    }

async function register() {
    let email = document.getElementById("emailField").value
    let username = document.getElementById("usernameField").value
    let password = document.getElementById("passwordField").value
    let confirm = document.getElementById("confirmField").value
    let confirmWarning = document.getElementById("confirmWarning")

    confirmWarning.innerText = (password != confirm) ? "Your confirmation does not match!" : "";

    if ((password == confirm)){

    await checkDuplicate(username, email)

        console.log("duplicate counter: "+duplicate);

        if (duplicate != 1) {

            const now = new Date();

            // console.log(encryptPassword(password));
    
            const res = await fetch("http://localhost/hashing",
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    parcel: {
                    password, email
                    }
                })
            })
            const data = await res.json()
    
            const details = {
                email: email,
                username: username,
                created_at: firebase.firestore.Timestamp.fromDate(now),
                password: data.pass
            };
    
            console.log(details);
            // console.log("duplicate counter: "+ await checkDuplicate());
            
            
                // db.collection("adminCol").add(details).then(() => {
                //   console.log("User Added!");
                // }).catch(err => {
                //   console.log(err)
                // });

        }
        else if (duplicate >= 1) {
            console.log("duplicate credentials detected!");
        }

      }
}