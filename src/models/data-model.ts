export interface DataModel {
    administrativeData: AdminModel;
    ContractModule: ContractModule;
}
export interface AdminModel {
    validForm: Date | null;
}
export interface ContractModule {
    HouseHoldModel: HouseHoldModel;
    BicycleModel: BicycleModel;
}
export interface BicycleModel {
    key: string;
    name: string;
    comments: string;
}
export interface HouseHoldModel {
    key: string;
    name: string;
    comments: string;
}