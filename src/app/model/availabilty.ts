export class Avaialibility {
    centername: string;
    vaccine_name: string;
    vdate: string;
    count: number;
    block:string;

    constructor(centerName:string,vaccineName:string,vDate:string,count:number,block:string){
        this.centername=centerName;
        this.block=block;
        this.vaccine_name=vaccineName;
        this.vdate=vDate;
        this.count=count;
    }
}