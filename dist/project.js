
//use this space to declare all global variables
//all global projects will be under the app object
var app = {}

app.apiURLs = [{ name: "", url: "" }]
app.apiToken = ""


function findElementByAtt(path, selector) {

    for (element of path) {
        try {
            if (element.hasAttribute("comp-type")) {
                if (element.getAttribute("comp-type") === selector) {
                    return element
                }
            }
        }
        catch (err) {
            return false;
        }
    };
}




function getFetch(fetchURL, headers, callback) {
    fetch(fetchURL, {
        headers: headers,
        method: "GET"
    })
        .then(res => res.json())
        .then((data) => formResponse = data)
        .then((data) => { if (callback === null) { return data } else { callback(data) } })
        .catch((error) => {
            console.error('Error:', error);
            //responsePanel('error')
        });
}
function postFetch(endPoint, headerObj, bodyObj, callback) {
    fetch(endPoint, {
        headers: headerObj,
        method: "POST",
        body: JSON.stringify(bodyObj)
    })
        .then(res => res.json())
        .then((data) => formResponse = data)
        .then((data) => callback(data))
        .catch((error) => {
            console.error('Error:', error);
            alert("Error: " + error)
            //responsePanel('error')
        });
}
