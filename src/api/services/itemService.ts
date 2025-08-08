import { httpClient } from "@/api/http";

export interface GetItemParams {
  keyword?: string;
  offset?: number;
  limit?: number;
}

class ItemService {
  /**
   * 获取商品列表
   * @param params
   * @returns
   */
  public async getItems(params: GetItemParams) {
    return httpClient.get("/items", { params });
  }
  /**
   * 根据ID获取商品详情
   * @param id
   * @returns
   */
  public async getItemById(id: string) {
    return httpClient.get(`/items/${id}`);
  }

  /**
   * 创建商品
   * @param data
   * @returns
   */
  public async createItem(data: any) {
    return httpClient.post("/items", data);
  }

  /**
   * 更新商品
   * @param id
   * @param data
   * @returns
   */
  public async updateItem(id: string, data: any) {
    return httpClient.put(`/items/${id}`, data);
  }

  /**
   * 删除商品
   * @param id
   * @returns
   */
  public async deleteItemById(id: string) {
    return httpClient.delete(`/items/${id}`);
  }
}

export const itemService = new ItemService();
