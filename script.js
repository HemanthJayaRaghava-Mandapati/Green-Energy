

// =========================
// Plant Tree Button
// =========================
document.querySelector(".btn").addEventListener("click", function(){

    alert("🌱 Welcome to EcoGrow AI!\n\nPlease register your tree by filling out the registration form.");

    document.getElementById("register").style.display = "block";

    document.getElementById("register").scrollIntoView({
        behavior:"smooth"
    });

});

// =========================
// Photo Preview
// =========================
document.getElementById("photo").addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            let img = document.getElementById("preview");

            img.src = e.target.result;

            img.style.display = "block";

        };

        reader.readAsDataURL(file);

    }

});

// Register Tree and Save Data

document.getElementById("treeForm").addEventListener("submit", function(e){

    e.preventDefault();


    let treeName = document.getElementById("treeName").value.trim();
    let adopterName = document.getElementById("adopterName").value.trim();
    let location = document.getElementById("location").value.trim();
    let date = document.getElementById("date").value;
    let photoFile = document.getElementById("photo").files[0];


    if(treeName==="" || adopterName==="" || location==="" || date==="" || !photoFile){

        alert("⚠ Please fill all fields and upload a tree photo.");

        return;

    }


    // Generate Tree ID

    let treeID = "EGAI-" + Math.floor(Math.random()*900000+100000);



    let reader = new FileReader();


    reader.onload = function(){

        let treeData = {

            id: treeID,
            name: treeName,
            adopter: adopterName,
            location: location,
            date: date,
            photo: reader.result,
            health: "Healthy ✅",
            growth: "5%",
            co2: "0.5 Tons",
            oxygen: "1 Ton",
            energy: "0.05 kWh",
            points: 50

        };


        // Save tree data

        localStorage.setItem(treeID, JSON.stringify(treeData));


        // Show Success Popup
document.getElementById("popupTreeID").innerHTML = treeID;

// Clear old QR code
document.getElementById("popupQRCode").innerHTML = "";

// Generate new QR Code
new QRCode(document.getElementById("popupQRCode"), {
    text: treeID,
    width: 120,
    height: 120
});

// Open popup
document.getElementById("successPopup").style.display = "block";


        document.getElementById("treeForm").reset();

        document.getElementById("preview").style.display="none";


    };


    reader.readAsDataURL(photoFile);


});
// Search Tree Details

document.getElementById("searchBtn").addEventListener("click", function(){

    let searchID = document.getElementById("searchTreeID").value.trim();


    let data = localStorage.getItem(searchID);


    if(data){

        let tree = JSON.parse(data);


        document.getElementById("treeResult").style.display="block";


        document.getElementById("showTreeID").innerHTML = tree.id;

        document.getElementById("showTreeName").innerHTML = tree.name;

        document.getElementById("showAdopter").innerHTML = tree.adopter;

        document.getElementById("showLocation").innerHTML = tree.location;

        document.getElementById("showDate").innerHTML = tree.date;
document.getElementById("showHealth").innerHTML = tree.health;

document.getElementById("showGrowth").innerHTML = tree.growth;

document.getElementById("showCO2").innerHTML = tree.co2;

document.getElementById("showOxygen").innerHTML = tree.oxygen;

document.getElementById("showEnergy").innerHTML = tree.energy;

document.getElementById("showPoints").innerHTML = tree.points;

document.getElementById("showMoisture").innerHTML =
tree.soilMoisture || "65%";

document.getElementById("showTemperature").innerHTML =
tree.temperature || "28°C";

document.getElementById("showUpdate").innerHTML =
tree.lastUpdate || new Date().toLocaleDateString();

        let image = document.getElementById("showPhoto");

        image.src = tree.photo;

        image.style.display="block";
        document.getElementById("treeQRCode").innerHTML = "";

new QRCode(document.getElementById("treeQRCode"), {
    text: tree.id,
    width: 180,
    height: 180
});


    }
    else{

        alert("❌ Tree ID not found!\nPlease enter a correct Tree ID.");

        document.getElementById("treeResult").style.display="none";

    }

});
function checkTreeHealth(){

let id=document.getElementById("doctorID").value;

let data=localStorage.getItem(id);


if(data){

let tree=JSON.parse(data);

document.getElementById("doctorResult").innerHTML=

"🌱 Health: "+tree.health+
"<br>📈 Growth: "+tree.growth+
"<br>🌍 CO₂: "+tree.co2+
"<br>🌬 Oxygen: "+tree.oxygen+
"<br>⚡ Energy: "+tree.energy;

}

else{

document.getElementById("doctorResult").innerHTML=
"❌ Tree ID not found";

}

}
let renewableEnergy = 2.45;
let windSpeed = 12.5;
let voltage = 12.8;
let battery = 89;
let efficiency = 94;
let deviceHealth = 98;
let sensors = 128;
let power = 1.80;

setInterval(function () {

    renewableEnergy += Math.random() * 0.05;
    windSpeed = 10 + Math.random() * 5;
    voltage = 12 + Math.random();
    battery = Math.max(75, battery - Math.random() * 0.2);
    efficiency = 92 + Math.random() * 6;
    deviceHealth = 96 + Math.random() * 3;
    power = 1.5 + Math.random();

    document.getElementById("renewableEnergy").innerHTML =
        renewableEnergy.toFixed(2) + " kWh";

    document.getElementById("windSpeed").innerHTML =
        windSpeed.toFixed(1) + " km/h";

    document.getElementById("voltage").innerHTML =
        voltage.toFixed(1) + " V";

    document.getElementById("battery").innerHTML =
        battery.toFixed(0) + "%";

    document.getElementById("efficiency").innerHTML =
        efficiency.toFixed(0) + "%";

    document.getElementById("deviceHealth").innerHTML =
        deviceHealth.toFixed(0) + "%";

    document.getElementById("sensors").innerHTML =
        sensors;

    document.getElementById("power").innerHTML =
        power.toFixed(2) + " kW";

}, 5000);
window.onload = function(){

    if(window.location.hash){
        history.replaceState(null, null, " ");
        window.scrollTo(0,0);
    }

};
function openEnergyKit(){

document.getElementById("energykit")
.scrollIntoView({
behavior:"smooth"
});

}


// 1. Wind Speed
new Chart(document.getElementById("windChart"), {
type: "line",
data: {
labels: ["8 AM","10 AM","12 PM","2 PM","4 PM","6 PM"],
datasets: [{
label: "Wind Speed (km/h)",
data: [8,12,16,14,18,15],
borderColor: "#3498db",
backgroundColor: "rgba(52,152,219,0.2)",
fill: true,
tension: 0.4
}]
}
});

// 2. Voltage
new Chart(document.getElementById("voltageChart"), {
type: "line",
data: {
labels: ["8 AM","10 AM","12 PM","2 PM","4 PM","6 PM"],
datasets: [{
label: "Voltage (V)",
data: [11.8,12.2,12.7,13.1,12.9,12.5],
borderColor: "#f39c12",
backgroundColor: "rgba(243,156,18,0.2)",
fill: true,
tension: 0.4
}]
}
});

// 3. Battery
new Chart(document.getElementById("batteryChart"), {
type: "doughnut",
data: {
labels: ["Charged","Remaining"],
datasets: [{
data: [85,15],
backgroundColor: ["#2ecc71","#dddddd"]
}]
}
});

// 4. Tree Motion
new Chart(document.getElementById("motionChart"), {
type: "bar",
data: {
labels: ["Tree 1","Tree 2","Tree 3","Tree 4","Tree 5"],
datasets: [{
label: "Tree Motion %",
data: [65,82,71,90,76],
backgroundColor: "#27ae60"
}]
}
});

// 5. Energy Efficiency
new Chart(document.getElementById("efficiencyChart"), {
type: "line",
data: {
labels: ["8 AM","10 AM","12 PM","2 PM","4 PM","6 PM"],
datasets: [{
label: "Efficiency %",
data: [88,90,92,94,95,96],
borderColor: "#8e44ad",
backgroundColor: "rgba(142,68,173,0.2)",
fill: true,
tension: 0.4
}]
}
});

// 6. Power Generated
new Chart(document.getElementById("powerChart"), {
type: "line",
data: {
labels: ["8 AM","10 AM","12 PM","2 PM","4 PM","6 PM"],
datasets: [{
label: "Power (kW)",
data: [1.2,2.1,3.0,4.2,5.1,6.0],
borderColor: "#e74c3c",
backgroundColor: "rgba(231,76,60,0.2)",
fill: true,
tension: 0.4
}]
}
});
// ================= AI Predictions =================

let predictedHealth = 99;
let predictedEnergy = 3.20;
let predictedOxygen = 28;
let predictedCO2 = 38;

setInterval(function(){

    predictedHealth += (Math.random() - 0.5) * 0.2;
    if(predictedHealth > 100) predictedHealth = 100;
    if(predictedHealth < 95) predictedHealth = 95;

    predictedEnergy += Math.random() * 0.03;
    predictedOxygen += Math.random() * 0.02;
    predictedCO2 += Math.random() * 0.02;

    document.getElementById("predHealth").innerHTML =
        predictedHealth.toFixed(1) + "%";

    document.getElementById("predEnergy").innerHTML =
        predictedEnergy.toFixed(2) + " kWh";

    document.getElementById("predOxygen").innerHTML =
        predictedOxygen.toFixed(2) + " Tons";

    document.getElementById("predCO2").innerHTML =
        predictedCO2.toFixed(2) + " Tons";

}, 5000);
const treeDatabase = {};

for(let i=1;i<=40;i++){

let id="EGAI-"+String(i).padStart(6,"0");

treeDatabase[id]={
current:(Math.random()*2+1).toFixed(2)+" A",
battery:Math.floor(Math.random()*25+75)+"%",
sensor:"✅ Working",
motion:"✅ Active",
connection:"✅ Connected",
energy:"✅ Producing Electricity",
advice:"Everything is operating normally."
};

}

// Trees with problems

treeDatabase["EGAI-000008"]={
current:"0.40 A",
battery:"28%",
sensor:"❌ Sensor Failure",
motion:"⚠ Low Motion",
connection:"✅ Connected",
energy:"⚠ Low Energy",
advice:"Replace vibration sensor."
};

treeDatabase["EGAI-000017"]={
current:"0.00 A",
battery:"15%",
sensor:"✅ Working",
motion:"❌ No Motion",
connection:"⚠ Loose Connection",
energy:"❌ Not Producing",
advice:"Inspect tree connection."
};

treeDatabase["EGAI-000029"]={
current:"0.60 A",
battery:"32%",
sensor:"⚠ Weak Signal",
motion:"✅ Active",
connection:"⚠ Network Issue",
energy:"⚠ Low Output",
advice:"Check IoT module."
};

// Fill dropdown

const select=document.getElementById("doctorID");

for(let id in treeDatabase){

let option=document.createElement("option");

option.value=id;

option.text=id;

select.appendChild(option);

}

function showTreeStatus(){

const id=document.getElementById("doctorID").value;

if(id===""){

document.getElementById("doctorResult").style.display="none";

return;

}

const tree=treeDatabase[id];

document.getElementById("doctorResult").style.display="block";

document.getElementById("treeTitle").innerHTML="🌳 "+id;

document.getElementById("treeCurrent").innerHTML=tree.current;

document.getElementById("treeBattery").innerHTML=tree.battery;

document.getElementById("treeSensor").innerHTML=tree.sensor;

document.getElementById("treeMotion").innerHTML=tree.motion;

document.getElementById("treeConnection").innerHTML=tree.connection;

document.getElementById("treeEnergy").innerHTML=tree.energy;

document.getElementById("treeAdvice").innerHTML=tree.advice;

}
// Initialize Map

let map = L.map('treeMap').setView([16.9500,82.2500],16);


// Satellite Map Layer

L.tileLayer(
'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
{
maxZoom:19,
attribution:"Satellite View"
}
).addTo(map);


// EcoGrow AI Farm Area

let farmBoundary = [
[16.9500,82.2500],
[16.9524,82.2500],
[16.9524,82.2518],
[16.9500,82.2518]
];


L.polygon(farmBoundary,{
color:"green",
fillOpacity:0.25
})
.addTo(map)
.bindPopup("🌱 EcoGrow AI Smart Farm Area");


// 40 Trees inside farm

let treeCount = 1;

for(let row=0; row<8; row++){

    for(let col=0; col<5; col++){

        let lat = 16.9502 + (row*0.00025);
        let lng = 82.2502 + (col*0.00032);


        L.marker([lat,lng])
        .addTo(map)
        .bindPopup(
        "🌳 Tree ID: EGAI-"+String(treeCount).padStart(6,"0")+
        "<br>📡 IoT Status: Connected"+
        "<br>⚡ Energy Device: Active"+
        "<br>🌱 Field Zone: EcoGrow Farm"
        );

        treeCount++;

    }
}
function showAlert(){

    document.getElementById("aiAlert").classList.add("show");

    setTimeout(function(){

        closeAlert();

    },7000);

}

function closeAlert(){

    document.getElementById("aiAlert").classList.remove("show");

}

