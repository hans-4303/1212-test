import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  }

  return (
    <div>
        <p>아래 버튼을 누르면 Home으로 돌아갑니다</p>
        <button onClick={() => {goHome()}}>Home으로 가기</button>
    </div>
  )
}

export default About