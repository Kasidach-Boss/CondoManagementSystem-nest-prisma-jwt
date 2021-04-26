import { Injectable, Body} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Prisma } from '.prisma/client';
// import { from, Observable } from 'rxjs';
// import {User,Prisma} from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(
        private usersService:UsersService,
        private jwtService: JwtService
    ){}

    async validateUser(username:string, pass:string):Promise<any>{
        const user = await this.usersService.findUserByEmail(username) // username is email
       
        const match = await this.usersService.comparePassword(pass);
        console.log(pass);
        // console.log(match);
            if (user && user.password === pass ){
            
                const { password, ...result } = user;
            
                return result;
            }
        
        
        return null;
    }

    async login(user:any,){
        const payload = {username: user.email, sub: user.id,};
        

        
            return{
            access_token: this.jwtService.sign(payload),
        }
        
        
    }

    // hashPassword(password: string): Observable<string> {
    //     return from(bcrypt.hash(password, 12));
    // }

    // comparePassword(password: string, storePassword: string): Observable<any>{
    //     return from(bcrypt.compare(password, storePassword));
    // }
}
