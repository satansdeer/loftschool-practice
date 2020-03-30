import React, { useState, useRef, useEffect } from "react"
import { AddItemButton, AddItemButtonDark, NewItemFormContainer } from "./styles"

interface IAddNewItemProps {
  onAdd(text: string): void
  toggleButtonText: string
  dispatchButtonText: string
  dark?: boolean
}

// type Point {
//   x: number
// }
// type Point {
//   y: number
// }

// const p:Point = {};
// console.log(p)

export const AddNewItem = ({
  onAdd,
  toggleButtonText,
  dispatchButtonText,
  dark
}: IAddNewItemProps) => {
  const [showForm, setShowForm] = useState(false)
  const [text, setText] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const ButtonComponent = dark ? AddItemButtonDark : AddItemButton

  useEffect(() => {
    if (showForm) {
      inputRef.current?.focus()
    }
  }, [showForm])

  return (
    <>
      {showForm ? (
        <NewItemFormContainer>
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button
            onClick={() => {
              onAdd(text)
              setText("")
              setShowForm(false)
            }}
          >
      {dispatchButtonText}
          </button>
        </NewItemFormContainer>
      ) : (
        <ButtonComponent
          onClick={() => {
            setShowForm(true)
          }}
        >
          {toggleButtonText}
        </ButtonComponent>
      )}
    </>
  )
}
