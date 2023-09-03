const list = [
  "1, 2, 3 (feat. Jason Derulo   De La Ghetto) CD 1 TRACK 1 (32",
  "1nonly - Bunny Girl",
  "24kGoldn,_Justin_Bieber,_J_Balvin_Mood_Remix_feat_Justin_Bi",
  "347aidan - MEMORIES!",
  "A$AP Ferg - Plain Jane REMIX (feat. Nicki Minaj)",
  "Aaron Smith - Dancin (feat. Luvli) (Krono Remix)",
  "Achint - Scam 1992 Theme Music",
  "Alan Walker, AuRa, Tomine Harket - Darkside",
  "Alan Walker, Ava Max - Alone, Pt. II",
  "Alan Walker - Faded",
  "Alan Walker, Sabrina Carpenter, Farruko - On My Way",
  "Alessia Cara - Here (Logic Remix)",
  "Alfons - Basta Boi (Tiktok Remix)",
  "Arizona Zervas - ROXANNE",
  "Ayushmann Khurrana - Pani Da Rang (Male Vocals)",
  "Azide - Switch It Up",
  "Bazzi - Myself",
  "Bella Poarch - Build a Bitch",
  "BerthCh - One Dancing",
  "Billie Eilish - bad guy",
  "Bishop Briggs - River",
  "blackbear - idfc",
  "BLACKPINK - Kill This Love",
  "Blue Bird (Naruto Shippuden) [feat. Animelmack] CD 1 TRACK 1",
  "Blue Encount - Polaris",
  "BoyWithUke - Toxic",
  "Bruno Mars - Talking to the Moon",
  "Calvin Harris, Dua Lipa - One Kiss (with Dua Lipa)",
  "Chitose Morinaga - Michino Timothy Kimino Kimochi",
  "CJ - Whoopty",
  "CKay,_Dj_Yo!,_AX_EL_love_nwantiti_feat_Dj_Yo!_AX_EL_Rem",
  "Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie)",
  "Coldplay - Hymn for the Weekend",
  "Coolio - Gangsta's Paradise",
  "Craspore - Flashbacks (Slowed)",
  "Crazy Frog - Axel F",
  "DancingRoom - Dancing in Mandela",
  "Dazai Osamu - Dazai Ah",
  "Denzel Curry - Ultimate",
  "Desiigner - Panda",
  "DHARIA - August Diaries",
  "Diamond Eyes - Everything (2)",
  "Diamond Eyes - Everything",
  "Disturbing Tha Peace - Move Bitch",
  "DJ Paul - Scary Garry",
  "DJ Snake, Justin Bieber - Let Me Love You",
  "DJ Snake - Magenta Riddim",
  "Doja Cat - Boss Bitch",
  "Doja Cat - Need to Know",
  "Doja Cat - Woman",
  "Dr. Dre, Snoop Dogg - Still D.R.E",
  "Dr. Dre - The Next Episode",
  "DripReport - Skechers",
  "Duncan Laurence - Arcade",
  "DVRST - Close Eyes (Slowed + Reverb)",
  "DVRST - Close Eyes - Slowed + Reverb",
  "Ed Sheeran - Perfect",
  "Ed Sheeran - Shape of You",
  "Egzod, Maestro Chives, Neoni - Royalty",
  "Egzod - Royalty",
  "Eivy J - Leave Your Print",
  "Ellie Goulding, Juice WRLD - Hate Me (with Juice WRLD)",
  "ElyOtto - SugarCrash!",
  "Eminem - Venom - Music From The Motion Picture",
  "Engelbert Humperdinck - A Man Without Love",
  "Farizki - Hadal Ahbek (Slowed Reverb)",
  "Fools Garden - Lemon Tree (Album Edit)",
  "Foster_fools_can't_help_falling_in_love_slowed_down_&_reverb",
  "Future - Mask Off",
  "Gabry Ponte - Thunder",
  "Gentrammel - Out Of My Mind",
  "Gesaffelstein,_The_Weeknd_Lost_in_the_Fire_feat_The_Weeknd",
  "Ghostemane - Fed Up",
  "Glass Animals - Heat Waves",
  "Glass Animals - Heat Waves (Slowed)",
  "GOLDEN TBILISI - Texili (Trap Remix)",
  "GOLDEN TBILISI - Texili - Trap Remix",
  "Goose house - Hikarunara",
  "Goose house - 光るなら",
  "Gryffin - Tie Me Down",
  "Harry Styles - As It Was",
  "HENTAI XANDER - in heat.",
  "Hiroyuki Sawano - Attack on Titan",
  "Ilkay Sencan, Dynoro - Rockstar",
  "Imagine Dragons - Bad Liar",
  "Imagine Dragons - Demons",
  "Imagine_Dragons_Enemy_from_the_series_Arcane_League_of_Legends",
  "Indila - Ainsi bas la vida",
  "Isyan Tetick - Patlamaya Devam",
  "Jack Daily - Pop Style - Jack Daily Remix",
  "Jaymes Young - Infinity",
  "Joji - Glimpse of Us",
  "Jon Bellion - All Time Low",
  "Jon Lajoie - Everyday Normal Guy 2",
  "Justin Bieber, Ludacris - Baby",
  "just valery - Your Love Is My Drug (8 Bit Slowed)",
  "JVLA - Such a Whore (Stellular Remix)",
  "Katy Perry - Harleys In Hawaii",
  "Katy Perry - Roar",
  "Khantrast - Naruto Theme Song Freestyle",
  "Kina, Adriana Proenza - Can We Kiss Forever",
  "kostromin_Моя_голова_винтом_My_head_is_spinning_like_a_screw",
  "LamazeP - Ainouta",
  "Lil Nas X, Jack Harlow - INDUSTRY BABY (feat. Jack Harlow)",
  "Lil Nas X - MONTERO (Call Me By Your Name)",
  "Lil Nas X - THATS WHAT I WANT",
  "LiSA - 紅蓮華",
  "Lox Chatterbox - Dead to Me",
  "Ludacris - Act A Fool",
  "Ludovico Einaudi - Experience",
  "Luis Fonsi, Daddy Yankee - Despacito",
  "Macklemore - Thrift Shop (feat. Wanz)",
  "Madonna - Frozen",
  "Madonna, Sickick - Frozen",
  "Magic! - Rude",
  "Marwa Loud - Bad boy",
  "M&A - Симпл димпл поп ит сквиш",
  "Melanie Martinez - Play Date",
  "Momokurotei Ichimon - Nippon Egao Hyakkei",
  "MONOGATARI Series - Renai Circulation",
  "NateWantsToBattle - Heroes (From  My Hero Academia )",
  "NEFFEX - Grateful",
  "Negrito Senpai - Équipage (One Piece)",
  "Neoni - DARKSIDE",
  "NF - The Search",
  "Oliver Tree - Life Goes On",
  "One Direction - Night Changes",
  "One Direction - Steal My Girl",
  "Owl City - Fireflies",
  "PapiTHBK - Love Is a Drug",
  "Phao - 2 Phút Hơn (KAIZ Remix)",
  "Pháo, KAIZ - 2 Phút Hơn - KAIZ Remix",
  "Phoflo - Gambare Gambare Senpai (Remix)",
  "Pink Sweat$ - At My Worst",
  "Post Malone - Sunflower",
  "PUBLIC - Make You Mine",
  "Rasmatthew - Ganja In My Brain",
  "Rauf   Faik - Детство",
  "Renge Miyauchi - Nyanpasu (Rynti M Remix)",
  "Ricky Rich - Habibi (Albanian Remix)",
  "Ro Ransom - See Me Fall (feat. Kensei Abbot)",
  "ROSE BEAT - Industry Baby VS Beat It Tik Tok (Remix)",
  "Rotti - Rotti",
  "Royal & the Serpent - overwhelmed",
  "Rustage - God Mode (Madara Rap)",
  "Ruth B. - Dandelions",
  "Ruth B. - Dandelions (slowed + reverb)",
  "Ryan Castro - Mujeriego",
  "Ryuven - The Rumbling (From _Attack on Titan_)",
  "Sasuke CD 1 TRACK 1 (320)",
  "Sense - Moved On",
  "Serena - Safari",
  "Sergio Valentino - Lost Forever (Slowed Version)",
  "Serhat Durmus - La Câlin",
  "Sia - Cheap Thrills",
  "SLANDER, Dylan Matthew - Love Is Gone",
  "Slowed Mafia - 16 Missed Calls",
  "SlowTune, Francisco Salazar - Copines Slowed - Remix",
  "Snoop Dogg - Who Am I (What's My Name)_",
  "Sreejish Cholayil - Farewell (From _Kunjeldho_)",
  "SR - Practice Makes Perfect",
  "StarBoi3 - Dick (feat. Doja Cat)",
  "Starla Edney - Queen of Hearts",
  "Street Dreams (Bonus Track) CD 1 TRACK 11 (320)",
  "Sub Urban - Cradles",
  "Syko - #BrooklynBloodPop!",
  "Sym - STANGA",
  "Tamia - So Into You",
  "t.A.T.u. - All The Things She Said",
  "Teriyaki_Boyz_Tokyo_Drift_Fast_&_Furious_From__The_Fast_And_The",
  "The Chainsmokers - Closer",
  "TheFatRat, Anjulie - Fly Away",
  "TheFatRat - Fly Away",
  "The Game & Skrillex - The Game & Skrillex_ El Chapo",
  "The Game, Skrillex - The Game   Skrillex -  El Chapo",
  "The Script - Hall of Fame (feat. will.i.am)",
  "The Weeknd - Blinding Lights",
  "Travis Scott - HIGHEST IN THE ROOM",
  "Trevor Daniel - Falling",
  "Two Feet - Go Fuck Yourself",
  "Uprising Sachin - Pal x Duniya",
  "Vicetone - Astronomia",
  "Vicetone, Tony Igy - Astronomia",
  "Witt Lowry, Ava Max - Into Your Arms (feat. Ava Max)",
  "Wiz_Khalifa,_Charlie_Puth_See_You_Again_feat_Charlie_Puth",
  "Wiz Khalifa - See You Again (feat. Charlie Puth)",
  "XXXTentacion - Everybody Dies In Their Nightmares",
  "XXXTENTACION - Ex Bitch",
  "XXXTENTACION - Hope",
  "XXXTENTACION_the_remedy_for_a_broken_heart_why_am_I_so_in_lov",
  "Yeat - Monëy so big",
  "Yung Anime - Unravel",
  "Окси Авдалян - Аса хоса",
  "物語シリーズ - 恋愛サーキュレーション",
];

class MusicPlayer {
  constructor() {
    this.basicPath = "/home/mughilan/Music/";
    this.titleElement = document.querySelector("#title");
    this.authorElement = document.querySelector("#author");
    this.songPlayedList = []
    this.audio = undefined;
    this.currentSongId = this.randomId()
    this.currentSong = list[this.currentSongId];
  }
  play() {
    console.log(this.currentSongId)
    this.currentSong = list[this.currentSongId];
    this.audio = new Audio(this.basicPath + this.currentSong + ".mp3");
    this.audio.addEventListener("ended", this.next)
    this.updateTitle();
    this.audio.play();
  }
  updateTitle() {
    const [author, title] = this.currentSong.split("-")
    if (title !== undefined) {
      this.authorElement.innerHTML = author
      this.titleElement.innerHTML = title
    } else {
      this.titleElement.innerHTML = author
    }
  }
  randomId() {
    let randomId = Math.random() * list.length
    if (this.songPlayedList.includes(randomId))
      return randomId()
    this.songPlayedList.push(randomId)
    return parseInt(randomId)
  }
  pause() {
    if (this.audio !== undefined) {
      this.audio.pause();
    }
  }
  next() {
    this.pause();
    this.currentSongId = this.randomId()
    this.updateTitle();
    this.play();
  }
  prev() {
    if (this.songPlayedList.length > 1) {
      this.pause()
      this.currentSongId = this.songPlayedList[this.songPlayedList.length - 1]
      console.log(this.currentSongId)
      this.updateTitle()
      this.play()
    } else {
      alert("No Previous Songs")
    }
  }
}

const musicPlayer = new MusicPlayer();

const playHandler = () => musicPlayer.play();
const pauseHandler = () => musicPlayer.pause();
const nextHandler = () => musicPlayer.next();
const prevHandler = () => musicPlayer.prev();

musicPlayer.updateTitle()
document.querySelector("#play").addEventListener("click", playHandler);
document.querySelector("#pause").addEventListener("click", pauseHandler);
document.querySelector("#next").addEventListener("click", nextHandler);
document.querySelector("#prev").addEventListener("click", prevHandler);
