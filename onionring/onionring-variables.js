// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
    'https://ophanimkei.com/',
    'https://denpa.neocities.org/',
    'https://starbage.neocities.org/',
    'https://zeddybear.neocities.org/',
    'https://fizzsea.neocities.org/',
    'https://sasaja.neocities.org/',
    'https://rpgradio.xyz',
    'https://rh0mbus0fruin.neocities.org/',
    'https://lugaw.gay/',
    'https://strovi.neocities.org/',
    'https://vencake.neocities.org/',
    'https://bodhisattva.land/',
    'https://orangecarnation.neocities.org',
    'https://laytonloztew.neocities.org/',
    'https://hunipyon.neocities.org/',
    'https://eggdev.neocities.org/',
    'https://yuentp.neocities.org/',
    'https://himawariness.com/',
    'https://sanguineroyal.com/',
    'https://hellstarares.neocities.org/',
    'https://korekiyovillage.neocities.org/',
    'https://mizuki.world',
    'https://foreverliketh.is/',
    'https://dandelionhill.neocities.org/',
    'https://nenrikido.neocities.org/',
    'https://evemarie.neocities.org/',
    'https://raspergine.neocities.org/',
    'https://thenothingmonster.neocities.org/',
    'https://lazer-bunny.neocities.org/',
    'https://hunipyon.neocities.org',
    'https://normopathy.neocities.org',
    'https://aquariumaesthetic.neocities.org/',
    'https://pencilz.art/',
    'https://gavinom123.neocities.org/',
    'https://flowercentral.neocities.org/',
    'https://4disease.neocities.org/',
    'https://chartreuse.neocities.org/',
    'https://spiders.neocities.org/',
    'https://yourdevilfriends.neocities.org',
    'https://asters-asterisms.neocities.org',
    'https://awhe.neocities.org/',
    'https://schelofthesea.neocities.org/',
    'https://qso404.neocities.org/',
    'https://nasunikki.neocities.org/',
    'https://andou.gay/',
    'https://devteammeatpie.dev/',
    'http://www.humbird0.com',
    'https://butt0n-z.neocities.org/',
    'https://abyssl.neocities.org/',
    'https://thatoddhaystack.neocities.org/',
    'https://themachinetranslator.neocities.org/',
    'https://aveyond.neocities.org/',
    'https://doffy.neocities.org/',
    'https://itpuddle.com',
    'https://whiona.me',
    'https://endski.neocities.org',
    'https://interstellar-shipwreck.neocities.org/',
    
    ];
    

//the name of the ring
var ringName = 'RPG Maker Webring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'RPGMaker';

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://ophanimkei.com/media/RPGMaker.html';

//should the widget include a random button?
var useRandom = false;

