import * as Hapi from "hapi";
import { DB } from "./quotesDb";

class VachanHandler {    

    getQuotes(request: Hapi.Request, h: Hapi.ResponseToolkit) {
        let maxCount : number = Number.parseInt(request.query['max'].toString());
        console.log(this)
        return DB.getPart(maxCount, 0); 
    }
}

const handler = new VachanHandler();
export const deploy = (
    server : Hapi.Server
) => {
    server.route({
        method: "GET",
        path: "/quotes",
        handler : handler.getQuotes
    })
}