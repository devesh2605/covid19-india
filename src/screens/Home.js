import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import Card from '../components/Card';
import StateWiseTable from '../components/StateWiseTable';

class Home extends Component {

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

    renderDetails = () => {
        const { total , stateWise} = this.props.CovidStore;
        const { totalconfirmed, totaldeceased, totalrecovered } = total;
        const totalActive = totalconfirmed - totalrecovered - totaldeceased;
        return (
            <div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <Card color='#ff073a' title='Confirmed' number={totalconfirmed} />
                    <Card color='#007bff' title='Active' number={totalActive} />
                    <Card color='#28a745' title='Recovered' number={totalrecovered} />
                    <Card color='#6c757d' title='Deceased' number={totaldeceased} />
                </div>
                <div>
                    <StateWiseTable stateWise={stateWise}/>
                </div>
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
                    {this.renderDetails()}
                </div>
            )
        }
    }
}

export default inject("CovidStore")(observer(Home));
