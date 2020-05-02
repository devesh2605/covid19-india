import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import LineChartStateWiseCom from '../components/LineChartStateWiseCom';

class DeepDiveStateWise extends Component {

    componentWillMount() {
        if (this.props.CovoidStoreStateWise.loaded === false) {
            this.props.CovoidStoreStateWise.loadStateWiseData();
        }
    }

    renderLoader() {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        );
    }

    renderCharts = () => {
        const { confirmed , recovered, deceased } = this.props.CovoidStoreStateWise;
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' , justifyContent:'center'}}>
                <LineChartStateWiseCom timeSeries={confirmed} title='DAILY CONFIRMED CASES STATE WISE' />
                <LineChartStateWiseCom timeSeries={recovered} title='DAILY RECOVERED CASES STATE WISE' />
                <LineChartStateWiseCom timeSeries={deceased} title='DAILY DECEASED CASES STATE WISE' />
            </div>
        )
    }

    render() {
        if (this.props.CovoidStoreStateWise.loading) {
            return this.renderLoader();
        }

        if (Array.isArray(this.props.CovoidStoreStateWise.confirmed) && this.props.CovoidStoreStateWise.confirmed.length) {
            return (
                <div style={{ margin: '20px', maxWidth: '100%' }}>
                    {this.renderCharts()}
                </div>
            )
        }
    }
}

export default inject("CovoidStoreStateWise")(observer(DeepDiveStateWise));
