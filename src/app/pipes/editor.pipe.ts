import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../model/user.interface";

@Pipe({
  name: 'editor'
})
export class EditorPipe implements PipeTransform {

  transform(value: User | null): boolean {
    return !!value?.authorities.includes('ROLE_ADMIN');
  }

}
