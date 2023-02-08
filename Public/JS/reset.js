const db = firebase.firestore();

async function resetPass() {
    let password = document.getElementById("newPassField").value
    let confirm = document.getElementById("newConfirmPassField").value
    let status = document.getElementById("statusMessage")
    let url = window.location.search;
    let args = url.slice(1).split("&");
    let email = args[0].slice(6);
    let token = args[1].slice(6);

    console.log(args);
    console.log(email);
    console.log(token);

    if (password == confirm) {

    const res = await fetch("http://localhost/resetPass",
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            parcel: {
            email, token, password
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
        setTimeout(() => {
            window.location = "http://localhost/";
        }, "3000")
    }

    }

}