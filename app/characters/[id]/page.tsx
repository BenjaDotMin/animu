import Add from "@/components/Add/Add";
import Genres from "@/components/Genres/Genres";
import Info from "@/components/Info/Info";
import Carousel from "@/components/Carousel/Carousel";
import  styles from "./page.module.scss"; //import a css f

const Details = async ({params}) => {
    const data = await params; //v15+ needs this as its now async, so add async to function
    
    const fetchData = () => fetch(`https://api.jikan.moe/v4/characters/${data.id}`).then(res => res.json()).then(d => d.data);
    let item = await fetchData();    
    //console.log(item);
  
    return (
        <div className={styles.detail}>
            <div className={styles.hero}>
                <img src={item.images.webp.image_url} alt="" />
                <div className={styles.heroContent}>           
                   <div className={styles.titles}>
                        <h2 className="fs-lg ff-heading uppercase white-text">{item.name}</h2>
                   </div>
                </div>
            </div>

            <div className={`${styles.container} container`}>              
                <p className="fs-sm white-text">{item.about}</p>
            </div>
        </div>
    )
}

export default Details;