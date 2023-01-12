module.exports = async function (context, req) {
    const { CosmosClient } = require("@azure/cosmos");

    const endpoint = process.env["AccountEndpoint"]
    const key = process.env["AccountKey"]
    const client = new CosmosClient({ endpoint, key });
    const container = client.database("homepages").container("cv");

    const { resources } = await container.items
        .query("SELECT * from c where c.section='about'")
        .fetchAll();
            context.res.body = JSON.stringify(resources);
}