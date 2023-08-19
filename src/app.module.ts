import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'mysql2';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: 'localhost',
  //     port: 3306,
  //     username: 'root',
  //     password: 'I@mgreat@16',
  //     database: 'sliderDevelopment',
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //     synchronize: true,
  //   } as ConnectionOptions),
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
