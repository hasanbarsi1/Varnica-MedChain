import React from 'react'

const ButtonNeo1 = ({w,h,children,className,shadow,onClick2,fontsize}) => {

  const applyHoverStyle = async (e) => {
    
    e.target.style.boxShadow =
      'inset -3px -3px 7px #ffffff, inset 3px 3px 5px rgba(0, 0, 0, 0.25)';

    // Remove the hover style after 100ms
    await setTimeout(() => {
      e.target.style.boxShadow =
        '-3px -3px 7px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.25)';
    }, 200);
    onClick2();
  };

  const removeHoverStyle = (e) => {
    e.target.style.boxShadow =
      '-3px -3px 7px #ffffff, 3px 3px 5px rgba(0, 0, 0, 0.25)';
  };

  return (
    <button className={` ${shadow || 'shadow-outside'} bg-tertiary ${className || ''}`} style={{
        width: w || "200px",
        height: h || "50px",
       
        borderRadius: "12px",
        border: "none",
        fontSize: fontsize || "16px",
        fontWeight: "normal",
        cursor: "pointer",
        transition: "all 0.9s ease-in-out",

      }}
      
      onClick={applyHoverStyle}
    >
      {children}
    </button>
  )
}

export default ButtonNeo1
