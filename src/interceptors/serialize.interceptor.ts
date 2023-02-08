import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDto } from './../users/user.dtos';

interface ClassConstructor {
  new (...args: any[]): {};
}

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
    // Run something before a request is handled
    // by the request handler

    console.log('Im running before the handler', context);

    return handler.handle().pipe(
      map((data): any => {
        // Run something before the response is sent out
        return plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        });
        console.log('Im running before response is sent out', data);
      }),
    );
  }
}
