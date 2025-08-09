import { httpClient } from "../http";

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  userId: string;
  userName: string;
  userAvatar: string;
}

let isLogin = false;

class UserService {
  public async getUserInfo() {
    if (!isLogin) {
      return Promise.reject("未登录");
    }
    console.log("getUserInfo");
    return Promise.resolve({
      data: {
        userId: "1",
        userName: "gausszhou",
        userAvatar: "",
      },
    });
    // return httpClient.get<LoginResponse>("/user/info");
  }
  public async login(params: LoginParams) {
    isLogin = true;
    return Promise.resolve({
      data: {
        userId: "1",
        userName: "gausszhou",
        userAvatar: "",
      },
    });
    return httpClient.post<LoginResponse>("/user/login", params);
  }
}

export const userService = new UserService();
