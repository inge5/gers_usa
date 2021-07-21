import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, arg: string): any {
    let filterPost = [];
    for (const value of values) {
      // console.log(value);
      if(value.title.toLowerCase().indexOf(arg.toLowerCase()) > -1 || 
         value.content.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
         value.type.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        filterPost.push(value);
      }
    }
    return filterPost;
  }

}
