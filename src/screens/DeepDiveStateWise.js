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
        const { confirmed } = this.props.CovoidStoreStateWise;
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <LineChartStateWiseCom timeSeries={confirmed} title='DAILY CASES STATE WISE' />
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
