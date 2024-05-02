
class Server {
    // Method to process requests and interact with local storage
    static processRequest(request) {
        let responseData = {};
        switch (request.method) {
            case 'GET':
                responseData = Server.handleGetRequest(request);
                break;
            case 'POST':
                responseData = Server.handlePostRequest(request);
                break;
            case 'PUT':
                responseData = Server.handlePutRequest(request);
                break;
            case 'DELETE':
                responseData = Server.handleDeleteRequest(request);
                break;
            default:
                responseData = { status: 400, message: 'Bad Request' };
        }
        return responseData;
    }

    static handleGetRequest(request) {
        const tasks = getTasks();
        return { status: 200, data: tasks };
    }

    static handlePostRequest(request) {
        const tasks = getTasks();
        tasks.push(request.data);
        saveTasks(tasks);
        return { status: 201, message: 'Task added successfully' };
    }

    static handlePutRequest(request) {
        console.log("in server.handlePutRequest ");

        const tasks = getTasks();
        tasks[request.index] = request.data;
        saveTasks(tasks);
        return { status: 200, message: 'Task updated successfully' };
    }

    static handleDeleteRequest(request) {
        const tasks = getTasks();
        tasks.splice(request.index, 1);
        saveTasks(tasks);
        return { status: 200, message: 'Task deleted successfully' };
    }
}

module.exports = Server;
