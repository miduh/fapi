const { HTTPService } = require("./HTTPService");
const service = new HTTPService();
module.exports.BattleRoyaleMapService = 
class BattleRoyaleMapService {
    constructor() {
        this.api = "https://fortnite-api.com/v1/map";
    }

    async getMap(language = "en"){
      return new Promise((resolve, reject) => {
        service.performReq(this.api + `?language=${language}`, resolve, reject)
      });
    }
}
