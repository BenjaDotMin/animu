const TodosLayout = ({children}) => {
    //use for anything under (dashboard), even child pages! (aswell as any child folders layout)
    return (
        <div>
            <div>Todos Layout file</div>

            {/* required to show page.tsx content and sibling folders */}
            <div>{children}</div>
        </div>
    )
}

export default TodosLayout