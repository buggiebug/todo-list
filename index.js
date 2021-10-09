let heading = document.querySelector("#heading");
let details = document.querySelector("#textArea");
let btn = document.querySelector("#btn");
let data = document.querySelector("#data"); //- main div where list added...
let msg = document.querySelector("#msg");

let count = 2;

// //- For adding list...

btn.addEventListener("click", () => {
  if (heading.value != "") {
    let creDiv = document.createElement("div");
    let creH3 = document.createElement("h3");
    let creP = document.createElement("p");
    let creDelSpan = document.createElement("span");
    let creComSpan = document.createElement("span");

    let delNamDiv = "idNam" + count;
    creDiv.setAttribute("id", delNamDiv);
    // creDiv.setAttribute("class","classDivs")

    creH3.innerHTML = heading.value;
    creP.innerHTML = details.value;

    // / append child is method through this we can append the <div> tag in id(data) and <h3> & <p> tag in <div> tag & <span> tag in <h3> tag.

    data.appendChild(creDiv);
    creDiv.appendChild(creH3);
    creDiv.appendChild(creP);

    // / for delete button...
    let idNamSpanDel = "delSpan" + count;
    creDelSpan.setAttribute("id", idNamSpanDel);
    creDelSpan.innerHTML = "<i class='far fa-trash-alt'></i>";
    creH3.appendChild(creDelSpan);

    // / for complete button...
    let idNamSpanComp = "compSpan" + count;
    creComSpan.setAttribute("id", idNamSpanComp);
    creComSpan.className = "comp";
    creComSpan.innerHTML = "<i class='far fa-check-circle'></i>";
    creH3.appendChild(creComSpan);

    count++;
  } else {
    msg.style.visibility = "visible";
    setTimeout(() => {
      msg.style.visibility = "hidden";
    }, 1500);
  }

  heading.value = "";
  details.value = "";

  // console.log("Added...")
});




// //-  For Delete & Complete button...

// / function for Delete...
function remov(delSpan, remDiv) {
  // console.log("Remove clicked...")
  delSpan.addEventListener("click", () => {
    // console.log(remSpan,"  :  ",delDiv);
    remDiv.remove();
  });
}

// / function for Complete...
function compl(compSpan, remSpan) {
  // console.log("Complete clicked...")
  compSpan.addEventListener("click", () => {
    if (remSpan.style.textDecoration != "line-through") {
      remSpan.style.textDecoration = "line-through";
      remSpan.style.opacity = 50 + "%";
    } else {
      remSpan.style.textDecoration = "none";
      remSpan.style.opacity = 100 + "%";
    }
  });
}

// - Event listner for delete is here...

let i = 1;
data.addEventListener("mouseover", () => {

  // console.log("Data hovered.");

  // / function for delete...
  let delSpan = document.getElementById("delSpan" + i);
  let remDiv = document.getElementById("idNam" + i);
  remov(delSpan, remDiv);

  // / function for Complete...
  let compSpan = document.getElementById("compSpan" + i);
  compl(compSpan, remDiv);

  console.log(delSpan," : ",compSpan,"  :  ",i)
  
  
  i++;
});

