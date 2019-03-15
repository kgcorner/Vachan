import * as fs from 'fs'
import { Quote } from './quotes';
class QuotesDB {
    private quotes :Quote[] = [];
    constructor() {
        let data = fs.readFileSync(__dirname + '/quotes-source.json')
        let rawData =  JSON.parse(data.toString());
        let i =1;
        rawData.forEach((element : any) => {
            let q = new Quote();
            q.id = i;
            q.dateAdded = new Date();
            q.quote = element.quote;
            q.author = element.author;
            this.quotes.push(q);
            i++;
        });
        console.log("Fetched quotes count : "+ this.quotes.length);
    }

    getAll() {
        return this.quotes;
    }

    getPart(count: number, startFrom: number) {
        return this.quotes.slice(startFrom, startFrom+count);
    }
}

let quotes = new QuotesDB();
export {quotes as DB}