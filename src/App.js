import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'

function App(){
  return (
    <ChatEngine
			height='100vh'
			userName='amgeraldo14'
			userSecret='admin1'
			projectID='386dcf5c-d4aa-455b-bf44-d5134583b703'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
		/>
  )
}

export default App