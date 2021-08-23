
const { HTTPService } = require("./HTTPService");
const service = new HTTPService();
module.exports.CreatorCodeService = 
class CreatorCodeService {
    constructor() {
        this.api = "https://fortnite-api.com/v2/creatorcode";
    }

    async getCreatorCode(name = ""){
      return new Promise((resolve, reject) => {
        service.performReq(this.api + `?name=${name}`, resolve, reject)
      });
    }

    async Search(name = ""){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/search?name=${name}`, resolve, reject)
        });
      }

      async SearchAll(name = ""){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/search/all?name=${name}`, resolve, reject)
        });
      }
}
