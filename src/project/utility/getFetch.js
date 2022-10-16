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