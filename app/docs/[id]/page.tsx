
const DocsIdPage = async ({params}) => {
    const data = await params; //v15+ needs this as its now async, so add async to function
    
    console.log("data: ", data); //NOTE: by default these pages are SSR, so we dont have JS, so this will show in terminal, not browser console
    
    //so we can now do a fetch or something based on url or .id
    //fetch(`https://api.jikan.moe/v4/anime?q=${data.id}`).then(res => res.json()).then(d => console.log(d)); //consider doing an await function instead and use: await fetch() like in app/(dashboard)/todos/page.tsx
    //note: if fetch/cookies/headers is used, it knows its a dynamic page so wont be cached, because we are fetching something...if nothing like that is used, its cached
   
    return (
        <div>
            {/* NOTE: .id MUST match the name of the folder as the folder name creates the keys in {params} */}
            Docs ID page content: {data.id}
            <br /><br /><br />
            <p>if the time is changing, it means page is not cached! (use npm run build >> npm run start to test as npm run dev never caches)</p>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    )
}

export default DocsIdPage;



//TO BE CLEAR, BOTH ARE HAPPENING! CREATE ANYTHING LISTED BELOW AT BUILD TIME, BUT ANYTHING ELSE ABOVE WHEN HITTING THE URL (RUN TIME)
//using generateStaticParams to create a list of *pre-generated* pages that will not change (like a blog or API call), this is better than creating them *everytime* the url is hit
//Note: this runs before the html above
export const generateStaticParams = async() => {
    //IF YOU ARE USING NPM RUN DEV, NOTHING IS CACHED!!!!!!! USE NPM RUN BUILD >> NPM RUN START TO TEST!!!!!!!!!!!!
    //ONLY PAGES LISTED HERE ARE PRE-GENERATED, ANY OTHERS ARE CREATED DYNAMICALLY WHEN HITTING THE URL
    //return [{id:"1"}, {id:"2"}, {id:"3"}]; //run npm build, and see .next/server/app/docs are now 1/2/3.html etc
    //Note: pages for 1/2/3 are now created at *build time* (when you or server run npm build), so the time will show the past. But if you hit any other /id, it will show the current time as those are created by hitting the url dynamically (unless you revisit it, as its cached after first visit... because after you hit the url, its added as a static file - DONT USE DEV TO TEST)
    
    //using data from api to make pre-generated pages
    const users = await fetch('http://jsonplaceholder.typicode.com/users').then((res) => res.json())
    //console.log(users); //see what we have access to, .name etc
    //return an array (map makes a new array), containing many objects inside (like the test example line 32)
    return users.map(user => ({
      id: user.name //the users name will be for the url, so instead of like /1, it will be /Leanne (better to use user.id)
    }))
    //NOW RUN BUILD, TO SEE A BUNCH OF PAGES CREATED IN .next/server/app/docs
}


//if pages dont exist with a listed id, show 404 page instead (good for blogs):
//export const dynamicParams = false;
