import { AxiosResponse } from "axios";
import { IOptions } from "../../api-sdk";
import BaseService from "../baseService";
import { IBlogQuery, IBlogs } from "./blog.types";

class BlogService extends BaseService {
  constructor(options: IOptions) {
    super(options);
  }

  /**
   * Retrieves a blog by slug.
   *
   * @param payload the query with the slug of the blog to retrieve
   * @returns response from the server
   */
  async get(payload: IBlogQuery): Promise<AxiosResponse<IBlogs>> {
    return this.request({
      method: "GET",
      url: `/api/blog/blogs?slug=${payload.slug}`,
    });
  }
}

export default BlogService;
