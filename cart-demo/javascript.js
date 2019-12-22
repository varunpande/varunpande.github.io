function shortlist(a){
   if(sessionStorage.length == 0){
    sessionStorage.setItem(0,a);
   }
   for(i = 0; i < sessionStorage.length; i++){
        if(sessionStorage.getItem(i) != a){
        i++;
        sessionStorage.setItem(i,a);
        }
    }
}

function fabfunction(){
if (typeof(Storage) !== "undefined") {

    document.getElementById("shortlist").innerHTML="";

var trow = document.createElement("tr");//row for heading

//heading1
var thead = document.createElement("th");
trow.appendChild(thead);
thead.innerHTML = "Class Name";
document.getElementById("shortlist").appendChild(trow);

//heading2
var thead = document.createElement("th");
trow.appendChild(thead);
thead.innerHTML = "Class Timing";
document.getElementById("shortlist").appendChild(trow);

//heading3
var thead = document.createElement("th");
trow.appendChild(thead);
thead.innerHTML = "Price";
document.getElementById("shortlist").appendChild(trow);


//heading4
var thead = document.createElement("th");
trow.appendChild(thead);
thead.innerHTML = "Discount";
document.getElementById("shortlist").appendChild(trow);


//heading5
var thead = document.createElement("th");
trow.appendChild(thead);
thead.innerHTML = "Call back";
document.getElementById("shortlist").appendChild(trow);


//heading6
var thead = document.createElement("th");
trow.appendChild(thead);
thead.innerHTML = "Remove";
document.getElementById("shortlist").appendChild(trow);

    for(trc=0;trc<sessionStorage.length;trc++)
    {
var rowdata = sessionStorage.getItem(trc).split(",");
var trow = document.createElement("tr");
//data 1
    var tdata = document.createElement("td");
    trow.appendChild(tdata);
    tdata.innerHTML = rowdata[0];
    document.getElementById("shortlist").appendChild(trow);
//data 2
    var tdata = document.createElement("td");
    trow.appendChild(tdata);
    tdata.innerHTML = rowdata[1];
    document.getElementById("shortlist").appendChild(trow);
//data 3
    var tdata = document.createElement("td");
    trow.appendChild(tdata);
    tdata.innerHTML = rowdata[2];
    document.getElementById("shortlist").appendChild(trow);
//data 4
    var tdata = document.createElement("td");
    trow.appendChild(tdata);
    var btnbuy = document.createElement("button");
    btnbuy.className="btn btn-primary";
    tdata.appendChild(btnbuy);
    btnbuy.innerHTML = rowdata[3];
    document.getElementById("shortlist").appendChild(trow);
//data 5
    var tdata = document.createElement("td");
    trow.appendChild(tdata);
    var btnbuy = document.createElement("button");
    btnbuy.className="btn btn-primary";
    tdata.appendChild(btnbuy);
    btnbuy.innerHTML = "Call Back";
    document.getElementById("shortlist").appendChild(trow);
//data 6
    var tdata = document.createElement("td");
    trow.appendChild(tdata);
    var btnbuy = document.createElement("button");
    btnbuy.className="btn btn-primary";
    btnbuy.setAttribute("id",trc);
    btnbuy.onclick = function(){sessionStorage.removeItem(this.id);var btnparent=this.parentElement;btnparent.parentElement.remove();};
    tdata.appendChild(btnbuy);
    btnbuy.innerHTML = "Remove";
    document.getElementById("shortlist").appendChild(trow);
    }//close of trc for
} else {
    // Sorry! No Web Storage support..
    window.alert("Sorry your browser does not support Web storage.")
}
}