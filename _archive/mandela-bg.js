import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

class MandalaBG extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                graph_data: {
                    label: [], 
                    datasets:[]}
            };
        }
        
    //     var w = window.innerWidth;
//     var h = window.innerHeight;
//     var winboxSpecs = "0 0 " + w + " " + h;

  render() {
    return (














      <svg xmlns='http://www.w3.org/2000/svg' width={100} height={100}>
        <rect width={100} height={100} fill='#269' />
        <g fill='#6494b7'>
          <rect width={100} height={1} y={20} />
          <rect width={100} height={1} y={40} />
          <rect width={100} height={1} y={60} />
          <rect width={100} height={1} y={80} />
          <rect width={1} height={100} x={20} />
          <rect width={1} height={100} x={40} />
          <rect width={1} height={100} x={60} />
          <rect width={1} height={100} x={80} />
        </g>
        <rect
          width={100}
          height={100}
          fill='none'
          strokeWidth={2}
          stroke='#fff'
        />
      </svg>
    );
  }
}

class Mandala extends React.Component {
  render() {
    const svgString = encodeURIComponent(renderToStaticMarkup(<MandalaBG />));
    const dataUri = `url("data:image/svg+xml,${svgString}")`;
    return (
      <div
        className='App'
        style={{
          background: dataUri,
          width: 500,
          height: 500,
        }}
      />
    );
  }
}