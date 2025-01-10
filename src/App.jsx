import React, {useState} from 'react'
import ChatBotStart from "./Components/ChatBotStart";
import ChatBotApp from "./Components/ChatBotApp";

export const App = () => {
  const [isChatting, setIsChatting] = useState(false)

  const handStartChat = () =>{
    setIsChatting(true)
  }

  const handleGoBack = () => {
    setIsChatting(false)
  }

  return (
    <div className='container'>
      {isChatting ? (
        <ChatBotApp onGoBack={handleGoBack} />
      ) : (
        <ChatBotApp onStartChat={handStartChat} />
      )}
    </div>
  )
}
export default App
