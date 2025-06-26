import { tr } from '@faker-js/faker/.';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class User {
@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
email: string;

@Column()
phone: string;

@Column()
age: number;

@Column({default: true})
gay: boolean

}