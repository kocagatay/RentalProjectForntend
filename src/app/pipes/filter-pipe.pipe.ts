import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarDetail } from '../models/cardetail';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], carFilterText: string): CarDetail[] {
    carFilterText = carFilterText ? carFilterText.toLocaleLowerCase() : '';
    return carFilterText  
      ? value.filter((c:CarDetail)=>
      c.modelName.toLocaleLowerCase().indexOf(carFilterText)!==-1
      )
      : value
  }
}

//map,filter js bilgisi.