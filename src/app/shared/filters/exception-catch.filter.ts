import {
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
  Res,
} from '@nestjs/common';
import { NotFoundException } from 'models/not-found-exception';

@Catch(Error)
export class ExceptionCatchFilter implements ExceptionFilter {
  private logger: Logger;

  constructor() {
    this.logger = new Logger('App:ExceptionCatchFilter');
  }

  public async catch(err: Error, @Res() res) {
    let status: number = 500;
    let message: string = err.message;

    if (err instanceof NotFoundException) {
      status = 404;
    } else if (err instanceof Error) {
      status = 500;
      message = 'Internal error';
    }

    this.logger.error(err.message);

    await res.status(status).json({ message, status });
  }
}
