## Contracts to Work with Andre Cronje's Rarity Game in Fantom

Here's a bunch of contracts built for myself to work with Andre Cronje's Rarity Game in Fantom Network.

### Deploy Steps
1. Create sol contract in ./contracts
2. Add migration file in ./migrations
3. Configure truffle-config.js with network details and metamask `.secret` file.
4. `truffle compile` to compile contracts to ./build.
5. `truffle migrate --network fantomtest`
(Note: BSC Testnet limits amount of requests for compile files. Hence need to use --compile-none when migrating. https://ethereum.stackexchange.com/questions/98322/bsc-testnet-truffle-migrate-etimedout. Hence 
`truffle migrate --network fantomtest --compile-none`)

#### Interact in Testnet
`truffle console --network testnet`  

### Verify Contract
`truffle run verify <Contract Name> --network fantom`

### Deployed
09/09/2021 - Migrations: 0x231f8103bC7740F3E517443Dd93c5e0F008CF84e  
09/09/2021 - AdventureParty Contract: 0x1E6cd4c374aEf84381Fa70c89DDD7644feD4BAC0 (Courtesy of [vfat](https://twitter.com/vfat0))  
09/09/2021 - New AdventureParty Contract (edited): 0xc9e665C2Cc698631d875B73191B087B60E3B8e27 (made some mods.)



### Key Info on Rarity

**Class Index**  

Based on [Medium Post](https://andrecronje.medium.com/loot-rarity-d341faa4485c).  

- Barbarian [1]
- Bard [2]
- Cleric [3]
- Druid [4]
- Fighter [5]
- Monk [6]
- Paladin [7]
- Ranger [8]
- Rogue [9]
- Sorcerer [10]
- Wizard [11]

### Info on Adventure Contract by vfat
Twitter handle of vfat: [here](https://twitter.com/vfat0)  

To go on adventure, Rarity contract has a requirement of :  
`_isApprovedOrOwner(msg.sender, _summoner)`. Hence, we need to approve the AdventureParty contract first at Rarity contract: 0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb  
`rarity.setApproveForAll(address <adventurepartycontractaddress>, bool true)`

0. Have modified the original contract by vfat to not need to own the nft(summoners) before register.
1. registerAdventurers(uint[] memory summonerIDs)  
2. adventureAll()

3. To unregister all at once, you can use the added function `unregisterAll()`. (This is a loop that takes up gas.)

4. Be sure to setApproveForAll (@rarity) to false once you have left this contract.