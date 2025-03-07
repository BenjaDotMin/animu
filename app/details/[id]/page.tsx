import Add from "@/components/Add/Add";
import Genres from "@/components/Genres/Genres";
import Info from "@/components/Info/Info";
import Carousel from "@/components/Carousel/Carousel";
import  styles from "./page.module.scss"; //import a css f

const Details = async ({params}) => {
    const data = await params; //v15+ needs this as its now async, so add async to function
    
    const fetchData = () => fetch(`https://api.jikan.moe/v4/anime/${data.id}`).then(res => res.json()).then(d => d.data);
    let item = await fetchData();
    console.log(item);
    //note: if fetch/cookies/headers is used, it knows its a dynamic page so wont be cached, because we are fetching something...if nothing like that is used, its cached
   
    return (
        <div className={styles.detail}>
            <div className={styles.hero}>
                <img src={item.images.webp.large_image_url} alt="" />
                <div className={styles.heroContent}>           
                   <div className={styles.titles}>
                        <h2 className="fs-lg ff-heading uppercase white-text">{item.title_english || item.title}</h2>
                        <Genres genres={item.genres}></Genres>
                        <Info score={item.score} episodes={item.episodes} rating={item.rating}></Info>
                   </div>
                </div>
            </div>

            <div className={`${styles.container} container`}>
                <h2 className="fs-md white-text">Synopsis</h2>
                <p className="fs-sm white-text clamped">{item.synopsis}</p>
                <Add></Add>

                {/* <Carousel title="Popular" items={popularAnime}></Carousel>
                <Carousel title="Popular" items={popularAnime}></Carousel>
                <Carousel title="Popular" items={popularAnime}></Carousel>
                <Carousel title="Popular" items={popularAnime}></Carousel> */}
            </div>
        </div>
    )
}

export default Details;