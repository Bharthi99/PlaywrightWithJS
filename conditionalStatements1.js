
function launchBrowser(browserName)
{
    if(browserName.toLowerCase() === "chrome"){
        console.log("Running chrome")
    }else if(browserName.toLowerCase() === "firefox"){
        console.log("Running firefox")
    }else {
        console.log("Running other browser")
    }
}
launchBrowser("FIREFOX")
launchBrowser("chrome")
launchBrowser("edge")