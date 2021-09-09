var AdventureParty = artifacts.require("AdventureParty")

module.exports = function(deployer) {
    deployer.deploy(AdventureParty,
        
        // rarity contract on Mainnet!
        '0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb',

        // rarityGold contract on Mainent!
        '0x2069B76Afe6b734Fb65D1d099E7ec64ee9CC76B2'

        )
};