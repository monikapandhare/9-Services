import { ProductStatus } from "../const/productEnum";



export interface Ipassenger{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate:  number | null;
    children: null | Array<IpassChild>;
}

export interface IpassChild {name : string; age:number}


export interface Iproducts{
    pName: string;
    pDetails: string;
    pStatus: ProductStatus;
    pid: string;
}