// Retrieves the list of items from the Express api
function GetData(requestInfo, dataHandlerMethod) {
    fetch(requestInfo)
    .then(res => {
        if (res.status !== 200) {
            console.error("Response status: " + res.status.toString()); 
        }
        else {
            return res.json();
        }
    }
    )
    .then(jsonData => {
            dataHandlerMethod(jsonData); 
        }
    );
}

export default GetData; 