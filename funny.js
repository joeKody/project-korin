//const trollAPI = "https://api.ipify.org?format=json";
const trollAPI = "https://www.myexternalip.com/json";
const text1 = document.getElementById("text-1");

fetch(trollAPI)
.then((response) => { if (response.status === 200) { return response.json(); } return response.status; })
    .then((result) => {
        let turi = result.ip;
        text1.innerText = turi;
    })
    .catch((result) => { console.log(result); })
.catch((response_status) => { console.log(response_status); })