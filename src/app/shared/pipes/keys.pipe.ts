import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(_object: object): Array<string> {
    return Object.keys(_object);
  };

}
