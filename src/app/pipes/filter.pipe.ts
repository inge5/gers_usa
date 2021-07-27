import { Pipe, PipeTransform } from '@angular/core';
import { VariableGlobalService } from '../colombia/servicios/variable-global/variable-global.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private variableG: VariableGlobalService){}

  transform(values: any, arg: string): any {
    let filterPost = [];
    for (const value of values) {
      if(value?.title.toLowerCase().indexOf(arg.toLowerCase()) > -1 || 
         value?.content.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
         value?.type.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        filterPost.push(value);
      }
    }
    if(filterPost.length === 0){
      return [0];
    }else{
      return filterPost;
    }
  }

}
