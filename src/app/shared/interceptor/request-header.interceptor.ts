import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestHeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
        'X-RapidAPI-Key': '77c14accbfmshe046120b686e338p1e00cejsn788899184659',
      },
    });

    return next.handle(request);
  }
}
