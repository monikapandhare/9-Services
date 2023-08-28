import { Component } from '@angular/core';
import { ProductStatus } from './shared/const/productEnum';
import { Iproducts } from './shared/models/Ipassenger.interface';
import { ProductsApiService } from './shared/services/products-api.service';
import { UtilityService } from './shared/services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Service';
  public productsArray: Array<Iproducts> = [];
  constructor(private _productsService : ProductsApiService,
              private _utilityService : UtilityService
    ){}
  ngOnInit() : void {
    this.productsArray = this._productsService.getAllPrdctApi()
  }
  getallStatus =ProductStatus;


onProductAdd(pName : HTMLInputElement,pDetails : HTMLInputElement){
  let productObj : Iproducts = {
    pName: pName.value,
    pDetails: pDetails.value,
    pStatus: ProductStatus.Inprogress,
    pid: this._utilityService.Uuid()
  }
  pName.value = '';
  pDetails.value='';
  this._productsService.addNewProductCart(productObj)
}

changePrdctStatus(id:string,status:ProductStatus){
  console.log(id,status);
  this._productsService.updateProductStatus(id,status)
  
}
}
