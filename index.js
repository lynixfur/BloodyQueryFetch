import fetch from 'node-fetch';

async function GetPlayers() {
    const url = "https://api.bloody-ark.com/servers/query";

    console.log("Asked servers for new information");

    try {
        const response = await fetch(url);
        console.log(response);
        console.log("Success!");
    } catch (error) {
        console.log("Error!");
    }
}

GetPlayers();
setInterval(GetPlayers, 5000);