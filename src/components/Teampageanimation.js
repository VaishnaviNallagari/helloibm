import React, { Component } from 'react'

class Colorchange extends Component {
    constructor(props) {
        super(props);
        this.state = {
          border: "1px solid #878d87",
          bgColor: "",
          height: "150px",
          width: "250px",
          position:"re",
          transform: "relative",
         animationduration: "",
         animation: "",
        }
      }
    
    
      boxClick = (e) => {
        this.setState({
          bgColor: "",
          height: "150px",
          width: "250px",
          position:"relative",
          transform: "translate(0px, 200px)"     
        })
      }
      

    render() {
        return (
            <div>
                 <div className="App">
                    <article className='experimentsHolder'>
                    <div className="boxClickCss" 
                    style={{ border:this.state.border,backgroundColor: this.state.bgColor, height: this.state.height, width: this.state.width, 
   transform:this.state.transform}}
                    onClick={this.boxClick}></div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Colorchange