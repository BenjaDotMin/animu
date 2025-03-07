

//https://frontendmasters.com/courses/next-js-v3/


//project setup
//nvm use 20.18.0
//npx create-next-app@latest AppNameHere (cant contain caps)
//said no for "src directory", so code runs from root of created folder 
//cd into created folder
//run: npm run dev

//OR manual setup
//npm init -y
//nvm use 20.18.0
//npm i next@latest react@latest react-dom@latest
//in package.json, add scripts (see file)
//create app/layout and app/page (see files)
//create public folder for static assets like images, fonts etc (use / to start from public folder)
//run: npm run dev


//react is client side, meaning it will start off with 1 div and fill it using js. Bad for SEO
//next.js fixes this by changing react to server-side *by default* and renders full pages before sending them, and adding interaction after


//ROUTING
//next comes with its own router (react alone doesnt)
//add app/docs/page.tsx (see file)
//now visit /docs, and we have a new page! no messing with settings
//grouping:
//folders with () will not be part of the url, this is useful if you want to group files up, but not effect the url
//so app/(dashboard)/page.tsx would still be the home page and cause errors if you have app/page.tsx
//you can do app/(dashboard)/todos/page.tsx, and visit /todos to get a todos index page
//a layout.tsx file inside (dashboard) would effect every file in that grouped folder
//dynamic:
//folders with [something] are dynamic, they can use the url to grab data and display the correct things
//so app/docs/[id]/page.tsx would be the url: /docs/325, which would show *single* item in the data with an id of 325 
//docs/anythingHere, it will show the page and use "anythingHere" to show its content
//catch all:
//app/docs/[[...id]]/page.tsx would show that page, even if we have many url segments /245/lol/no/hi/yes, would still show the same page.tsx
//note [[]] will allow you to visit /docs which shows the docs/325 page, but 1 [] will not
//prebuild static pages:
//the problem with SSR pages, the app doesnt know what to render until the url is hit, and then fetches that data to show **every time**
//so for pages content that will never change, like a blog post or API call, it would be a waste to re-fetch the data everytime, as its the same 
//for this we can use generateStaticParams, in a dynamic page...so it builds all the pages out for us as static prebuilt files


//LAYOUTS
//anything global such as navs, etc can be used/found in app/layout
//layouts will be used for its page.tsx, and any sibling/child folders (aswell as the child folders layout)
//note: a layout file requires {children} prop, to show its relevent page.tsx content
//if you need no root layout (every page is different, no constant header footer ect), place root layout page in a (home) folder, and any route folders in there, now page.tsx has its own layout for homepage
//note: (dashboard) has /todos for the url and no page.tsx, so that *wont* be the home index. Because (home) would be ignored, (home)/page.tsx is still the home page, but now has its own layout
//the goal is to *not* have a layout on the root, but create sections with () that have their own layout inside each if required


//TEMPLATES
//much llike layouts, except *everything* on the page is refresh. Unlike layours which only refresh components if they (or url) change


//NAVIGATION
//import and use Link, see app/layout


//IMAGES
//see app/page.tsx


//STYLING
//anything global such as fonts etc can be used/found in app/layout
//for vanilla css, you can just add a css folder **to root, not /app**, and place it at root or we can use css modules
//css modules:
//add a style.module.css to a root folder, can import a file from any location though if needed (see docs/page.tsx and docs/style.module.css)
//adding scss:
//npm install --save-dev sass
//change file names and imports to .scss (even the style.module ones)


//COMPONENTS
//if a component has *any* interactivity (even a click) or *local* state, then we need js, so we need a client side component
//create components/NewTodoForm.tsx (see file)
//import and use NewTodoForm in app/(dashboard)/todos/page.tsx (see file)
//IF A COMPONENT REQUIRES CLIENT SIDE INTERACTION, BUT ALSO IS IN A SERVER SIDE PAGE, MAKE A NEW COMPONENT AND PUT CLIENT SIDE THINGS IN THERE
//note: making a client side component, also makes *all* its children cliend side, be careful


//ERROR/LOADING
//create (dashboard)/todos/loading.tsx
//now if anything in this component waits for anything, it isnt rendered until its done! Uses loading.tsx until its ready
//create (dashboard)/todos/error.tsx
//now if anything in this component errors, swap component for error.tsx


//CUSTOM 404 PAGES
//add not-found.tsx to /app (see file)


//LOADING STATE
//create loading.tsx along side whatever page.tsx needs it (see dashboard/todos/loading.tsx and its page.tsx line 12)


//ERROR STATE
//create loading.tsx along side whatever page.tsx needs it (see dashboard/todos/error.tsx and its page.tsx line 13)


//SUSPENSE
//put a fake Promise with a timeout, or a fetch in a component
//wrap a <Suspense> tag around that component
{/*
    import {Suspense} from "react";
    <Suspense fallback={<p>Loading thing.." </p>}>
        <Thing></Thing>
    </Suspense> 
*/}


//ANIMATION //EXIT ANIMATIONS DO NOT SEEM TO WORK WITH NEXT 14/15, CONSIDER VIEW-TRANSITIONS INSTEAD (BELOW)
//npm i motion --legacy-peer-deps (use flag until motion works with react 19)
//import { motion } from "motion/react"
//add "use client" //REQUIRED as motion is client side (split into a new component with this, if needed)
//see examples in Tutorials/JS/Animation/Framer Motion/pages/index.js
// add something like:
// <motion.div className={styles.test} 
//    animate={{
//       scale: 2,
//       transition: { duration: 2 }
// }} />


//VIEW TRANSITION API:
//npm install next-view-transitions
//in app/layout.tsx: import {ViewTransitions, Link} from 'next-view-transitions';
//add <ViewTransitions> around {children} (or anything else it needs to wrap, usually its around <html> tags)
//Note: libraries version of Link (still called Link) is needed to modify the current Link from next so REPLACE LINK FROM NEXT, WITH LIBRARY VERSION, ON *EVERY PAGE*
//Note: "use client" must be used in pages, as its client side animation
//see G:\My Drive\Tutorials\CSS\CSS page transition - not seamless, or youtube vid: https://www.youtube.com/watch?v=Wi75oM0nt3A&t=1s 



//SMOOTH SCROLL
//npm i @studio-freight/react-lenis
//in root layout (or per page): import { ReactLenis } from "@studio-freight/react-lenis";
//wrap everything in the page with <ReactLenis root>  </ReactLenis>
//Note: "use client" must be used in pages, as its client side animation



//API (ROUTE HANDLERS)
//like a normal route, except you can control custom requests with crud (create, update, delete)
//normal routes give us html, but route handlers let us control the response
//note: this is known as RESTful, because its using the url to decide what to do (/users or /users/1) etc
//create app/api/route.ts (see file) (route.ts/js is convention and cant be called anything else), you can nest these as much as needed for the url to make sense
//note: each page can have its own API folder, it doesnt need to be a global folder
//create /fake-database.data.ts (not in /app) as we need a fake database for our API to "talk to" (API sit between db and app)
//now go to /api (just hitting the URL will trigger the GET)
//test using thunderclient extension > new request > set dropdown to GET >  add local url > send

//using POST
//change dropdown to post > body tab > json tab > add {"text": "added by post"}
//now do another get, to see its added! (WILL BE LOST ON REFRESH AS ITS NOT REAL AND NOT PERMANT)
//for dynamic routes (get a specific id etc), we can follow the same structure as pages
//create app/api/[id].route.ts (see file)
//test using http://localhost:3000/api/3 in browser or thunderclient

//using PATCH
//change dropdown to patch > add url that has an id > body tab > json tab > add {"text": "updated by post"}

//using DELETE
//change dropdown to delete > add url that has an id > nothing needed body tab > json tab
//now do a get request to /api, and see comment 3 is gone

//using queries
//we can now show all (/api) or a single item (/api/3), but what if we need to search for only a few?
//added query part to app/api/route.ts
//test /api?query=first, to see only first comment returned
//test /api?query=ir, to see only first and third comment returned

//headers
//headers hold metadata around an api request and response. Sent by the server to help the server understand correctly
//user-agent: which browser and OS is being used by the client (browser) for specific uses/response/analytics
//accept: text/video/iamge formats etc...return whats suitable for the client (browser), webp etc
//authenticate: used by client (browser) to identify itself to the server for auth

//response headers
//only sent back to the client (browser), can contain info about the server and data sent
//content-type: media type of the response. response is text/html for html, or application/json for json etc
//in thunderclient make a get request to /api > see theres a 2 next to headers (left side)
//add a third, Authorization (auto fills) with a value of Bearer 12345 > see console logs out (terminal) the token value 
//in browser inspector > network tab > click api > headers tab > response headers > see content type is text/plain;charset=utf-8.... so if this response was wrapped in <h1> they would show as text and not be treated as html
//to show the response as a h1 instead, set content type to text/html (see app/api/route.ts), this is how you send back html as a response

//cookies
//small peices of data that server sends *back* to client(browser)
//browser can store and send them again later, like...
//sessions: logins, carts
//personalisation: settings, themes
//tracking: recording, analyzing behaviour
//see /app/api/route.ts for cookie *setting* in a get request
//in thunder client > make a get request to /api > right hand side > cookies tab > see theme of dark is set

//middleware:
//intercept requests and responses to change/set/test on any page
//can mess with cookies/headers in middleware, just like in api requests
//create /middleware.ts at root (see file)

//youtube: codevolution


//SERVER ACTIONS/FUNCTIONS
//interaction by user, but runs on the server!
//can be compared with an api route (which fetch something based off a url)
//https://www.youtube.com/watch?v=xWFbnrTap3M


//DEPLOYMENT
//run npm run build && npm run start (this is what the server would do)
//if warning/errors popup about  go into next.config.js, add: typescript:{ignoreBuildErrors:true}, eslint:{ignoreDuringBuilds: true} (see file)
//put it on github as you would normally for gitPages
//login into your vercel account > add new > select github repo > deploy
//check tutorials/hosting if needed
//codevolution version:
//add project to github > go to vercel site and login > add new > import repo > set preset to Next > for root directory select project > open env variables > paste in keys from env.local (can copy paste all at once) > deploy
//note: if you have a custom domain, point it at the url created by vercel

//AUTH
//look into NextAuth


//PARALLEL ROUTES
//show multiple different pages in one *layout*, useful for admin layouts or splitting UI
//useful to add loading/error to *some* parts of a page, but not others, as parallel routes get a folder to hold loading/error, where as components do not
//instead of using components to build pages, we can use "slots"
//in page folder with a layout, add folder with a @, like docs/@users/page.tsx and docs/@info/page.tsx (does not create a url for us)
//now just use them in the html like {users} //remember to add {children} to show the content in page.tsx too!
//in the layout file, add {users, info} to where you pass in things 
//https://www.youtube.com/watch?v=697kNwfU-4M


