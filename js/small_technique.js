function openShutManager(oTargetObj) {
    var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
    if (targetObj.style.display != "none") {
        targetObj.style.display = "none";
    } else {
        targetObj.style.display = "block";
    }
}