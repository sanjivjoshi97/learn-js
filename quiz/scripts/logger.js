// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg() {
    console.log(`${this.errMsg}`);
}

const obj1 = {
    var1: [1,2,3],
    errMsg: "Error from obj1"
};

const obj2 = {
    var1: [1,2,3],
    errMsg: "Error from obj2"
};

logMsg.call(obj1);
logMsg.call(obj2);
