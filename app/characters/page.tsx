import  styles from "./page.module.scss"; //import a css file
import {Link} from 'next-view-transitions';

const Details = () => {
    //use styles as an object, title is a class in css file
    return( 
        <div>
            <img className='hero-image' src="https://cdn.myanimelist.net/images/anime/1244/138851l.webp" alt="" />
            <Link href={"/"}>HOME</Link>
        </div>
    )
}

export default Details