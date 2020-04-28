import { decorate, observable, flow, toJS, computed } from "mobx";
import axios from 'axios';

class CovidStore {
  constructor() {
    this.loading = false;
    this.loaded = false;
    this.data = {};
    this.error = false;

    this.loadCovidData = flow(this.loadCovidData);

  }

  get total() {
    const timeSeries = this.timeSeries;
    const lastItem = timeSeries[timeSeries.length -1];
    return lastItem;
  }

  get timeSeries() {
    const timeSeries = this.data.cases_time_series;
    return timeSeries;
  }

  get stateWise() {
    const statewiseData = this.data.statewise;
    return statewiseData;
  }

  * loadCovidData() {
    try {
      if (this.loading) {
        return;
      }
      this.loaded = false;
      this.loading = true;
      const response = yield axios.get('https://api.covid19india.org/data.json');
      this.data = response.data;
      console.log('data:', toJS(this.data));
      this.loaded = true;
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.loaded = false;
      this.error = e.message;
    }
  }
}

decorate(CovidStore, {
  loading: observable,
  loaded: observable,
  error: observable,
  data: observable,
  total: computed,
  timeSeries: computed,
  stateWise: computed,
});

export default new CovidStore();