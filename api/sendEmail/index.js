
module.exports = async function (context, req) {

    context.bindings.message = {
        subject: "Contact form - thepaynetrain",
        content: [{
            type: 'text/plain',
            value: "no body test"
        }]
    };
}