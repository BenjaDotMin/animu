
import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Carousel from "@/components/Carousel/Carousel";
import {Link} from 'next-view-transitions';

//import type { Metadata } from "next";

//use a component
//import NewTodoForm from "@/components/NewTodoFormJS"; //@ is alias for "from root"

//custom page tab titles etc (import required) //FOR LAYOUTS OR PARENTS, so child pages fallback to this
// export const metadata: Metadata = {
//   title: {
//     default: "some fallback title",
//     template: "%s suffix here", //if child has a metadata title, $s will be the title, plus "suffix here"
//     absolute: "" //add this *only* to a child that needs to be unique even if parents has a "template" set. (remove it from parent, put it in a child)
//   },
//   description: "Generated by me for testing",
// };

//custom page tab titles etc (no import required, but cant be used with use client, move use client stuff into its own component)
// export const metadata = {
//   title: "Home",
//   description: "Generated by me for testing",
// };

export default async function Home() {

  const API_URL = 'https://api.jikan.moe/v4';
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const featureList = ["favorite", "upcoming", "bypopularity", "airing"];
  const popularCarousel = ["Most favourited", "Popular upcoming", "Popular anime", "Popular airing", "Popular completed"];

  const apiCall = async (feature, limit, i) => {
    await delay(i*1000);
    const result = fetch(`${API_URL}/top/anime?filter=${feature}&limit=${limit}`).then(res => res.json()).then(data => data.data);
    return result;
  }

  let test = [];
  let featuredAnime = [];
  featureList.map((feature, i) => {
   test.push(apiCall(feature, 1, i));
  });
  await Promise.all(test).then(values => featuredAnime = values);
  //console.log(featuredAnime);

  let testLong = [];
  let featuredAnimeLong = [];
  featureList.map((feature, i) => {
    testLong.push(apiCall(feature, 10, i));
  });
  await Promise.all(testLong).then(values => featuredAnimeLong = values);
  //console.log(featuredAnimeLong);

 

  //optional for images
  // const imageLoader = ({ src, width, quality }) => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  // }

  
  //const [thing, setThing] = useState("default thing"); //use react *local state*
  //setThing("new value"); //change thing var to this value
  

  return (
    <div className="page">

      <Hero items={featuredAnime}></Hero>

      {featuredAnimeLong.map((list, i) => <Carousel key={i} title={popularCarousel[i]} items={list}></Carousel>)}

      {/* IMAGES */}
      {/* use next image for performance */}
      {/* note, the src image size is 1280x720, but next seems to do some magic and scale down a copy, based on the dimensions we set (for aspect ratio) */}
      {/* it does not determine the rendered size of the image, which can be controlled by CSS */}
      {/* <Image
        //loader={imageLoader} //optional for custom urls
        src="/landscape.webp"
        width={500}
        height={500}
        alt="Picture of the author"
        //fill={true} //replace width/height with this if it just needs to fill a parent (like a background with unknown dimensions)
        //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" //...see https://nextjs.org/docs/pages/api-reference/components/image#sizes
        //quality={75} // {number 1-100}
        //priority={true} //true = preload (lazy disabled by default if priority is used, dont use with loading tag also)... You should use the priority property on any image detected as the Largest Contentful Paint (LCP)...Should only be used when the image is visible above the fold.
        //loading = 'lazy' // {lazy} | {eager} //default is lazy, which only loads when nearly in view
        //placeholder = 'empty' // "empty" | "blur" | "data:image/..." //A placeholder to use while the image is loading.
        //unoptimized = {true} //use src file or not (doesnt optimise), default false
        onLoad={img => console.dir(img.target)} //do stuff when loaded! fires when placeholder option is removed
      /> */}



      {/* use imported component */}
      {/* <NewTodoForm/> */}
    </div>
  );
}
