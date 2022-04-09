
module.exports = async function (context, req) {
    var message = 'Service Bus queue message created at ';
        context.log(message);   
        context.bindings.sbMessage = message;
    }