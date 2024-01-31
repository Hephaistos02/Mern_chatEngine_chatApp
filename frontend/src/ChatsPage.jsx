import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) =>{
    return (
    <div style={{height:'100vh'}} >
         <PrettyChatWindow
      projectId="82912647-7053-4b37-9a17-b6cd31ef5960"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%' }}
    />
    </div>
        )
}




export default ChatsPage