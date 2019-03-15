import * as Hapi from "hapi";
import * as Api from './apis/vachan';
export const startServer = () => {
    let server : Hapi.Server = new Hapi.Server({
        port : 3300,
        routes: {
            cors: {
              origin: ["*"]
            }
        },
        host : 'localhost'
    });

    const init = async () => {
        Api.deploy(server);
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    };
    
    process.on('unhandledRejection', (err) => {
    
        console.log(err);
        process.exit(1);
    });
    
    init();
}