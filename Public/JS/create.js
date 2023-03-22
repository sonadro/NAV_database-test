const db = firebase.firestore();

async function register() {
    const adminRef = db.collection("adminCol");
    let email = document.getElementById("emailField").value.toLowerCase();
    let username = document.getElementById("usernameField").value
    let password = document.getElementById("passwordField").value
    let confirm = document.getElementById("confirmField").value
    let confirmWarning = document.getElementById("confirmWarning")
    
    console.log(email);

    confirmWarning.innerText = (password != confirm) ? "Your confirmation does not match!" : "";

    if ((password == confirm)){

        let query = await adminRef.where("email", "==", email).get();
        let query2 = await adminRef.where("username", "==", username).get();


        console.log(query.empty);
        console.log(query2.empty);
        // console.log(query2);

        if (query.empty && query2.empty) {

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
                email: email.toLowerCase(),
                username: username,
                usernameLowerCase: username.toLowerCase(),
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
        else {
            console.log("duplicate credentials detected!");
          }  


      }
}