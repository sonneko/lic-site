function layout(children) {
    return (
        `
            <h1>This is header</h1>
            ${children()}
            <h1>This is footer</h1>
        `
    )
}