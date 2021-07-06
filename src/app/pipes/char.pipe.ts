import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'char'
})
export class CharPipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0);
  }

}
