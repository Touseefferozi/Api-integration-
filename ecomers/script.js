

// var ads = [

//     {

//         "title": "Ad 1",
//         "description": "What is your name",
//         "image": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//     },
//     {
//         "title": "Ad 2",
//         "description": "What is your name",
//         "image": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//     },
//     {
//         "title": "Ad 3",
//         "description": "What is your name",
//         "image": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//     },


// ]

const API_key ="AIzaSyALAEEHEZya5Tbp4HpqKb5sppbG515a3Ic";
const Sheet_Id = `1j5ByajX-TA0z3_BcXfN9mt6CruYyxUpN7c5aaBUd-XY`



var api = ` https://sheets.googleapis.com/v4/spreadsheets/1j5ByajX-TA0z3_BcXfN9mt6CruYyxUpN7c5aaBUd-XY/values/A2:F14?key=AIzaSyALAEEHEZya5Tbp4HpqKb5sppbG515a3Ic`


fetch(api)
.then((res) => res.json())
.then((data)=> {
    var divTag = document.getElementById('count');
    console.log(data);
    
    let adValues = data.values;
    for (let i = 0; i < adValues.length; i++) {
        console.log(adValues[i]);   
        let ad = adValues[i]
        divTag.innerHTML += 
            `<div class= 'card' sd:hidden >
            <img src ="${ad[2]}">
                <p> ${ad[0]} </p>
                <span>${ad[1]}</span>
                <div>${ad[3]}$</div>
             </div>`



    }
    

// ecomer side array 

// for (i = 0; i < ads.length; i++) {
//     divTag.innerHTML += 
//     `<div class= 'card' >
//         <img src =${ads[i].images[0]  }    />
//         <p> ${ads[i].title} </p>
//         <span>${ads[i].price}</span>
//      </div>`
// };
});        









