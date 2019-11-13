let friend ={
    name: "Ikka",
    balance: 50,
};

let showFriend = function(friend) {


let container = document.createElement("div");

container.style.padding = "8px";
container.style.Width = Math.max(0, Math.min(5000, Math.abs(friend.balance))) + "px";



let heading = document.createElement("h1");
heading.innerHTML = "Greeting, " + friend.name;
heading.style.fonFamily = "Helvetica";
heading.style.paddingLeft = "20px";
heading.style.width = "500px";

container.appendChild(heading);
let message = document.createElement("p");

if (friend.balance <0) {
   message.innerHTML = "I owe you " + (-friend.balance) + " EUR.";
   container.style.background = "red";
}else if 
(friend.balance === 0){
    message.innerHTML = "We are even.";
    container.style.background = "green";
}else{ 
message.innerHTML = "You owe me "+ friend.balance + " EUR.";
container.style.background = "yellow";
}
message.style.fontSize = Math.max(10, Math.abs(friend.balance / 1.5)) + "px";
container.appendChild(message);




document.body.appendChild(container);

}



let friends = [
    {
        name: "Ilkka",
        balance: 50,
    },
    {
    name: "Pekka",
    balance: -25,
    },
    {
        name: "Ikka",
        balance: 0,
    }
];
for(let friend of friends) {
    showFriend(friend);
}