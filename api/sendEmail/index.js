module.exports = async function (context, req) {
    context.bindings.outputSbQueue = req.body.form-message;
    context.bindings.res = {
        status: 302,
        headers: {
            'Location': 'https://www.thepaynetrain.com/?name=Message sent successfully I will respond as soon as I can. '
        }
    };
};