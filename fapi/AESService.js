
const { HTTPService } = require("./HTTPService");
const service = new HTTPService();

module.exports.AESService = 
class AESService {
    constructor() {
        this.api = "https://fortnite-api.com/v2/aes";
    }

    async getCurrentAESKey(keyFormat = "hex"){
      return new Promise((resolve, reject) => {
        service.performReq(this.api + `?keyFormat=${keyFormat}`, resolve, reject)
      });
    }
}