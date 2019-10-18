import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overflow',
  pure: false
})
export class OverflowPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (value.length > 15) {
      let cantidad:number = value.length - 5
      let valor = value.slice(0,cantidad)
      value = valor + '...'
    }
    return value;
  }

}
