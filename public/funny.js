//const trollAPI = "https://api.ipify.org?format=json";
const trollAPI = "https://www.myexternalip.com/json";
const funnyAPI = "https://api.seeip.org/geoip/"; // append ip in the back or not
const text1 = document.getElementById("text-1");
const text2 = document.getElementById("text-2");

const gifs = ["kIwODyCeXggAAAAd/walter-white-dancing.gif", "8RrVeCAWBoAAAAAd/neco-arc.gif", "4qhOc902pqIAAAAd/sonic-there-is-a-pipe-bomb-in-your-mailbox.gif"
, "PDEtQQy6P-MAAAAd/breaking-bad-portraits.gif", "Di28Vu8t80UAAAAd/touhou-touhouproject.gif", "L-8bvnEgNUsAAAAC/supblox-roblox.gif", "oHkLlh4X0cwAAAAd/suit-slideshow-man-in-suit-sitting.gif"];

let n = Math.round(Math.random() * (5-1)) + 1;
let ran = n.toString() + ".mp3";
let music = new Audio(ran);
music.play();

fetch(trollAPI)
.then((response) => { if (response.status === 200) { return response.json(); } return response.status; })
    .then((result) => {
        let turi = result.ip;
        // funnyAPI = funnyAPI + turi;

        fetch(document.URL + turi, {method:"GET"}).then((res) => {if (res.status === 200){return res.json();} return res.status; })
            .then((result) => {
                text1.style.scale = 0;
                text1.style.opacity = 0;
                let i = 0;
                for(let key in result){
                    if (key.includes("offset") || key.includes("asn") || (key.includes("code") && (key.includes("region") || key.includes("country")))) { continue; }
                    let shit = document.createElement("p");
                    shit.innerText = key + ": " + result[key];

                    shit.style.opacity = 0;
                    shit.style.scale = 2;
                    text2.appendChild(shit);
                    i++;

                    setTimeout(()=>{
                        shit.style.opacity = 1;
                        shit.style.scale = 1;
                    }, 800 * i);
                }

                let gif = document.createElement("img");
                gif.src = "https://media.tenor.com/" + gifs[Math.round(Math.random() * (gifs.length - 1))];
                gif.style.opacity = 0;
                gif.style.position = "absolute";
                gif.style.zIndex = "-1";
                gif.style.transition = "all 3s ease";
                document.body.insertBefore(gif, document.body.children[0]);
                setTimeout(()=>{
                    gif.style.opacity = 0.3;
                }, 600 * i);
            })
            .catch((r) => {console.log(r);})
        .catch((r) => {text1.innerText = turi;})
    })
    .catch((result) => { console.log(result); })
.catch((response_status) => { console.log(response_status); })


// if (navigator.geolocation){
//     navigator.geolocation.getCurrentPosition((position) => {
//         const coords = position.coords;
//         const latitude = coords.latitude;
//         const longitude = coords.longitude;
// 
//     })
// }

//fetch(funnyAPI).then((response) => { if (response.status == 200) { return response.json(); } return response.status; })
//    .then((result) => {
//        const funny = result;
//        for (let key in funny) {
//            console.log(key, funny[key]);
//        }
//    })
//    .catch((result) => { console.log(result); })
//.catch((response_status) => { console.log(response_status); })