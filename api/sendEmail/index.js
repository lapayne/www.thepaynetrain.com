module.exports = function (context, input) {
    var message = {
        "personalizations": [ { "to": [ { "email": "lee@thepaynetrain.com" } ] } ],
        from: { email: "contact@thepaynetrain.com" },
        subject: "contact form",
        content: [{
            type: 'text/plain',
            value: "test message"
        }]
    };

    return message;
};