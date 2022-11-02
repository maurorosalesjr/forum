import React from "react";
// import ticketsImage from "./../img/tickets.png"

const headerStyle = {
  marginLeft: "35%",
  marginRight: "35%",
  textAlign: "center",
  borderRadius: "35% 5%",
  backgroundColor: "cornflowerBlue",
  paddingTop: "2%",
  paddingBottom: "1%",
}


function Header(){
  return (
    <React.Fragment>
    <div style={headerStyle}>
      <h1>The MauroBook</h1>
      <br></br>
      <h4>A Place for Mauro's</h4>
    </div>
    </React.Fragment>
  );
}

export default Header;