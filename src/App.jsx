import { useState } from 'react'
import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'

function App() {

  return (
    <div className='md:container md:mx-auto'>
      <MyPageContext/>
      <hr />
      <MyPage/>
    </div>
  )
}

export default App
