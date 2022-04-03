import { data } from "./data";

let max_articles;
function createLookup(){
    let lookup_articles = {};
    max_articles = 0;
    data.forEach((d,i)=> {
        if (d.articles > max_articles) max_articles = d.articles;
        lookup_articles[d.date]= d.articles;
    });
    return lookup_articles;
}
createLookup();
