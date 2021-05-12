import React from 'react';
import SankeyChar from './SankeyChart';

export default class SankeyDiagram extends React.Component {
    render () {
        const chartStyle = {
            width: '900px',
            height: '300px',
            padding: '30px',
        }
        return (
            <div className='sankey-wraper'>
                <div id="sankey_multiple" style={chartStyle}></div>
                <SankeyChar />
            </div>
        )
    };
}