
function runTests(testType)
{
    switch (testType)
    {
        case "smoke":
            console.log("Running smoke cases")
            break;
        case "sanity":
             console.log("Running sanity cases")
             break;
        case "regression":
              console.log("Running regression cases")
              break;
        default:
              console.log("Running smoke cases")
              break;
    }
}


runTests("Smoke")
runTests("sanity")