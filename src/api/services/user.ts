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

class UserService {
  public async getUserInfo() {
    // return httpClient.get<LoginResponse>("/user/info");
    console.log("getUserInfo");
    return Promise.resolve({
      data: {
        userId: "1",
        userName: "gausszhou",
        userAvatar: "",
      },
    });
  }
  public async login(params: LoginParams) {
    return httpClient.post<LoginResponse>("/user/login", params);
  }
}

export const userService = new UserService();
