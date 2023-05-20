const userList = [
    {
        id: 1,
        name: "John",
        age: "18",
        profession: "Developer"
    },

    {
        id: 2,
        name: "Jack",
        age: "20",
        profession: "Developer"
    },

    {
        id: 3,
        name: "Karen",
        age: "19",
        profession: "Admin"
    }
]

const filterBtn = document.getElementById("filter");
const select = document.getElementsByTagName("select")[0];
const container = document.getElementById("user-cards");
const form = document.getElementById("user-form");

function filterUsers(){
    const selectedValue = select.value;
    if(!selectedValue){
        container.innerHTML = '';
        alert("Please select one value from the given options.");
        return;
    }


container.innerHTML = '';

const result = userList.filter((user) =>{
    if(user.profession === selectedValue) return true;
    return false;

})

    result.forEach((user, index)=>{
    const div = document.createElement("div");
    div.className = "card";
    const p1 = document.createElement("p");
    p1.innerText = (index+1);
    const p2 = document.createElement("p");
    p2.innerText = "Name: "+user.name;
    const p3 = document.createElement("p");
    p3.innerText = "Profession: "+user.profession;
    const p4 = document.createElement("p");
    p4.innerText = "Age: "+user.age;


    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    container.appendChild(div);
})
}

function addNewUser(event){
    event.preventDefault();

    const user = {
        name: event.target["name"].value,
        profession: event.target["profession"].value,
        age: event.target["age"].value
    }

    userList.push(user);
    filterUsers();
    alert("New user added successfully.")
}

filterBtn.addEventListener("click", filterUsers);
form.addEventListener("submit", addNewUser);