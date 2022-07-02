const client = require('@sendgrid/client')


// Configure client.
client.setApiKey(process.env.SENDGRID_API_KEY)



exports.handler = async function(event, context) {
    
    try {
        // Extract email from querystring. 
        const { email } = event.queryStringParameters

        // Setup data schema for fetch.
        const data = {
            "list_ids": [
                "73626353-135f-4029-8085-8bcc51dc2050",
            ],
    
            "contacts": [
                {
                    email,
                }
            ]
        }

        // Setup request model
        const request = {
            url: `/v3/marketing/contacts`,
            method: 'PUT',
            body: data,
        }

        const response = await client.request(request)

        return {
            statusCode: 200,
            body: JSON.stringify({ response }),
          };

        
    } catch(error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: error.message }),
        }
    }
}


