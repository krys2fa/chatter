import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="cc19afdc-1211-4886-b475-fd4c62485b1d"
      userName="admin"
      userSecret="p@$$w0rd"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
}

export default App;
