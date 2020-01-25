import React, { Component } from 'react'
import './Halo.scss';

class Halo extends Component {
    constructor(props) {
        super(props);    
        this.state = {
          i: 0
        };
      }

    render() {
      // const className = (this.props.cssClass );
      const ringingHalos = (this_props, i) => {
        i ++;
        if ( i <= this_props.rings ) {
            return <div className={'ring ring-' + i}>{ ringingHalos(this_props, i) }</div>
        } else {
            return <div className={'ring ring-final ' + this_props.id }>{ this_props.childElem }</div>
        }
      }

      return (
        <section id={this.props.id} name={this.props.id} className={ this.props.cssClass ? this.props.cssClass : 'halo section' }  >
          { ringingHalos(this.props, this.state.i) }
        </section>
      );
    }
  }

  export default Halo;



// import React from 'react';
// import './Halo.scss';

// function Halo() {
//     return (
//         <div className='halo-parenthalohalo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//         <div className='halo'>
//             <a href='#home' id='btn_home'>
// 				<div className='logo sub-section'>
// 					<h1 className='header'>MetaPath.media</h1>
// 					<div className='sub-header'>percolating interactivities & metadata</div>	
// 				</div>
// 			</a>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//         </div>
//     );
// }
// export default Halo;