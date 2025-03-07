const DocsLayout = ({children}) => {
    //use for anything under Docs, even child pages! (aswell as any child folders layout)
    return (
        <div>
            <div>Docs Layout file</div>

            {/* required to show page.tsx content and sibling folders */}
            <div>{children}</div>
        </div>
    )
}

export default DocsLayout