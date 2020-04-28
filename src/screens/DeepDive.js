import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import LineChart from '../components/LineChartCom';
import BarChartCom from '../components/BarChartCom';

class DeepDive extends Component {

    componentWillMount() {
        if (this.props.CovidStore.loaded === false) {
            this.props.CovidStore.loadCovidData();
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
        const { timeSeries } = this.props.CovidStore;
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' , justifyContent:'center'}}>
                <LineChart timeSeries={timeSeries} title='TOTAL CASES' />
                <BarChartCom timeSeries={timeSeries} title='DAILY CASES' />
            </div>
        )
    }

    render() {
        if (this.props.CovidStore.loading) {
            return this.renderLoader();
        }

        if (Array.isArray(this.props.CovidStore.timeSeries) && this.props.CovidStore.timeSeries.length) {
            return (
                <div style={{ margin: '20px', maxWidth: '100%' }}>
                    {this.renderCharts()}
                </div>
            )
        }
    }
}

export default inject("CovidStore")(observer(DeepDive));
