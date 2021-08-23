
const { HTTPService } = require("./HTTPService");
const service = new HTTPService();
module.exports.BattleRoyaleStatsService = 
class BattleRoyaleStatsService {
    constructor() {
        this.api = "https://fortnite-api.com/v2/stats/br/v2";
    }

    async getStats(name = "", accountType = "", timeWindow = "lifetime", image = "all"){
      return new Promise((resolve, reject) => {
        service.performReq(this.api + `?name=${name}&accountType=${accountType}&timeWindow=${timeWindow}&image=${image}`, resolve, reject)
      });
    }
}
