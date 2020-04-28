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