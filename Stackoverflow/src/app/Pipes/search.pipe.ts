import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

  // transform(
  //   value: { question_title: string, question_tags: string }[],
  //   search: string
  // ): { question_title: string, question_tags: string }[] {
  //   if (value) {
  //     const regexp = new RegExp(search, 'i');
  //     const properties = Object.keys(value[0]);
  //     return [
  //       ...value.filter((item) => {
  //         return properties.some((property) => regexp.test(item[property]));
  //       }),
  //     ];
  //   }
  // }
}


