
const { HTTPService } = require("./HTTPService");
const service = new HTTPService();
module.exports.BattleRoyaleShopService = 
class BattleRoyaleShopService {
    constructor() {
        this.api = "https://fortnite-api.com/v2/shop/br";
    }

    async getCurrentShop(language = "en"){
      return new Promise((resolve, reject) => {
        service.performReq(this.api + `?language=${language}`, resolve, reject)
      });
    }

    async getCurrentShopCombined(language = "en"){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/combined?language=${language}`, resolve, reject)
        });
    }
}
