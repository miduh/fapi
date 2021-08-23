const { HTTPService } = require("./HTTPService");
const service = new HTTPService();

module.exports.NewsService = 
class NewsService {
    constructor() {
        this.api = "https://fortnite-api.com/v2/news";
    }

    async getNews(language = "en"){
      return new Promise((resolve, reject) => {
        service.performReq(this.api + `?language=${language}`, resolve, reject)
      });
    }

    async getBattleRoyaleNews(language = "en"){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/br?language=${language}`, resolve, reject)
        });
    }

    async getSaveTheWorldNews(language = "en"){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/stw?language=${language}`, resolve, reject)
        });
    }

    async getCreativeNews(language = "en"){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/creative?language=${language}`, resolve, reject)
        });
    }
}