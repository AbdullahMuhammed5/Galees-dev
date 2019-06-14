import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(profiles: any[], sitter: string): any[] {
    if (sitter == null) {
      return profiles;
    }
    return profiles.filter((x: any) => x['name'].toLowerCase().startsWith(sitter.toLowerCase())
      ||
      x['career'].toLowerCase().startsWith(sitter.toLowerCase()));
  }

}