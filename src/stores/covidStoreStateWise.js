import { decorate, observable, flow, computed } from "mobx";
import axios from 'axios';

class CovidStoreStateWise {
  constructor() {
    this.loading = false;
    this.loaded = false;
    this.statesDaily = {};
    this.error = false;

    this.loadStateWiseData = flow(this.loadStateWiseData);
  }

  get confirmed() {
    const statesDaily = this.statesDaily;
    const confirmedArr = [];
    statesDaily.map((el) => {
      if (el.status === 'Confirmed') {
        confirmedArr.push(el);
      }
    });
    for (let i = 0; i < confirmedArr.length; i++) {
      confirmedArr[i].Gujarat = confirmedArr[i]['gj'];
      confirmedArr[i].AndhraPradesh = confirmedArr[i]['ap'];
      confirmedArr[i].Maharastra = confirmedArr[i]['mh'];
      confirmedArr[i].Delhi = confirmedArr[i]['dl'];
      confirmedArr[i].MadhyaPradesh = confirmedArr[i]['mp'];
      confirmedArr[i].Rajsthan = confirmedArr[i]['rj'];
      confirmedArr[i].TamilNadu = confirmedArr[i]['tn'];
      confirmedArr[i].UttarPradesh = confirmedArr[i]['up'];
      confirmedArr[i].WestBengal = confirmedArr[i]['wb'];
      confirmedArr[i].Telangana = confirmedArr[i]['tg'];
      confirmedArr[i].Karnataka = confirmedArr[i]['ka'];
      delete confirmedArr[i].gj;
      delete confirmedArr[i].ap;
      delete confirmedArr[i].mh;
      delete confirmedArr[i].dl;
      delete confirmedArr[i].mp;
      delete confirmedArr[i].rj;
      delete confirmedArr[i].tn;
      delete confirmedArr[i].up;
      delete confirmedArr[i].wb;
      delete confirmedArr[i].tg;
      delete confirmedArr[i].ka;
    }
    return confirmedArr;
  }

  get recovered() {
    const statesDaily = this.statesDaily;
    const recoveredArr = [];
    statesDaily.map((el) => {
      if (el.status === 'Recovered') {
        recoveredArr.push(el);
      }
    });
    for (let i = 0; i < recoveredArr.length; i++) {
      recoveredArr[i].Gujarat = recoveredArr[i]['gj'];
      recoveredArr[i].AndhraPradesh = recoveredArr[i]['ap'];
      recoveredArr[i].Maharastra = recoveredArr[i]['mh'];
      recoveredArr[i].Delhi = recoveredArr[i]['dl'];
      recoveredArr[i].MadhyaPradesh = recoveredArr[i]['mp'];
      recoveredArr[i].Rajsthan = recoveredArr[i]['rj'];
      recoveredArr[i].TamilNadu = recoveredArr[i]['tn'];
      recoveredArr[i].UttarPradesh = recoveredArr[i]['up'];
      recoveredArr[i].WestBengal = recoveredArr[i]['wb'];
      recoveredArr[i].Telangana = recoveredArr[i]['tg'];
      recoveredArr[i].Karnataka = recoveredArr[i]['ka'];
      delete recoveredArr[i].gj;
      delete recoveredArr[i].ap;
      delete recoveredArr[i].mh;
      delete recoveredArr[i].dl;
      delete recoveredArr[i].mp;
      delete recoveredArr[i].rj;
      delete recoveredArr[i].tn;
      delete recoveredArr[i].up;
      delete recoveredArr[i].wb;
      delete recoveredArr[i].tg;
      delete recoveredArr[i].ka;
    }
    return recoveredArr;
  }

  get deceased() {
    const statesDaily = this.statesDaily;
    const deceasedArr = [];
    statesDaily.map((el) => {
      if (el.status === 'Deceased') {
        deceasedArr.push(el);
      }
    });
    for (let i = 0; i < deceasedArr.length; i++) {
      deceasedArr[i].Gujarat = deceasedArr[i]['gj'];
      deceasedArr[i].AndhraPradesh = deceasedArr[i]['ap'];
      deceasedArr[i].Maharastra = deceasedArr[i]['mh'];
      deceasedArr[i].Delhi = deceasedArr[i]['dl'];
      deceasedArr[i].MadhyaPradesh = deceasedArr[i]['mp'];
      deceasedArr[i].Rajsthan = deceasedArr[i]['rj'];
      deceasedArr[i].TamilNadu = deceasedArr[i]['tn'];
      deceasedArr[i].UttarPradesh = deceasedArr[i]['up'];
      deceasedArr[i].WestBengal = deceasedArr[i]['wb'];
      deceasedArr[i].Telangana = deceasedArr[i]['tg'];
      deceasedArr[i].Karnataka = deceasedArr[i]['ka'];
      delete deceasedArr[i].gj;
      delete deceasedArr[i].ap;
      delete deceasedArr[i].mh;
      delete deceasedArr[i].dl;
      delete deceasedArr[i].mp;
      delete deceasedArr[i].rj;
      delete deceasedArr[i].tn;
      delete deceasedArr[i].up;
      delete deceasedArr[i].wb;
      delete deceasedArr[i].tg;
      delete deceasedArr[i].ka;
    }
    return deceasedArr;
  }

  * loadStateWiseData() {
    try {
      if (this.loading) {
        return;
      }
      this.loaded = false;
      this.loading = true;
      const response = yield axios.get('https://api.covid19india.org/states_daily.json');
      this.statesDaily = response.data.states_daily;
      this.loaded = true;
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.loaded = false;
      this.error = e.message;
    }
  }
}

decorate(CovidStoreStateWise, {
  loading: observable,
  loaded: observable,
  error: observable,
  statesDaily: observable,
  confirmed: computed,
  recovered: computed,
  deceased: computed,
});

export default new CovidStoreStateWise();