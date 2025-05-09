import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ReviewModule } from './review/review.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, BookModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
