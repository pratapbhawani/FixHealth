import React from "react";

const Header=()=>{
    return(
        <>
        <div className="header-div" style={{backgroundColor:'#3b465a',position:'fixed',width:'100%',height:'3rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h4>🌟 YourPhysio is now FixHealth 🌟</h4>
        </div>
        <div className="options" style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'5px',backgroundColor:'#f5fafc',padding:'5px',position:'fixed',top:'3rem',width:'100%'}}>
            <div className="log-div" style={{padding:"5px"}}>
                <a href="https://www.fixhealth.com/home">
                    {/* <img></img> */}
                    <img alt="Fix Health" src="/fixlogo.png" style={{height:"50px",width:"100px"}}/>
                </a>
            </div>
            <div className="option-div" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{margin:'10px'}}>
                    <a style={{color:'black',textDecoration:'none'}}>Testimonial</a>
                </div>
                <div style={{margin:'10px'}}>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
        </>
    )
}


export default Header;