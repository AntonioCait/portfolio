import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSpace',
  standalone: true
})
export class CommaSpacePipe implements PipeTransform {

  transform(value: string[] | undefined): string {
    return value?.join(', ') ?? '';
  }

}
