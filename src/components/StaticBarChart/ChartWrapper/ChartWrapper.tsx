import React, { Component } from 'react';
import D3Chart from '../D3Chart/D3Chart';

interface WrapperProps {
    gender: string;
}

class ChartWrapper extends Component <WrapperProps> {
    componentDidMount(){
        new D3Chart(this.refs.chart);
    }

    render() {
        return (
            <div ref="chart">
            </div>
        )
    }
}

export default ChartWrapper;