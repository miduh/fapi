const { HTTPService } = require("./HTTPService");
const service = new HTTPService();
module.exports.CosmeticsService = 
class CosmeticsService {
    constructor() {
        this.api = "https://fortnite-api.com/v2/cosmetics/br";
    }

    async getList(language = "en"){
      return new Promise((resolve, reject) => {
        service.performReq(this.api + `?language=${language}`, resolve, reject)
      });
    }

    async getNew(language = "en"){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/new?language=${language}`, resolve, reject)
        });
    }

    async SearchCosmetics(id = "", language = "en", searchLanguage = "", 
    matchMethod = "", name="", description="", type="",displayType="",backendType="",rarity="",
    displayRarity="",backendRarity="",hasSeries=true,series="",backendSeries="",hasSet=true,set="",
    setText="",backendSet="",hasIntroduction=true,backendIntroduction=0,introductionChapter="",
    introductionSeason="",hasFeaturedImage=true,hasVariants="",hasGameplayTags=true,gameplayTag="",
    hasMetaTags=true,metaTag="",hasDynamicPakId=true,dynamicPakId="",added="",addedSince="",unseenFor=0,lastAppearance=""){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/search${id}/?language=${language}&searchLanguage=${searchLanguage}
          &matchMethod=${matchMethod}&name=${name}&description=${description}&type=${type}&displayType=${displayType}
          &backendType=${backendType}&rarity=${rarity}&displayRarity=${displayRarity}&backendRarity=${backendRarity}
          &hasSeries=${hasSeries}&series=${series}&backendSeries=${backendSeries}&hasSet=${hasSet}&set=${set}
          &setText=${setText}&backendSet=${backendSet}&hasIntroduction=${hasIntroduction}
          &backendIntroduction=${backendIntroduction}&introductionChapter=${introductionChapter}
          &introductionSeason=${introductionSeason}&hasFeaturedImage=${hasFeaturedImage}&hasVariants=${hasVariants}
          &hasGameplayTags=${hasGameplayTags}&gameplayTag=${gameplayTag}&hasMetaTags=${hasMetaTags}&metaTag=${metaTag}
          &hasDynamicPakId=${hasDynamicPakId}&dynamicPakId=${dynamicPakId}&added=${added}&addedSince=${addedSince}
          &unseenFor=${unseenFor}&lastAppearance=${lastAppearance}`, resolve, reject)
        });
    }

    async SearchCosmeticsAll(id = "", language = "en", searchLanguage = "", 
    matchMethod = "", name="", description="", type="",displayType="",backendType="",rarity="",
    displayRarity="",backendRarity="",hasSeries=true,series="",backendSeries="",hasSet=true,set="",
    setText="",backendSet="",hasIntroduction=true,backendIntroduction=0,introductionChapter="",
    introductionSeason="",hasFeaturedImage=true,hasVariants="",hasGameplayTags=true,gameplayTag="",
    hasMetaTags=true,metaTag="",hasDynamicPakId=true,dynamicPakId="",added="",addedSince="",unseenFor=0,lastAppearance=""){
        return new Promise((resolve, reject) => {
          service.performReq(this.api + `/search/all${id}/?language=${language}&searchLanguage=${searchLanguage}
          &matchMethod=${matchMethod}&name=${name}&description=${description}&type=${type}&displayType=${displayType}
          &backendType=${backendType}&rarity=${rarity}&displayRarity=${displayRarity}&backendRarity=${backendRarity}
          &hasSeries=${hasSeries}&series=${series}&backendSeries=${backendSeries}&hasSet=${hasSet}&set=${set}
          &setText=${setText}&backendSet=${backendSet}&hasIntroduction=${hasIntroduction}
          &backendIntroduction=${backendIntroduction}&introductionChapter=${introductionChapter}
          &introductionSeason=${introductionSeason}&hasFeaturedImage=${hasFeaturedImage}&hasVariants=${hasVariants}
          &hasGameplayTags=${hasGameplayTags}&gameplayTag=${gameplayTag}&hasMetaTags=${hasMetaTags}&metaTag=${metaTag}
          &hasDynamicPakId=${hasDynamicPakId}&dynamicPakId=${dynamicPakId}&added=${added}&addedSince=${addedSince}
          &unseenFor=${unseenFor}&lastAppearance=${lastAppearance}`, resolve, reject)
        });
    }

    async SearchCosmeticsByID(language = "en", id = "") {
        return new Promise((resolve, reject) => {
            service.performReq(this.api + `/search/ids?language=${language}&id=${id}`, resolve, reject)
        });
    }
}