import { Injectable } from '@angular/core';
import { ProductStatus } from '../const/productEnum';
import { Iproducts } from '../models/Ipassenger.interface';
import { SnackbarService } from './snackbar.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
public productArray:Array<Iproducts>=[
  {
    pName : "Oppo F17",
    pDetails : "128 RAM",
    pStatus : ProductStatus.Inprogress,
    pid : '1234'
},
{
  pName : "vivo A21",
  pDetails : "128 RAM",
  pStatus : ProductStatus.Dispatched,
  pid : '5678'
},
{
pName : "Svmsung Galaxy",
pDetails : "128 RAM",
pStatus : ProductStatus.Delivered,
pid : '9011'
}
]
  constructor( private _snackBar : SnackbarService ) { }
  getAllPrdctApi(){
    // We make API call to get all products Data's
    return this.productArray
  }
  addNewProductCart(prodObj : Iproducts){
    //API call to add new product in DB
    this.productArray.unshift(prodObj)
    //Api Call Success
    this._snackBar.createSnackBar(`The new product ${prodObj.pName} is added to the cart`,'close')
    
  }
  updateProductStatus(id:string,status:ProductStatus){
    this.productArray.forEach(pro=>{
        if(pro.pid === id){
          pro.pStatus = status;
          this._snackBar.createSnackBar(`The Status Of Product ${pro.pName} is changed to ${status}`,'close')
          return
        }
    })
  }
}
