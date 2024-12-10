import React from 'react'

const Neo = () => {
    
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[#ecf0f3]'>
        <div style={{width: "200px", height: "400px", background: "#ecf0f3",borderRadius: "10px", boxShadow: "-3px -3px 7px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.25)"}}></div>
        <button style={{
        width: "200px",
        height: "50px",
        background: "#ecf0f3",
        borderRadius: "12px",
        border: "none",
        boxShadow: "-3px -3px 7px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.25)",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.9s ease-in-out",

      }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = "inset -3px -3px 7px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = "-3px -3px 7px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.25)";
      }}
    >
      Neumorphic Button
    </button>
    <button style={{
    
        width: "50px",
        height: "50px",
        background: "#ecf0f3",
        borderRadius: "50%",
        border: "none",
        boxShadow: "-3px -3px 7px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.25)",
        fontSize: "8px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.9s ease-in-out",

      }}
      onMouseEnter={(e) => {
        e.target.style.boxShadow = "inset -3px -3px 7px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = "-3px -3px 7px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.25)";
      }}
    >
      <i className="bx bx-home text-[25px] bg-[#ecf0f3] "></i>
    </button>
    </div>
  )
}

export default Neo
