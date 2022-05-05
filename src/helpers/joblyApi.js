import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of all companies matching search request */
  static async getCompanies(searchRequest = {}) {
    let res = await this.request("companies", searchRequest);
    return res.companies;
  }

  /** Get list of all jobs matching search request */
  static async getJobs(searchRequest = {}) {
    let res = await this.request("jobs", searchRequest);
    return res.jobs;
  }

  /** Sign up a user, returns token */
  static async signUp(formData) {
    let res = await this.request("auth/register", formData, "post");
    console.log("token", res.token);
    return res.token;
  }

  /** Log in a user, return token */
  static async login(formData) {
    let res = await this.request("auth/token", formData, "post");
    return res.token;
  }
}

export default JoblyApi;
