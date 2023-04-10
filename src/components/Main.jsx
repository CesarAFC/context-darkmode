import React from 'react'

const Main = ({theme, text, auth}) => {
  return (
    <main className={theme}>
        {auth ? <p>{text.mainWelcome}</p> : <p>{text.mainHello}</p>}
        <p>{text.mainContent}</p>
    </main>
  )
}

export default Main