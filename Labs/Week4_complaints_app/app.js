

// const policeData = async () => {
//     let response =  await fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
//     let policeInfo = await response.json()
//     for(i = 0; i < 5; i++);
//     console.log(policeInfo);
// }

// fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
// .then(response => response.json())
// .then(json => {
//     let bigData = json
// console.log(bigData);
// })

const getBorough = (borough) => {
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough}`)
    .then(response => response.json())
    .then(json => {
        //Getting input for number of requested items/compaints
        let resultsRequested = document.getElementById("complaintsNumber").value;
        if (!resultsRequested) {
            resultsRequested = 10;
        }
        //Grabbing borough data, and then slicing from 0 to resultsRequested
        let boroughData = json
            boroughData = boroughData.slice(0, resultsRequested)

        //If there is an ol on the page, then remove it
        let currentList = document.getElementById("boroughs");
        if (currentList) {
           console.log("removing list", currentList);
            currentList.remove();
        };

        //Where the ol is created and element ID is set
        let ol = document.createElement("ol");
        ol.setAttribute("id", "boroughs");
        ol.style.listStyleType = "none";

        //Adding the ol to the HTML body
        document.body.appendChild(ol);

        //Looping and adding data to an li tag for each item
        for (let i = 0; i < boroughData.length; i++) {
            let li = document.createElement("li");
            li.className = "borough";

            let p = document.createElement("p");
            p.innerHTML = boroughData[i].descriptor;
            
            //Adding the p tag to the li tag
            li.appendChild(p);

            //Adding li tag to the ol tag
            ol.appendChild(li);
        }
    console.log(boroughData.slice(0, resultsRequested));
    })
    
}


