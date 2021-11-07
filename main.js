var FriendName = [];

function CallArray() {
    var DisplayedFriendName = [];
    for (let i = 1; i <= 4; i++) {
        var NameStudent = document.getElementById("input"+i).value;
        console.log(NameStudent);
        FriendName.push(NameStudent);
    }
    console.log(FriendName);
    var lengthofstudentarray = FriendName.length;
    for (let k = 0; k < lengthofstudentarray; k++) {
        MathimaticalNumber1 = k + 1
        DisplayedFriendName.push("<h4>NAME "+MathimaticalNumber1+"-"+FriendName[k]+"</h4>") ;
        console.log(DisplayedFriendName);
    }
    console.log(DisplayedFriendName);
    console.log(lengthofstudentarray);
    document.getElementById("div1").innerHTML = DisplayedFriendName;
    var RemovedComma = DisplayedFriendName.join(" ");
    console.log(RemovedComma);
    document.getElementById("div2").innerHTML = RemovedComma;
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "inline-block";
    document.getElementById("button3").style.display = "inline-block";
}

function SortArray() {
    var SortFriendName = FriendName.sort()
    console.log(SortFriendName)
    var DisplaySortingArray = []
    var lengthofstudentarray = FriendName.length;
    for (let k = 0; k < lengthofstudentarray; k++) {
        MathimaticalNumber1 = k + 1
        DisplaySortingArray.push("<h4>NAME "+MathimaticalNumber1+"-"+FriendName[k]+"</h4>") ;
        console.log(DisplaySortingArray);
    }
    console.log(DisplaySortingArray);
    console.log(lengthofstudentarray);
    document.getElementById("div1").innerHTML = DisplaySortingArray;
    var RemovedCommaSorting = DisplaySortingArray.join(" ");
    console.log(RemovedCommaSorting);
    document.getElementById("div2").innerHTML = RemovedCommaSorting;
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "inline-block";
}

function CleanArray() {
    for (let j = 0; j <= 4; j++) {
        FriendName.pop();
    }
    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
    document.getElementById("button1").style.display = "inline-block";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    for (let g = 1; g <= 4; g++) {
        document.getElementById("input"+g).value = ""
    }
}