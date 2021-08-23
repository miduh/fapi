
const { HTTPService } = require("./HTTPService");
const service = new HTTPService();

module.exports.PlaylistService = 
class PlaylistService {
    constructor() {
        this.api = "https://fortnite-api.com/v1/playlists";
    }

    async getPlaylists(language = "en"){
        return new Promise((resolve, reject) => {
            service.performReq(this.api + `?language=${language}`, resolve, reject)
        });
    }

    async getPlaylistByID(language = "en", id = ""){
        return new Promise((resolve, reject) => {
            service.performReq(this.api + `id=${id}?language=${language}`, resolve, reject)
        });
    }
}