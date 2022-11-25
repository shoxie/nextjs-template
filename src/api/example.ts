import request from "@/lib/axios";

export default class ExampleApi {
  static getList() {
    return request({
      url: "/animal/bird",
      method: "GET",
    });
  }
}
