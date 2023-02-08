const db = firebase.firestore();

async function sendResetPass() {
    let email = document.getElementById("emailField").value
    let status = document.getElementById("statusMessage")

        const now = new Date();

        const res = await fetch("http://localhost/sendResetPass",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                parcel: {
                email
                }
            })
        })
        const data = await res.json()

        console.log(data);

        if (data.error) {
        status.innerText = data.error
        }
        else if (data.message) {
        status.innerText = data.message
        }

}