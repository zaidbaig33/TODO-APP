
 const firebaseConfig = {
    apiKey: "AIzaSyCPm3HHpvzjQ5EwUEC0d4sQ7TEZq16AQbs",
    authDomain: "web-and-mobile-dee71.firebaseapp.com",
    databaseURL: "https://web-and-mobile-dee71-default-rtdb.firebaseio.com",
    projectId: "web-and-mobile-dee71",
    storageBucket: "web-and-mobile-dee71.appspot.com",
    messagingSenderId: "828909000949",
    appId: "1:828909000949:web:53a1e07aebaa90da484dbc",
    measurementId: "G-H3WCLHZQ9D"
  };




 var frb = firebase.initializeApp(firebaseConfig) 
console.log(frb);
// function chgColor(){
//   document.getElementById("container").style.backgroundColor='yellow';
// }

// var head = document.getElementById("container");

// var res = head.getAttribute("class");

// var resTwo = head.hasAttribute("class");
// head.setAttribute("style","color:red");
// head.setAttribute("class","classkesedetehain");
// head.setAttribute("onclick","chgColor()");

// var countAtt = head.attributes
// console.log(res,resTwo, ".......",countAtt );

var inputval =document.getElementById("inpTask");


function storedata(){
  inputval=document.getElementById("inpTask").value;
  let databaseObj={
    valueofinput:inputval,
  };
  frb.database().ref("/").child("userdata/").push(databaseObj);
  if(inputval!==""){
    document.getElementById("inpTask").value="";
  }
}

function getdatainscreen(){
frb
.database()
.ref("/userdata")
.on("child_added", function(data){
  console.log(data.key, data.val());
  let tablerow=document.createElement("tr");
  let storedatainid =document.createElement("td");
  let delBtn= document.createElement("td");
  let editBtn =document.createElement("td");
  let deleteb = document.createElement("button");
  let editb =document.createElement("button");

  storedatainid.innerHTML=data.val().valueofinput;
  deleteb.innerHTML="Delete";
  editb.innerHTML="Edit";

  let table = document.getElementById("datastro");
  editBtn.appendChild(editb);
  delBtn.appendChild(deleteb);
  tablerow.appendChild(storedatainid);
  tablerow.appendChild(delBtn);
  table.appendChild(tablerow);

  storedatainid.setAttribute("class", "todoTask");
  deleteb.setAttribute("id", data.key);
  deleteb.setAttribute("onclick","deleterow(this)");
  editb.setAttribute("onclick","editrow(this)");
  editb.setAttribute("id",data.key)
});

}
function deleterow(val){
  frb.database().ref("/").child("userdata").child(val.id).remove();
  val.parentNode.parentNode.remove();
}

function editrow(val){
  let inputval = document.getElementById("inpTask");

  val.setAttribute("class", "editedbtn");
  inputval.value = val.parentNode.parentNode.childNode[0].innerHTML;
  document.getElementById("btn").className = "hidden";
  if((document.getElementById("opt").className = "hidden")){
    document.getElementById("upt").className = "visible";
  }
}

function update(){
  let whichRowUpdate = document.querySelector(".editebtn");
  console.log(whichRowUpdate.id);
  let editedTextfebd = {
    valueofynput: inputval.value,
    key: whichRowUpdate.id,
  };
  frb
  .database()
  .ref("/")
  .child("userData/")
  .child(whichRowUpdate.id)
  .set(editedTextfebd);
  whichRowUpdate.parentNode.parentNode.childNodes[0].innerHTML =
  inputval.value;
  console.log(
    whichRowUpdate.parentNode.parentNode.childNodes[0],
    inputval.value);
}


// var para = document.createElement("p");
// para.setAttribute("class","paraStl");

// var txt = document.createTextNode("Hello world Jawanoo");
// para.appendChild(txt)
// // para.innerHTML = "Hello world";

// var mainDiv = document.getElementById("mainDiv");
// mainDiv.appendChild(para);


// var mainDivSec = document.getElementById("secDiv");
// mainDivSec.childNodes[1].remove()

// function delTask(thisVal){
//   thisVal.parentNode.remove();
// }
// function edtTask(thisVal){
//   var vals = thisVal.parentNode.childNodes[0].textContent;
//   var res = prompt("Edit Value",vals);
//   thisVal.parentNode.childNodes[0].textContent = res;
// }

// function addTask(){
// var task = document.getElementById("inpTask").value;
// var txtNd= document.createTextNode(task)

// var liEle = document.createElement("li");
// var edtBtnEle = document.createElement("button");
// var delBtnEle = document.createElement("button");

// edtBtnEle.setAttribute("onclick","edtTask(this)");
// delBtnEle.setAttribute("onclick","delTask(this)");

// edtBtnEle.innerHTML="Edit";
// delBtnEle.innerHTML="Delete";

// liEle.appendChild(txtNd);
// liEle.appendChild(edtBtnEle);
// liEle.appendChild(delBtnEle);

// var olEle = document.getElementById("taskLs")
// olEle.appendChild(liEle);
// document.getElementById("inpTask").value = "";
// }

// //  frb.database().ref('/').remove();
// //  frb.database().ref('/').push(userData);


// // const firebaseConfig={
// //     apiKey: "AIzaSyAWHPgImKW7vkB5XJM1rMNV8He_AZAgV2Y",
// //     authDomain: "wnmrjma.firebaseapp.com",
// //     databaseURL: "https://wnmrjma-default-rtdb.firebaseio.com",
// //     projectId: "wnmrjma",
// //     storageBucket: "wnmrjma.appspot.com",
// //     messagingSenderId: "347875856749",
// //     appId: "1:347875856749:web:e37675a43c61ec2a620a64"
// //  };
// // var frb =  firebase.initializeApp(firebaseConfig);

// // function addUser(){
// // var userEmail = document.getElementById("email").value 
// // var userPass = document.getElementById("pass").value   

// //     var obj={
// //         email:userEmail,
// //         pass:userPass
// //     }
//     frb.database().ref('/').child('usersData/').push(obj)
// }

// function getUser(){
//     frb.database().ref('/usersData').on("child_added",function(data){
// console.log(data.key,data.val())
//     })
// }

// frb.database().ref('/').child(`usersData${key}`).remove()
// deleteBtn.setAttribute("onclick",`delTask(this,${data.key})`);

// function delTask(eleThis,key){
//     console.log("delete Func",eleThis.parentNode.remove());
//     frb.database().ref('/').child(`usersData${key}`).remove()
    
// }

