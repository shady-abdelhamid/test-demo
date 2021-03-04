import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'p1'
})
export class P1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
