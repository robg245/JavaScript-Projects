function Kengan_Ashura () { //function created called Kengan_Ashura ()
    var characters = {      // variable is named characters
        cosmo: "king of Stranglers", //first KVP with key of cosmo and value of 'king of stranglers'
        ohma: "Ashura",              //Second kvp
        kuree: "Demon",             //thirs kvp
        kuree: "taboo",             //identical key with a seperate value
    };
    delete characters.cosmo;        //delets the key 'cosmo'
    document.getElementById("Dictionary").innerHTML= characters.cosmo   //displays deleted key as undefined
}