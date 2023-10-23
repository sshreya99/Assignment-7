/*eslint-env browser*/
/*jslint-env browser*/

//STEP 1
function clickMe(){
    "use strict";
    window.alert("I have been clicked");
}

//STEP 2
var myElement = window.document.getElementById("clickButton");
myElement.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
}

//STEP 3
var clickButtonListen = window.document.getElementById("clickButtonListener");
clickButtonListen.addEventListener("click", clickMe);

//STEP 4
var clickButtonListenerCallBack = window.document.getElementById("clickButtonListenerCallBack");
clickButtonListenerCallBack.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});

//STEP 5
function init() {
    "use strict";
    var clickButtonListenerCallBack1 = window.document.getElementById("clickButtonListenerCallBack1");
    clickButtonListenerCallBack1.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}

window.addEventListener("load", init);

