import axios from "axios";

export default function ajax(url, data = {}, type = "GET") {
  return new Promise(function (resolve, reject) {
    let promise;
    const instance = axios.create({
      timeout: 6000,
      headers: {
        "X-APICloud-AppId": "A6914327011091",
        "X-APICloud-AppKey":
          "8ac17d22e49cb7982d82796097cec52a6c7cd01d.1475375422841",
      },
    });

    if (type === "GET") {
      // 准备query参数
      let dataStr = "";
      Object.keys(data).forEach((key) => {
        dataStr += key + "= " + data[key]+'&';
      });
      if (dataStr != "") {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      promise = instance.get(url);
    } else {
      promise = instance.post(url, data);
    }

    promise
      .then((Response) => {
        resolve(Response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
