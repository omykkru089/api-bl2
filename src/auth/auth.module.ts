import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from 'passport-http';

@Module({
    imports: [PassportModule],
    providers: [BasicStrategy]
})
export class AuthModule {}
