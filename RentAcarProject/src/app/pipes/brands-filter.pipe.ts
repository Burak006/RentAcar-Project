import { BrandGetModul } from 'src/app/models/BrandGetModul';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandSearch'
})
export class BrandsFilterPipe implements PipeTransform {

  transform(value: BrandGetModul[], filterText: string): BrandGetModul[] {
    filterText=filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:BrandGetModul)=>p.name.toLocaleLowerCase().indexOf(filterText)!=-1):value
  }
// :value eğer yoksa kendi değerini döndür

}
