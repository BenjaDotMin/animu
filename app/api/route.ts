import { NextRequest } from "next/server";
import {comments} from "../../fake-database/data"; //FAKE DATABASE FOR API TEST

//export const dynamic = "force-static"; //enable caching (disabled by default but test it with npm run build > npm run start)
//export const revalidate = 10; //force new cache every 10 seconds
//note: only GET is cached, rest never are, but if working with headers() cookies() or request, caching wont happen

//read
export async function GET(request: NextRequest){ //requires import
    //simpel test:
    //return new Response("Hi from API"); //Response is just vanilla and is fine

    //optional: only used if any query is in the url( requires nextRequest import and argument)
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query"); //will be true or false
    const filteredComments = query ? comments.filter(comment => comment.text.includes(query)) : comments; //show filtered comments, else show all comments

    //optional: if we want the headers (requires nextRequest import and argument)
    const requestHeaders = new Headers(request.headers);
    console.log("BEARER TOKEN: ", requestHeaders.get("Authorization"));

    //optional: if we want to read cookies
    const requestCookies = request.cookies.get("theme"); //get cookie by name
    console.log(requestCookies);

    //use fake-database
    return Response.json(filteredComments,
        {  
            headers: {
                //"Content-Type": "text/html",  //optional //if we response as actual html (not plain text), use this
                "Set-Cookie": "theme=dark" //optional //SET cookie (yes set in a get) //send back a theme of dark
            }   
        }
    );
}





//add
export async function POST(request: Request){
    const comment =  await request.json(); //this is the thing posted in body > json

    //create a new object that has props id and text props (to match our fake-database)
    const newComment = {
        id: comments.length+1, //dynamically make a new id
        text: comment.text //this is the thing posted in body
    }
    comments.push(newComment); //add new comment to our fakedb (WILL BE LOST ON REFRESH AS ITS NOT REAL AND NOT PERMANT)

    return new Response(JSON.stringify(newComment),
        {
            headers: {"Content-Type": "application/json"},
            status: 201, //200 is for pure json, but a 201 would be more suited as its new successful creation
        }
    )
}