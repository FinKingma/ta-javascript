import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class GreetingService {
  private readonly itemUrl = environment.apiUrl + '/greetings';

  constructor (
    private readonly http: HttpClient
  ) {
  }

  getGreetings () {
    return this.http
      .get<string[]>(this.itemUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError (res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
