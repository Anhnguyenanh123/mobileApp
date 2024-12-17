import {ApiClient} from '../ApiClient';
import {Post} from '../../model/Post';

export class PostClient extends ApiClient {
  async fetchPost(): Promise<Post[]> {
    let repsonse = await this.axiosInstance.get('/posts');
    if (repsonse.status === 200) {
      return repsonse.data;
    } else {
      throw new Error('Failed to fetch posts');
    }
  }
}
