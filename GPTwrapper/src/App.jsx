import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [model, setModel] = useState("gemini-1.5-flash");
  const [socket, setSocket]=useState(null)
  const [chat, setChat] = useState("");
  const [response, setResponse] = useState("");

    //hello new change
  useEffect(()=>{
    const ws=new WebSocket('ws://localhost:3000')

    setSocket(ws)
  },[])

//   const sendChat = async () => {
//     setResponse("Loading...");
//     try {
//       const res = await axios.post("http://localhost:3000/chat", { chat,model });
//       setResponse(res.data.ans);
//     } catch {
//       setResponse("Error. Try again.");
//     }
//   };
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-2">Chat</h1>

//       <textarea
//         className="border w-full p-2 mb-2"
//         rows="4"
//         value={chat}
//         onChange={(e) => setChat(e.target.value)}
//         placeholder="Ask something"
//       />
//       <select value={model} onChange={(e) => setModel(e.target.value)}>
//         <option value="gemini-1.5-flash">Gemini 1.5 Flash</option>
//         <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
//       </select>
//       <br></br>
//       <button
//         onClick={sendChat}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-40"
//       >
//         Send
//       </button>



//       <div className="mt-4">
//         <p><b>Response:</b> {response}</p>
//       </div>
//     </div>
//   );
}

export default App;
