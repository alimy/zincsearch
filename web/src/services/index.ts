import http from "./http";

var index = {
  list: () => {
    return http().get("/api/index");
  },
  update: (data: any) => {
    return http().put("/api/index/" + data.name, data);
  },
  delete: (name: string) => {
    return http().delete("/api/index/" + name);
  },
  nameList: (name: string) => {
    return http().get("/api/index_name?name=" + name);
  },
};

export default index;
