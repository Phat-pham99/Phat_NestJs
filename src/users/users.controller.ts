import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
        return "Get users go bruh bruh"
    }
    @Post('add')
    addUsers(@Req() request:Request, @Res() response:Response){
        console.log(request.body);
        response.send(`User ${request.body.name} created `)
    }


}
