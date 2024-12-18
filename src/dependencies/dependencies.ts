import {Container} from 'inversify';
import UserService from '../service/UserService';
import {PostClient} from '../networking/post/PostClient';

const container = new Container();
container.bind<UserService>('UserService').toConstantValue(new UserService());
container.bind<PostClient>('PostClient').toConstantValue(new PostClient());

export default container;
