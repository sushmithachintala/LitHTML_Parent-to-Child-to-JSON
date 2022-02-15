import { Component } from '@angular/core';
import { AdminModel, BicycleModel, DataModel, HouseHoldModel } from 'src/models/data-model';
import '../web-components/admin';
import '../web-components/bicycle';
import '../web-components/house-hold';

@Component({
  selector: 'corp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lit-web-components';
  data: DataModel = {
    administrativeData: {
      validForm: null
    },
    ContractModule: {
      HouseHoldModel: {
        key: 'HOUSEHOLD',
        name: 'Household contents',
        comments: ''
      },
      BicycleModel: {
        key: 'BICYCLE',
        name: 'Bicycle',
        comments: ''
      }
    }
  };
  updateData(event: any) {
    const admin = (event as CustomEvent<AdminModel>).detail;
    console.log(admin);
  }
  updateHouseHoldData(event: any) {
    const houseHold = (event as CustomEvent<HouseHoldModel>).detail;
    console.log(houseHold);
  }
  updateBicycleData(event: any) {
    const bicycle = (event as CustomEvent<BicycleModel>).detail;
    console.log(bicycle);
  }
}
