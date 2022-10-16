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
