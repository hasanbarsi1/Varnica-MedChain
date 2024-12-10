import React, { useState } from 'react'

const Chat = () => {

    const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Message sent:', message); // Replace with your send logic
      setMessage(''); // Clear the input field
    }
  };
  return (
    <div className='bg-[#e5ebf0] h-screen'>

        {/* HEADER */}
        <div className='flex justify-between items-center p-4 border-b-2 border-black-500 bg-white'>
          <h1 className='text-2xl font-bold'>Foodiex</h1>
        </div>

        <div className='px-6 pt-4'>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

            <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
            </div>

            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>

            <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
            </div>
            
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        </div>

        {/* INPUT CHATBOX */}
        <div className='fixed bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md'>
            <div className="flex items-center p-4 border-t bottom-0">
                <input
                    type="text"
                    className="flex-grow px-4 py-2 border-2 rounded-lg bg-white border-green focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSend();
                    }}
                />
                <button
                    onClick={handleSend}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                >
                    <i className="bx bx-send text-2xl"></i>
                </button>
            </div>
        </div>

      
    </div>
  )
}

export default Chat
