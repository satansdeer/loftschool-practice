import React from 'react'

const PARAGRAPH = 'paragraph'
const INPUT = 'input'
const BUTTON = 'button'

const remoteLayout = [
    {type: 'input'},
    {type: 'paragraph'},
    {type: 'button'}
]

const Input = () => (<input placeholder="Sample input"/>)

const Paragraph = () => (<p>Sample text paragraph</p>)

const Button = () => (<button>Click me</button>)

const elByType = (type) => {
    switch(type){
        case INPUT:
            return <Input/>
        case PARAGRAPH:
            return <Paragraph/>
        case BUTTON:
            return <Button/>
        default:
        return null
    }
}

const App = () => (
    <>
        {remoteLayout.map(el => (
            elByType(el.type)
        ))}
    </>
)

export default App