const { HTTPService } = require("./HTTPService");
const service = new HTTPService();
module.exports.BannerService = 
class BannerService {
    constructor() {
        this.api = "https://fortnite-api.com/v1/banners";
    }

    async getBanners(language = "en"){
      return new Promise((resolve, reject) => {
        service.performReq(this.api + `?language=${language}`, resolve, reject)
      });
    }

    async getBannersColors(){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/colors`, resolve, reject)
        });
    }

}