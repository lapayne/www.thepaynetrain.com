module.exports = async function (context, req) {
    context.bindings.outputSbQueue = req.body;
};