const pages=[
    {
        page:"View Grades",
        navigate: viewGrades
    },
    {
        page:"Add Grades",
        navigate: addGrades
    }
]


function navButton(pg, pr, nv){
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML="";
        nv();
    })
    button.style.display="block";
    button.style.margin="0 auto";
    pr.appendChild(button);
}

function navigation (){
    let nav=document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="100px";
    nav.style.backgroundColor="green";
    nav.style.borderRadius="15px";
    for(obj of pages){
        navButton(obj.page, nav, obj.navigate)
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function viewGrades(){
    document.body.innerHTML = "";
    navigation();
    let view = document.createElement("h2");
    view.innerHTML= "Grades:";
    document.body.querySelector(".wrapper").appendChild(view);
    renderList();
    document.body.appendChild(inputListGrade);
}
let list=[];
let inputListGrade = document.createElement("div");
function renderList() {
    inputListGrade.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        let ele = document.createElement("div");
        ele.innerHTML = list[i];
        inputListGrade.appendChild(ele);
    }
}
function addGrades(){
    document.body.innerHTML = "";
    navigation();
    let add = document.createElement("h2");
    add.innerHTML="Add Grades: ";
    document.body.querySelector(".wrapper").appendChild(add);
    let inputStudentName = document.createElement("input");
    inputStudentName.placeholder="Student Name: ";
    document.body.appendChild(inputStudentName);
    let inputGrade = document.createElement("input");
    inputGrade.placeholder="Grade (0-100): ";
    document.body.appendChild(inputGrade);
    let submitGrade = document.createElement("button");
    submitGrade.innerHTML="Submit Grade";
    document.body.appendChild(submitGrade);

    submitGrade.addEventListener("click", function() {
        if (inputStudentName.value <= 1){
            alert("Student name must be filled in!")
        }
        else if (inputGrade.value < 0){
            alert("Grade must be greater than 0!")
        }
        else if (inputGrade.value > 100){
            alert("Grade must be less than 100!")
        }
        else {
            list.push("Student Name: "+inputStudentName.value + " | Grade: " + inputGrade.value);
            document.body.innerHTML = "";
            navigation();
            viewGrades();}


    })
}










let inputEle = document.createElement("input");
inputEle.placeholder="User Name: ";


let inputElePass = document.createElement("input");
inputElePass.placeholder="Password: ";
inputElePass.setAttribute("type", "password");

let messageEle = document.createElement("h3");

let button = document.createElement("button");
button.innerHTML="Log In";

button.addEventListener("click", function(){
    if(inputEle.value==="cool" && inputElePass.value==="password"){
        document.body.innerHTML="";
        navigation();
        viewGrades();
    }
    else{
        messageEle.innerHTML="You entered the wrong login credentials!"
    }
})





document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);