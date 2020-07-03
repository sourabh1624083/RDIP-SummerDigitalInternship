//For calculator Task 1

function dis(val) {
    document.getElementById("inp").value += val
}


//functions for evaluation
function solve() {
    let x = document.getElementById("inp").value
    var z = ""
    for (var i = 0; i < x.length; i++) {

        if (x[i] === '%') {
            var p = (eval(z) * 0.01) * eval(x.slice(i + 1, x.length));
            document.getElementById("inp").value = p
            return;

        }
        z = z + x[i]
    }
    let y = eval(x)
    document.getElementById("inp").value = y
}

function solvep() {
    let x = document.getElementById("inp").value
    let y = eval(x)
    y = y * 100
    document.getElementById("inp").value = y

}

function solvesq() {
    let x = document.getElementById("inp").value
    let y = eval(x)
    y = Math.sqrt(y)
        // y = y.toFixed(3)
    document.getElementById("inp").value = y.toFixed(3)

}

function solveabs() {
    let x = document.getElementById("inp").value
    let y = eval(x)
    y = Math.abs(y)
    document.getElementById("inp").value = y

}



//function for clearing the display
function clr() {
    document.getElementById("inp").value = ""
}






// For Validation Program Task 2

function validate() {
    var name = document.getElementById('name').value;
    //document.write(name);
    if (name == "") {
        alert("Name can't be blank");
        return false;
    }
    var us = /[0-9]/g;
    var result = name.match(us);
    if (result != null) {
        alert("Use Only Alphabets In name");
        return false;
    }
    var phoneno = document.getElementById('phoneno').value;
    //document.write(name);
    var n = phoneno.length;

    if (phoneno == "" || n > 10 || n < 10) {
        alert("Not a valid Phone Number");
        return false;
    }
    //document.write(phoneno, typeof 'phoneno', n)
    var p = /[^0-9]/g;
    var result = phoneno.match(p);
    if (result != null) {
        alert("Use Only Integers In PHONE NUMBER");
        return false;
    }
    var mail = document.getElementById('mail').value;

    var atposition = mail.indexOf("@");
    var dotposition = mail.lastIndexOf(".");
    var n = mail.length;
    //document.write(mail, typeof 'mail', atposition, dotposition, n, typeof 'atposition');
    if (atposition < 1 || dotposition < (atposition + 2) || (dotposition + 2) >= (n)) {
        alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
        return false;
    }
    alert("FORM SUBMITTED SUCCESSFULLY");
}



//Task 3


function palindrome() {
    var namep = document.getElementById('namep').value;
    //var namep = str;
    if (namep == "") {
        alert("Name can't be blank");
        return false;
    }
    var us = /[0-9]/g;
    var result = namep.match(us);
    if (result != null) {
        alert("Use Only Alphabets In name");
        return false;
    }
    var str = namep;
    var i = 0;
    var j;
    var n = namep.length;
    // document.write(n, namep, typeof 'namep', namep.indexOf('o'))
    namep = namep.toLowerCase()
    var mid = Math.floor(n / 2);
    var k = true;
    for (var i = 0; i < mid; i++) {
        if (namep[i] !== namep[n - 1 - i]) {

            document.getElementById('id').innerHTML = "False They are not Palindrome";
            return;
        }
    }
    document.getElementById('id').innerHTML = "True They are Palindrome";
    return;
}

function anagram() {
    var str1 = document.getElementById('namea1').value;

    var str2 = document.getElementById('namea2').value;

    const normalize = str =>
        str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    if (normalize(str1) === normalize(str2)) {
        document.getElementById('id').innerHTML = "True They are Anagram";
        return;

    } else {
        document.getElementById('id').innerHTML = "False They are not Anagram";
        return;

    }
}


//Task4

function game() {
    setInterval(() => {
        //var obj1 = document.getElementById('n1').value;
        //var obj2 = document.getElementById('n2').value;
        var obj1 = Math.floor(Math.random() * 999);
        var obj2 = Math.floor(Math.random() * 999);
        let obj = {
            "0": " Human ",
            "1": " Cockroch ",
            "2": " Nuclear Bomb "
        };
        nobj1 = eval(obj1) % 3;
        nobj2 = eval(obj2) % 3;
        var a = "";
        if (nobj1 == 0) {
            a = "HUMAN"
        } else if (nobj1 == 1) {
            a = "COCKROCH"
        } else {
            a = "Nuclear Bomb"
        }
        var b = "";
        if (nobj2 == 0) {
            b = "HUMAN"
        } else if (nobj2 == 1) {
            b = "COCKROCH"
        } else {
            b = "Nuclear Bomb"
        }
        var str = "Player 1 (" + a + ") ::  " + obj1 + "  <br> Player 2 (" + b + " )::" + "  " + obj2
            // document.getElementById('n1').innerHTML = obj1
        document.getElementById('num').innerHTML = str



        //document.write(obj1, obj2, obj, obj["0"], typeof 'obj1', typeof 'obj2', typeof 'obj')
        if (nobj1 == nobj2) {
            document.getElementById('imp').innerHTML = "Its's A TIE"
            return false;
        }
        if ((nobj1 == 0 && nobj2 == 1) || (nobj1 == 1 && nobj2 == 0)) {
            document.getElementById('imp').innerHTML = "WINNER :: HUMAN"
        } else if ((nobj1 == 0 && nobj2 == 2) || (nobj1 == 2 && nobj2 == 0))
            document.getElementById('imp').innerHTML = "WINNER :: NUCLEAR BOMB"
        else if ((nobj1 == 1 && nobj2 == 2) || (nobj1 == 2 && nobj2 == 1))
            document.getElementById('imp').innerHTML = "WINNER :: COCKROCH"


    }, 3000);
}