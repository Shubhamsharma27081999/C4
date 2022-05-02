// write js code here corresponding to matches.html
var matchArr = JSON.parse(localStorage.getItem("schedule"));
displayData(matchArr);

function displayData(data) {
    document.querySelector("tbody").innerHTML = "";

    data.forEach(function (elem) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText  = elem.matchNum;

        var td2 = document.createElement("td");
        td1.innerText  = elem.teamA;

        var td3 = document.createElement("td");
        td1.innerText  = elem.teamB;

        var td4 = document.createElement("td");
        td1.innerText  = elem.date;

        var td5 = document.createElement("td");
        td1.innerText  = elem.venue;

        var td6 = document.createElement("td");
        td6.innerText = "Favourites";
        td6.style.color = "green";
        td6.addEventlistner("click",function () {
            favouritesFunc(elem);
        });

        tr.append(td1,td2,td3,td4,td5,td6);

        document.querySelector("tbody").append(tr);
    });
}

function favouritesFunc(elem) {
    console.log(elem);
    favourites.push(elem);
    localStorage.setitem("favourites",JSON.stringify(favouritesArr));
}