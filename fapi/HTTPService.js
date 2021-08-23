const https = require("https");

module.exports.HTTPService = 
class HTTPService {
    async performReq(host, resolve, reject) {

            https.get(host, res => {
                    let data = [];
                    res.on('data', chunk => {
                        data.push(chunk);
                      });

                      res.on('end', () => { resolve(JSON.parse(Buffer.concat(data).toString())) } );
                    }).on('error', err => {
                      reject(err);
                  });

    }
} 