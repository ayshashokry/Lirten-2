import React, { Component } from 'react'
import "../../stylesheets/HeaderCss.css"

export default class Header extends Component {
constructor(props) {
    super(props);
    if(this.props){
   console.log(this.props)
}
  }
    render() {
        return (
            <div className="header" style ={ { backgroundImage: "url("+this.props.img+")" } }>
               <div className="rotat"> <h1>{this.props.title}</h1></div>

               <div className="title">
                   <h5>{this.props.subTitle}</h5>
                    <p> {this.props.Ph}</p> 
               </div>

                            



            </div>
        )
    }
}
