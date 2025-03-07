import  styles from "./style.module.scss"; //import a css file
import Link from 'next/link';

const DocsPage = () => {
    //use styles as an object, title is a class in css file
    return <div className={styles.title}>
        Docs Page Content
        {/* example of 2 classes: className={`${styles.title} ${styles.another}`}    */}
        <Link href="/docs/325">Go to doc 325</Link> 
    </div>
}

export default DocsPage