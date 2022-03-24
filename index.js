//Edit Profile Name
function editProfile() {
    let name = document.querySelector("#info-name");
    name.innerHTML = "Anne S"
}


//initial setup
let requestArr = ["#adrien-s", "#alayne-s"];
let requestAmount = document.querySelector("#request-amount");
let requestInt = 2;
let connectionAmount = document.querySelector("#connection-amount");
let connectionInt = 500;


//Check Button
function accept(index) {
    removeElement(index);
    connectionInt += 1; 
    connectionAmount.innerHTML = connectionInt;
}
//Close Button
function closeButton(index) {
    removeElement(index);
}

//remove element
function removeElement(index) {
    let entry = document.querySelector(requestArr[index]);
    entry.remove();
    if(requestInt > 0) {
        requestInt -= 1;
    }
    requestAmount.innerHTML = requestInt;
}