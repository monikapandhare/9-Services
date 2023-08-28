import { Component, OnInit } from '@angular/core';
import { passengerService } from '../../services/passengerApi.service';
import { Ipassenger } from '../../models/Ipassenger.interface';

@Component({
  selector: 'app-pass-dashboard',
  templateUrl: './pass-dashboard.component.html',
  styleUrls: ['./pass-dashboard.component.scss']
})
export class PassDashboardComponent implements OnInit {
  passengerServiceInstance! : passengerService; // here we can use passengerService class as type
  passArray  : Array<Ipassenger> = []
  constructor(private _passService : passengerService) { }

  ngOnInit(): void {
    this.passArray = this._passService.getPassData()
    console.log(this.passArray);
    
  }

}
