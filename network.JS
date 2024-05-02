class Network {
    static sendRequest(request) {
        console.log("in network class ");

        let ser = new server();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const responseData = ser.processRequest(request);
                resolve(responseData);
            }, 1000); // Simulate delay of 1 second
        });
    }
}

module.exports = Network;
