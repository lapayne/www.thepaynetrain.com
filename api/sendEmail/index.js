
module.exports = async function (context, req) {
    var message = 'Service Bus queue message created at ';
        context.bindings.sbMessage = message;
    }