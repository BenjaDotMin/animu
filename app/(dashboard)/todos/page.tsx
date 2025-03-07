import styles from "../style.module.css"; //import a css 
//import TodosList from "@/components/TodoList";

//handy fetch async function
// const getData = async () => {
//     const things = await fetch("...") //fetch something...
//     console.log("things: ", things)
//     return things;
// }

const TodosPage = async () => {
    //await new Promise(resolve => setTimeout(() => resolve(), 2000));  //FAKE TIME BLOCKER, TO TEST LOADING.TSX FILE
    //await new Promise((resolve, reject) => setTimeout(() => reject(), 2000));  //FAKE TIMED ERROR, TO TEST ERROR.TSX FILE
    
    //const todos = await getData(); //fetch data using getData function above

    //use styles as an object, title is a class in css file
    return <div className={styles.title}>
            Todos Page Content

            {/* use form component */}
            {/* <TodosFormJS/> */}

            {/* instead of uisng client side js, we can *run* functions on the server without js! (doesnt work) */}
            {/* <TodosFormServer/> */}

            {/* pass in full things list into component */}
            {/* <TodosList todos={things}/> */}
        </div>
    //example of 2 classes: className={`${styles.title} ${styles.another}`}    
}

export default TodosPage