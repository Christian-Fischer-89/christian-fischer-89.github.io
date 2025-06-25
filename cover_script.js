async function processGTINs() {
    const EAN = document.getElementById("gtinInput").value;
    const ApiFetch = await fetch(`https://corsproxy.io/?${encodeURIComponent(`https://artikelservice.prod.ecom.thalia.de/api/rest/2/artikel/v4/${EAN}`)}`, {
            headers: {
                Accept: "application/json"
            }
        });
    const Api = await ApiFetch.json();
    console.log(Api[0].titel);
}