const db = firebase.firestore();

async function register() {
    let email = document.getElementById("emailField").value
    let username = document.getElementById("usernameField").value
    let password = document.getElementById("passwordField").value
    let confirm = document.getElementById("confirmField").value
    let confirmWarning = document.getElementById("confirmWarning")

    confirmWarning.innerText = (password != confirm) ? "Your confirmation does not match!" : "";

    if ((password == confirm)){

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
        
        
            db.collection("adminCol").add(details).then(() => {
              console.log("User Added!");
            }).catch(err => {
              console.log(err)
            });

      }
}