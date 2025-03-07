import { NextResponse, NextRequest } from "next/server";


//RUNS ON EVERY PAGE, IN CASE WE WANT TO TEST/CHANGE/SET THINGS ANYWHERE
export function middleware(request: NextRequest){ //requires import
    //custom matcher, *requires* "matcher" below
    //return NextResponse.redirect(new URL("/else", request.url));

    //or *only* use this for conditional
    if(request.nextUrl.pathname === "/something"){
        return NextResponse.redirect(new URL("/else", request.nextUrl)); //if user hits /something, redirect to /else (can be /, /docs or /todos or something)
    }
    //note: using rewrite instead of redirect would let use show /else page, but show /something in the url!

    // set cookie
    //const response = NextResponse.next();
    // const themePreference = request.cookies.get("theme");
    // if(!themePreference){
    //     response.cookies.set("theme", "dark"); //create a theme of dark if none exists
    // }

    //set header
    //const response = NextResponse.next();
    //response.headers.set("custom-header", "custom-value");
    //return response;
}


//custom matcher, *not needed for conditional*
// export const config = {
//     matcher: "/something"  //if user hits /something, redirect using middleware function above (can be /, /docs or /todos or something)
// }