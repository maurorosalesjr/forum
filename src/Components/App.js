import React from "react";
import Header from "./Header";
import PostControl from "./PostControl";

const basicStyle = {
  marginLeft: "5%",
  marginRight: "5%",
  
  
}

function App(){
  return (

    <React.Fragment>
      <div style={basicStyle}>
        <Header />
        <PostControl />
      </div>
    </React.Fragment>
  );
}

export default App;