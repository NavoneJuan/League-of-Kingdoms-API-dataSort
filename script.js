
function makeKingdomCard(data){
    const res = `<div class= "card">
                    <h4>(C${data.continent}) | ${data.name}: ${data.total}</h4>
                </div>`
    return res;
}
async function lokFormRequest(event){
    event.preventDefault();

    const landId = document.querySelector("#landId").value;
    const startDate = document.querySelector("#startDate").value;
    const endDate = document.querySelector("#endDate").value;

    const URL = `https://api-lok-live.leagueofkingdoms.com/api/stat/land/contribution?from=${startDate}&to=${endDate}&landId=${landId}`
    console.log(URL);

    const settings = {
        method : "GET"
    };

    const response = await fetch(URL, settings);
    const contributeData = await response.json();

    const resultsDiv = document.querySelector(".results");
    resultsDiv.innerHTML = "";

    for(let i = 0; i<contributeData.contribution.length; i++){
        const currContributor = contributeData.contribution[i];
        console.log(currContributor);
        resultsDiv.innerHTML += makeKingdomCard(currContributor);
    }     
}