
class FXMLHttpRequest {
    constructor() {
        this.onreadystatechange = () => {};
        this.readyState = 0;
    }

    open(method, url, async = true) {
        console.log("in fadjax.open ");
        this.method = method;
        this.url = url;
        this.async = async;
    }

    send(data = null) {
        console.log("in fadjax.send ");

        this.readyState = 1;
        this.onreadystatechange();
        this.data = data;
        this.readyState = 2;
        this.onreadystatechange();

        const request = {
            method: this.method,
            url: this.url,
            data: this.data,
            index: this.index // Additional property for PUT and DELETE requests
        };
        let net = new Network();
        net.sendRequest(request)
            .then(response => {
                this.responseText = response.data || '';
                this.status = response.status || 200;
                this.readyState = 4;
                this.onreadystatechange();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

module.exports = FXMLHttpRequest;
