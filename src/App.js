import React, { Component } from 'react';
import { Name } from './name';
class app extends Component{
  state={age:0}

  Surakitis=()=>{this.setState({age:this.state.age+1})

  }

  render(){
    return (
      <div>
        <Name title="Asia1" age={1}/>
        <Name title="Asia2" />
        <Name title={"Asia3"} />
        {/* props */}
        <Name title="Asia4" >555</Name>
        <Name title="Asia5" >{this.state.age}</Name>

        <button onClick={this.Surakitis}>Click me Please!</button>
      </div>
    )
  }
}
export default app;