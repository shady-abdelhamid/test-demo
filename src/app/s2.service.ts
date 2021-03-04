import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S2Service {

  constructor() { }

  public getValue(): string {
    return 'real value';
  }

  public getObservableValue(): Observable<string> {
    return of('observable value');
  }

  public getPromiseValue(): Promise<string> {
    return of('promise value').toPromise();
  }
}
