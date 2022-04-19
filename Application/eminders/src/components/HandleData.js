// Retrieves the list of items from the Express api
function GetData(requestInfo, dataHandlerMethod, requestInit) {
    fetch(requestInfo, requestInit)
    .then(res => {
        if (res.status !== 200) {
            console.error("Response status: " + res.status.toString()); 
        }
        else {
            return res.json();
        }
    })
    .then(jsonData => {
        if (jsonData) {
            dataHandlerMethod(jsonData); 
        }        
        else {
            console.log("Requested data is null");
        }
    }).catch(error => {
        console.log("Data Fetching Error:")
        console.log(error); 
    });
}

export default GetData; 