var lastselected;
var usama=0;
function ShowOffset() {
    var x = document.getElementById("OffsetSection");
    if(lastselected!==x)
    {
x.style.display="block";
lastselected.style.display="none";
lastselected=x;
    }
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }

function ShowPacking() {
  console.log("Here");
    var x = document.getElementById("PackingsSection");
    
    if(lastselected!==x)
    {
x.style.display="block";
lastselected.style.display="none";
lastselected=x;
    }
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }

  function ShowLabels() {
    var x = document.getElementById("LabelsSection");
    
    if(lastselected!==x)
    {
x.style.display="block";
lastselected.style.display="none";
lastselected=x;
    }
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }

  function Showhangers() {
    var x = document.getElementById("HangersSection");
    
    if(lastselected!==x)
    {
x.style.display="block";
lastselected.style.display="none";
lastselected=x;
    }
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  }

  function foo()
  {
    var fruit = getParameterByName('fruit');
console.log(fruit);
lastselected = document.getElementById("OffsetSection");
var LabelsSection = document.getElementById("LabelsSection");
var HangersSection = document.getElementById("HangersSection");
var PackingsSection = document.getElementById("PackingsSection");

console.log(LabelsSection);
LabelsSection.style.display="none";
HangersSection.style.display="none";
PackingsSection.style.display="none";
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

