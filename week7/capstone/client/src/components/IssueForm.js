import React, { useState } from 'react'

const initInputs = {
  title: "",
  description: ""
}

export default function IssueForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addIssue } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { title, description } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="issue-input"
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="First Name"
        />
      <input 
        className="issue-input"
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Last Name"
        />
      {/* <input 
        type="text" 
        name="imgUrl" 
        value={imgUrl} 
        onChange={handleChange} 
        placeholder="Image Url"/> */}
      <button>Enter</button>
    </form>
  )
}