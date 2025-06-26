import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { userDetails } from 'src/users/utils/types';

@Injectable()
export class UsersService {
	private fakeUsers =  [{
		"name": faker.internet.username(),
		"email": faker.internet.email()
	}];
	fetchUsers() {
		return this.fakeUsers;
	}
	addUsers(userDetails: userDetails ){
		this.fakeUsers.push(userDetails);

	}
}
