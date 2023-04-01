import { CarListGetModul } from './../models/CarListGetModul';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carSearch'
})
export class FilterPipe implements PipeTransform {

  transform(value: CarListGetModul[], filterText: string): CarListGetModul[] {
    filterText=filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:CarListGetModul)=>p.carname.toLocaleLowerCase().indexOf(filterText)!=-1):value
  }
// :value eğer yoksa kendi değerini döndür
}
