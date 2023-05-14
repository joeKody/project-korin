const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, (e)=>{
    if (e) {console.log(e);}
    console.log(`I'm on it! Listening on port ${PORT}`);
});

app.get('/:ip', (req, res) => {
    const turi = req.params.ip;
    const funnyAPI = "https://api.seeip.org/geoip/" + turi;

    fetch(funnyAPI).then((response) => { if (response.status == 200) { return response.json(); } return response.status; })
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((result) => { console.log(result); })
    .catch((response_status) => { console.log(response_status); })
})
