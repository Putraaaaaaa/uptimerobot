const axios = require("axios")
const urls = ["https://moon5-sic-bp.glitch.me"]
const urls = ["https://the-moon-craft-bots--wako.glitch.me"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
