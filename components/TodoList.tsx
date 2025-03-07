import Todo from "./Todo"

const TodosList = ({things}) => {

  return <div>
    TodoList Component
    {/* loop over things list */}
    {things.map(thing => (
      //this component had full things list passed in(things), so pass each into a new Todo component
      <Todo thing={thing} key={thing.id}/>
    ))}

  </div>
}

export default TodosList