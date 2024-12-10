import React from 'react'

const ButtonNeo2 = ({w,h,children}) => {
  return (
    <button style={{
    
        width:  w || "50px",
        height: h || "50px",
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
      {children}
      <i className="bx bx-home text-[25px] bg-[#ecf0f3] "></i>
    </button>
  )
}

export default ButtonNeo2
