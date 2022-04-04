
module.exports = async function (context, req) {

    context.bindings.message = {
        subject: 'Contact form - thepaynetrain',
        content: [{
            type: 'text/plain',
            value: "test body"
        }]
    };
    context.res = {body: {text: "works"}}
}