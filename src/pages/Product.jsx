import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  const [inputText, setInputText] = useState('')

  return (
    <div>
        <h1>값을 입력받아서 페이지를 이동합니다</h1>
        <input type="text" name="" id="" onChange={(event) => {setInputText(event.target.value)}} /><Link to={`${inputText}`} state={inputText}>페이지로 이동</Link>
    </div>
  )
}

export default Product