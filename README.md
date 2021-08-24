# FAPI

This is a Fortnite API build in NodeJS, for making the work easier for data analysts!

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" width="200">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://fortnite-api.com/assets/img/logo_128.png?t=1629751563" width="120">

# How to use

**Battle Royal Stats Example**

    const  {  BattleRoyaleStatsService  }  =  require("./fapi");
	const  BR_Stats  =  new  BattleRoyaleStatsService();
	BR_Stats.getStats("Ninja",  "epic",  "lifetime",  "all")
		.then(result  =>  console.log(result))
		.catch(error  =>  console.error(error))
Easy not?

## Requirements

* [Node JS](https://nodejs.org/)
* Nothing else!

## Develop by me!

This API was built in 1 afternoon! By me! With the help of a community of [Italian young developers!](https://discord.gg/Pqn4Bts7)

## Other examples
* **Battle Royal Shop Example**

    `const  {  BattleRoyaleShopService  }  =  require("./fapi");
	const  BR_Shop  =  new  BattleRoyaleShopService();
	BR_Stats.getCurrentShop()
		.then(result  =>  console.log(result))
		.catch(error  =>  console.error(error))`
*	**AES Key Example**

    `const  {  AESService }  =  require("./fapi");
	const  AES  =  new  AESService();
	AES.getCurrentAESKey()
		.then(result  =>  console.log(result))
		.catch(error  =>  console.error(error))`


## Please report feedbacks and bugs to upgrade this API.

Feedbacks are very helpful for me, because make my work easier! If you have encountered a bug or simply you wanna send me a suggestion, please, do it, Thanks!


# Credits

* [Fortnite API](https://fortnite-api.com)
* [La congrega degli Informatici (Discord)](https://discord.gg/Pqn4Bts7)
