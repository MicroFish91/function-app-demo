import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const env = process.env?.ITS_ALIVE ? "It's alive." : "jk";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: env
    };

};

export default httpTrigger;