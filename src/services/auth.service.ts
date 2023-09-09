/* eslint-disable class-methods-use-this */
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  async login(username: string, password: string) {
    const response = await axios.post(`${API_URL}signin`, {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem('user');
  }

  signup(
    fullname: string,
    username: string,
    email: string,
    password: string,
  ) {
    return axios.post(`${API_URL}signup`, {
      username,
      fullname,
      email,
      password,
    });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

export default new AuthService();