
module.exports = {
    // Retrieves the list of items from the Express api
    RequestJsonData: function (requestInfo, dataHandlerMethod) {
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
    }, 
    PostData : function () {

    }
}