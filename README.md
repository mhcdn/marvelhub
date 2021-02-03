var preKey = "?alt=media&key=";

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("mysearchbtn").click();
  }
});


function validateForm() {
  var x = document.getElementById("myInput").value;
  if (x == "Iron Man (2008)") {  window.location.assign("https://mhb-movies.blogspot.com/p/iron-man.html")
    return false;
}  else if (x == "Iron Man II (2010)") {  window.location.assign("https://mhb-movies.blogspot.com/p/iron-man-ii.html")
    return false;
} else if (x == "Iron Man III (2013)") {  window.location.assign("https://mhb-movies.blogspot.com/p/iron-man-iii.html")
    return false;
} else if (x == "Thor (2011)") {  window.location.assign("https://mhb-movies.blogspot.com/p/thor.html")
    return false;
} else if (x == "Thor : The Dark World (2013)") {  window.location.assign("https://mhb-movies.blogspot.com/p/thor-dark-world.html")
    return false;
}else if (x == "Thor Ragnarok (2017)") {  window.location.assign("https://mhb-movies.blogspot.com/p/thor-ragnarok.html")
    return false;
} else if (x == "Hulk (2008)") {  window.location.assign("https://mhb-movies.blogspot.com/p/hulk.html")
    return false;
} else if (x == "Captain America : The First Avenger (2010)") {  window.location.assign("https://mhb-movies.blogspot.com/p/the-first-avenger.html")
    return false;
} else if (x == "Captain America : The Winter Soldier (2014)") {  window.location.assign("https://mhb-movies.blogspot.com/p/the-winter-soldier.html")
    return false;
} else if (x == "Captain America : Civil War (2016)") {  window.location.assign("https://mhb-movies.blogspot.com/p/captain-america-civil-war.html")
    return false;
} else if (x == "Guardians of The Galaxy (2014)") {  window.location.assign("https://mhb-movies.blogspot.com/p/guardians-of-galaxy.html")
    return false;
} else if (x == "Guardians of The Galaxy Vol.2") {  window.location.assign("https://mhb-movies.blogspot.com/p/guardians-of-galaxy-vol2.html")
    return false;
} else if (x == "Ant-Man (2015)") {  window.location.assign("https://mhb-movies.blogspot.com/p/ant-man.html")
    return false;
} else if (x == "Ant-Man and the Wasp (2018)") {  window.location.assign("https://mhb-movies.blogspot.com/p/ant-man-and-wasp.html")
    return false;
} else if (x == "Avengers : Infinity War (2018)") {  window.location.assign("https://mhb-movies.blogspot.com/p/avengers-infinity-war.html")
    return false;
} else if (x == "Avengers : Endgame (2019)") {  window.location.assign("https://mhb-movies.blogspot.com/p/avengers-endgame.html")
    return false;
} else if (x == "Avengers : Age Of Ultron (2015)") {  window.location.assign("https://mhb-movies.blogspot.com/p/avengers-age-of-ultron.html")
    return false;
} else if (x == "The Avengers 2012") {  window.location.assign("https://mhb-movies.blogspot.com/p/avengers.html")
    return false;
} else if (x == "Captain Marvel (2019)") {  window.location.assign("https://mhb-movies.blogspot.com/p/captain-marvel.html")
    return false;
} else if (x == "Spider-Man : Homecoming (2016)") {  window.location.assign("https://mhb-movies.blogspot.com/p/spider-man-homecoming.html")
    return false;
} else if (x == "Spider-Man : Far From Home (2019)") {  window.location.assign("https://mhb-movies.blogspot.com/p/far-from-home.html")
    return false;
} else if (x == "Black Panther (2018)") {  window.location.assign("https://mhb-movies.blogspot.com/p/black-panther.html")
    return false;
} else if (x == "Docter strange (2016)") {  window.location.assign("https://mhb-movies.blogspot.com/p/doctor-strange.html")
    return false;
} else if (x == "X-Men (2000)") {  window.location.assign("https://mhb-movies.blogspot.com/p/x-men-2000.html")
    return false;
} else if (x == "X2: X-Men United (2003)") {  window.location.assign("https://mhb-movies.blogspot.com/p/x2-x-men-united.html")
    return false;
} else if (x == "X-Men : The Last Stand (2006)") {  window.location.assign("https://mhb-movies.blogspot.com/p/x-men-last-stand-2006.html")
    return false;
} else if (x == "X-Men Origins: Wolverine (2009)") {  window.location.assign("https://mhb-movies.blogspot.com/p/x-men-origins-wolverine-2009.html")
    return false;
} else if (x == "X-Men : First Class (2011)") {  window.location.assign("https://mhb-movies.blogspot.com/p/x-men-first-class-2011.html")
    return false;
} else if (x == "X-Men : Days of Future Past (2014)") {  window.location.assign("https://mhb-movies.blogspot.com/p/x-men-days-of-future-past-2014.html")
    return false;
} else if (x == "X-Men: Apocalypse (2016)") {  window.location.assign("https://mhb-movies.blogspot.com/p/x-men-apolcalypse-2016.html")
    return false;
} else if (x == "Deadpool (2016)") {  window.location.assign("https://mhb-movies.blogspot.com/p/deadpool-2016.html")
    return false;
} else if (x == "Dark Phoenix (2019)") {  window.location.assign("https://mhb-movies.blogspot.com/p/dark-phoenix-2019.html")
    return false;
} else if (x == "Logan (2017)") {  window.location.assign("https://mhb-movies.blogspot.com/p/logan-2017.html")
    return false;
} else if (x == "The Wolverine (2013)") {  window.location.assign("https://mhb-movies.blogspot.com/p/the-wolverine-2013.html")
    return false;
} else if (x == "Agents of S.H.I.E.L.D. (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/agents-of-shield.html")
    return false;
} else if (x == "Agent Carter (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/agent-carter.html")
    return false;
} else if (x == "The Defenders (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/the-defenders.html")
    return false;
} else if (x == "The Gifted (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/the-gifted.html")
    return false;
} else if (x == "Luke cage (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/luke-cage.html")
    return false;
} else if (x == "Cloak and Dagger (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/cloak-dagger.html")
    return false;
} else if (x == "Runaways (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/the-runaways.html")
    return false;
} else if (x == "Jessica Jones (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/jessica-jones.html")
    return false;
} else if (x == "Legion (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/legion.html")
    return false;
} else if (x == "Wanda And Vision(TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/wanda-vision.html")
    return false;
} else if (x == "Loki (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/loki.html")
    return false;
} else if (x == "Falcon and The Winter Soldier (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/falcon-wintersoldier.html")
    return false;
} else if (x == "Hawkeye (TV)") {  window.location.assign("https://marvel-hub.blogspot.com/p/hawkeye.html")
    return false;
} else if (x == "Avengers Assemble (Anime)") {  window.location.assign("https://marvel-hub.blogspot.com/p/avengers-assemble.html")
    return false;
}

else if (x == "Tony Stark" | x == "Iron Man") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-man.html")
    return false;
} else if (x == "Captain America" | x == "Steve Rozers") {  window.location.assign("https:/mhbpedia.blogspot.com/p/steve-rozers.html")
    return false;
} else if (x == "Thor Odinson" | x == "God of Thunder") {  window.location.assign("https:/mhbpedia.blogspot.com/p/thor-odinson.html")
    return false;
} else if (x == "Carol Denvers" | x == "Captain Marvel") {  window.location.assign("https:/mhbpedia.blogspot.com/p/captain-marvel.html")
    return false;
} else if (x == "Clint Barton" | x == "Hawkeye") {  window.location.assign("https:/mhbpedia.blogspot.com/p/clint-barton.html")
    return false;
} else if (x == "Natasha Romanoff" | x == "Black Widow") {  window.location.assign("https:/mhbpedia.blogspot.com/p/black-widow.html")
    return false;
} else if (x == "Wanda Maximoff" | x == "Scarlette Witch") {  window.location.assign("https:/mhbpedia.blogspot.com/p/scarlette-witch.html")
    return false;
} else if (x == "Col. James Rhodes" | x == "War Machine" | x == "Iron Patriot") {  window.location.assign("https:/mhbpedia.blogspot.com/p/war-machine.html")
    return false;
} else if (x == "Peter Parker" | x == "Spider-Man") {  window.location.assign("https:/mhbpedia.blogspot.com/p/spider-man.html")
    return false;
} else if (x == "Sam Wilson" | x == "Falcon") {  window.location.assign("https:/mhbpedia.blogspot.com/p/sam-wilson.html")
    return false;
} else if (x == "Bucky Barnes" | x == "Winter Soldier") {  window.location.assign("https:/mhbpedia.blogspot.com/p/bucky-barnes.html")
    return false;
} else if (x == "Hulk" | x == "Bruce Banner") {  window.location.assign("https:/mhbpedia.blogspot.com/p/bruce-banner.html")
    return false;
} else if (x == "Ant-Man" | x == "Scott Lang") {  window.location.assign("https:/mhbpedia.blogspot.com/p/scott-lang.html")
    return false;
} else if (x == "Jane Foster" | x == "Mighty Thor") {  window.location.assign("https:/mhbpedia.blogspot.com/p/jane-foster.html")
    return false;
} else if (x == "T'Challa" | x == "Black Panther") {  window.location.assign("https:/mhbpedia.blogspot.com/p/t-challa.html")
    return false;
} else if (x == "Doctor Stephen Strange" | x == "Sorceror Supreme") {  window.location.assign("https:/mhbpedia.blogspot.com/p/doctor-strange.html")
    return false;
} else if (x == "Wasp" | x == "Hope Van Dyne") {  window.location.assign("https:/mhbpedia.blogspot.com/p/wasp.html")
    return false;
} else if (x == "Tony Stark" | x == "Iron Man") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-man.html")
    return false;
} else if (x == "Tony Stark" | x == "Iron Man") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-man.html")
    return false;
} else if (x == "Tony Stark" | x == "Iron Man") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-man.html")
    return false;
} else if (x == "Tony Stark" | x == "Iron Man") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-man.html")
    return false;
} else if (x == "Odin") {  window.location.assign("https:/mhbpedia.blogspot.com/p/odin.html")
    return false;
} else if (x == "Hogun") {  window.location.assign("https:/mhbpedia.blogspot.com/p/hogun.html")
    return false;
} else if (x == "Fandral") {  window.location.assign("https:/mhbpedia.blogspot.com/p/fandral.html")
    return false;
} else if (x == "Volstagg") {  window.location.assign("https:/mhbpedia.blogspot.com/p/volstagg.html")
    return false;
} else if (x == "Frigga") {  window.location.assign("https:/mhbpedia.blogspot.com/p/frigga.html")
    return false;
} else if (x == "Sif") {  window.location.assign("https:/mhbpedia.blogspot.com/p/sif.html")
    return false;
} else if (x == "Ho Yinsen") {  window.location.assign("https:/mhbpedia.blogspot.com/p/ho-yinsen.html")
    return false;
} else if (x == "Harley Keener") {  window.location.assign("https:/mhbpedia.blogspot.com/p/harley-keener.html")
    return false;
} else if (x == "J.A.R.V.I.S.") {  window.location.assign("https:/mhbpedia.blogspot.com/p/j-a-r-v-i-s.html")
    return false;
} else if (x == "F.R.I.D.A.Y.") {  window.location.assign("https:/mhbpedia.blogspot.com/p/f-r-i-d-a-y.html")
    return false;
} else if (x == "E.D.I.T.H.") {  window.location.assign("https:/mhbpedia.blogspot.com/p/e-d-i-t-h.html")
    return false;
} else if (x == "Peggy Carter") {  window.location.assign("https:/mhbpedia.blogspot.com/p/peggy-carter.html")
    return false;
} else if (x == "Howard Stark") {  window.location.assign("https:/mhbpedia.blogspot.com/p/howard-stark.html")
    return false;
} else if (x == "Maria Hill") {  window.location.assign("https:/mhbpedia.blogspot.com/p/maria-hill.html")
    return false;
} else if (x == "Abraham Erskine") {  window.location.assign("https:/mhbpedia.blogspot.com/p/abraham-erskine.html")
    return false;
} else if (x == "Sharon Carter") {  window.location.assign("https:/mhbpedia.blogspot.com/p/sharon-carter.html")
    return false;
} else if (x == "Erik Selvig") {  window.location.assign("https:/mhbpedia.blogspot.com/p/eric-selvig.html")
    return false;
} else if (x == "Skurge") {  window.location.assign("https:/mhbpedia.blogspot.com/p/skurge.html")
    return false;
} else if (x == "Heimdall") {  window.location.assign("https:/mhbpedia.blogspot.com/p/heimdall.html")
    return false;
} else if (x == "Pietro Maximoff" | x == "Quicksilver") {  window.location.assign("https:/mhbpedia.blogspot.com/p/quicksilver.html")
    return false;
} else if (x == "Eitri") {  window.location.assign("https:/mhbpedia.blogspot.com/p/eitri.html")
    return false;
} else if (x == "Wong") {  window.location.assign("https:/mhbpedia.blogspot.com/p/wong.html")
    return false;
} else if (x == "Shuri") {  window.location.assign("https:/mhbpedia.blogspot.com/p/shuri.html")
    return false;
} else if (x == "Cassie Lang") {  window.location.assign("https:/mhbpedia.blogspot.com/p/cassie-lang.html")
    return false;
} else if (x == "Maria Rambeau") {  window.location.assign("https:/mhbpedia.blogspot.com/p/maria-rambeau.html")
    return false;
} else if (x == "Karl Mordo") {  window.location.assign("https:/mhbpedia.blogspot.com/p/karl-mordo.html")
    return false;
} else if (x == "Ancient One") {  window.location.assign("https:/mhbpedia.blogspot.com/p/ancient-one.html")
    return false;
} else if (x == "Nakia") {  window.location.assign("https:/mhbpedia.blogspot.com/p/nakia.html")
    return false;
}

 else if (x == "Avengers") {  window.location.assign("https:/mhbpedia.blogspot.com/p/avengers.html")
    return false;
} else if (x == "X-Men") {  window.location.assign("https:/mhbpedia.blogspot.com/p/x-men.html")
    return false;
} else if (x == "HYDRA") {  window.location.assign("https:/mhbpedia.blogspot.com/p/hydra.html")
    return false;
} else if (x == "S.H.I.E.L.D.") {  window.location.assign("https:/mhbpedia.blogspot.com/p/shield.html")
    return false;
} else if (x == "Chittauri Army") {  window.location.assign("https:/mhbpedia.blogspot.com/p/chittaury-army.html")
    return false;
} else if (x == "The Dark Elves") {  window.location.assign("https:/mhbpedia.blogspot.com/p/dark-elves.html")
    return false;
} else if (x == "Elementals") {  window.location.assign("https:/mhbpedia.blogspot.com/p/elementals.html")
    return false;
} else if (x == "Frost Giants") {  window.location.assign("https:/mhbpedia.blogspot.com/p/frost-giants.html")
    return false;
} else if (x == "Black Order") {  window.location.assign("https:/mhbpedia.blogspot.com/p/black-order.html")
    return false;
} else if (x == "Guardians of the Galaxy") {  window.location.assign("https:/mhbpedia.blogspot.com/p/gotg.html")
    return false;
} else if (x == "Extremis") {  window.location.assign("https:/mhbpedia.blogspot.com/p/extremis.html")
    return false;
}

 else if (x == "Thanos" | x == "Mad Titan") {  window.location.assign("https:/mhbpedia.blogspot.com/p/thanos.html")
    return false;
} else if (x == "Loki" | x == "God of Mischief") {  window.location.assign("https:/mhbpedia.blogspot.com/p/loki.html")
    return false;
} else if (x == "Hela" | x == "Goddess of Death") {  window.location.assign("https:/mhbpedia.blogspot.com/p/hela.html")
    return false;
} else if (x == "Quentin Beck" | x == "Mysterio") {  window.location.assign("https:/mhbpedia.blogspot.com/p/mysterio.html")
    return false;
} else if (x == "Iron Monger" | x == "Obadiah Stane") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-monger.html")
    return false;
} else if (x == "Darren Cross" | x == "Yellowjacket") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-man.html")
    return false;
} else if (x == "Ava Starr" | x == "Ghost") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-man.html")
    return false;
} else if (x == "Brock Rumlow" | x == "Crossbones") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-man.html")
    return false;
} else if (x == "Red Skull" | x == "Johann Schmidt") {  window.location.assign("https:/mhbpedia.blogspot.com/p/red-skull.html")
    return false;
} else if (x == "Laufey") {  window.location.assign("https:/mhbpedia.blogspot.com/p/Laufey.html")
    return false;
} else if (x == "Abomination") {  window.location.assign("https:/mhbpedia.blogspot.com/p/abomination.html")
    return false;
} else if (x == "Ronan") {  window.location.assign("https:/mhbpedia.blogspot.com/p/ronan.html")
    return false;
} else if (x == "Galactus") {  window.location.assign("https:/mhbpedia.blogspot.com/p/galactus.html")
    return false;
} else if (x == "Ultron") {  window.location.assign("https:/mhbpedia.blogspot.com/p/ultron.html")
    return false;
} else if (x == "Whiplash" | x == "Ivan Vanko") {  window.location.assign("https:/mhbpedia.blogspot.com/p/whiplash.html")
    return false;
} else if (x == "Mandarin") {  window.location.assign("https:/mhbpedia.blogspot.com/p/mandarin.html")
    return false;
} else if (x == "Helmut Zemo") {  window.location.assign("https:/mhbpedia.blogspot.com/p/zemo.html")
    return false;
} else if (x == "Vulture" | x == "Adrian Toomes") {  window.location.assign("https:/mhbpedia.blogspot.com/p/vulture.html")
    return false;
} else if (x == "Dormammu") {  window.location.assign("https:/mhbpedia.blogspot.com/p/dormammu.html")
    return false;
} else if (x == "Surtur") {  window.location.assign("https:/mhbpedia.blogspot.com/p/surtur.html")
    return false;
} else if (x == "KillMonger" | x == "N'Jadaka") {  window.location.assign("https:/mhbpedia.blogspot.com/p/killmonger.html")
    return false;
} else if (x == "Taskmaster") {  window.location.assign("https:/mhbpedia.blogspot.com/p/taskmaster.html")
    return false;
} else if (x == "Malekith") {  window.location.assign("https:/mhbpedia.blogspot.com/p/malekith.html")
    return false;
} else if (x == "Aldrich Killian") {  window.location.assign("https:/mhbpedia.blogspot.com/p/aldrich-killian.html")
    return false;
} else if (x == "Maya Hansen") {  window.location.assign("https:/mhbpedia.blogspot.com/p/maya-hansen.html")
    return false;
} else if (x == "Alexander Pierce") {  window.location.assign("https:/mhbpedia.blogspot.com/p/alexander-pierce.html")
    return false;
} else if (x == "Kurse") {  window.location.assign("https:/mhbpedia.blogspot.com/p/kurse.html")
    return false;
} else if (x == "Algrim") {  window.location.assign("https:/mhbpedia.blogspot.com/p/algrim.html")
    return false;
} else if (x == "Cull Obsidian") {  window.location.assign("https:/mhbpedia.blogspot.com/pcull-obsidian.html")
    return false;
} else if (x == "Ebony Maw") {  window.location.assign("https:/mhbpedia.blogspot.com/p/ebony-maw.html")
    return false;
} else if (x == "Proxima Midnight") {  window.location.assign("https:/mhbpedia.blogspot.com/p/proxima-midnight.html")
    return false;
} else if (x == "Corvus Glaive") {  window.location.assign("https:/mhbpedia.blogspot.com/p/corvus-glaive.html")
    return false;
} else if (x == "Everett K. Ross") {  window.location.assign("https:/mhbpedia.blogspot.com/p/ek-ross.html")
    return false;
} else if (x == "Yon-Rogg") {  window.location.assign("https:/mhbpedia.blogspot.com/p/yon-rogg.html")
    return false;
} else if (x == "Aldrich Killian") {  window.location.assign("https:/mhbpedia.blogspot.com/p/aldrich-killian.html")
    return false;
} else if (x == "Taskmaster") {  window.location.assign("https:/mhbpedia.blogspot.com/p/taskmaster.html")
    return false;
} else if (x == "Ava Starr"  | x == "Ghost") {  window.location.assign("https:/mhbpedia.blogspot.com/p/ghost.html")
    return false;
} else if (x == "Darren Cross" | x == "Yellowjacket") {  window.location.assign("https:/mhbpedia.blogspot.com/p/yellowjacket.html")
    return false;
} else if (x == "Adrian Toomes" | x == "Vulture") {  window.location.assign("https:/mhbpedia.blogspot.com/p/vulture.html")
    return false;
} else if (x == "Tony Stark") {  window.location.assign("https:/mhbpedia.blogspot.com/p/iron-man.html")
    return false;
}

 else if (x == "Vormir") {  window.location.assign("https:/mhbpedia.blogspot.com/p/vormir.html")
    return false;
} else if (x == "Asgard") {  window.location.assign("https:/mhbpedia.blogspot.com/p/asgard.html")
    return false;
} else if (x == "Xandar") {  window.location.assign("https:/mhbpedia.blogspot.com/p/xandar.html")
    return false;
} else if (x == "Knowwhere") {  window.location.assign("https:/mhbpedia.blogspot.com/p/knowwhere.html")
    return false;
} else if (x == "Wakanda") {  window.location.assign("https:/mhbpedia.blogspot.com/p/wakanda.html")
    return false;
} else if (x == "Sokovia") {  window.location.assign("https:/mhbpedia.blogspot.com/p/sokovia.html")
    return false;
} else if (x == "Quantum Realm") {  window.location.assign("https:/mhbpedia.blogspot.com/p/quantum-realm.html")
    return false;
} else if (x == "Morag") {  window.location.assign("https:/mhbpedia.blogspot.com/p/morag.html")
    return false;
} else if (x == "Titan") {  window.location.assign("https:/mhbpedia.blogspot.com/p/Titan.html")
    return false;
}

else {  
    alert("Plzz type some Title, I'm not so intelligent like you");
    return false;
}
}


function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
     a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
var countries = ["Iron Man (2008)","Iron Man II (2010)","Iron Man III (2013)","Thor (2011)","Thor : The Dark World (2013)","Thor Ragnarok (2017)","Hulk (2008)","Captain America : The First Avenger (2010)","Captain America : The Winter Soldier (2014)","Captain America : Civil War (2016)","Guardians of The Galaxy (2014)","Guardians of The Galaxy Vol.2","Ant-Man (2015)","Ant-Man and the Wasp (2018)","Avengers : Infinity War (2018)","Avengers : Endgame (2019)","Avengers : Age Of Ultron (2015)","The Avengers 2012","Captain Marvel (2019)","Spider-Man : Homecoming (2016)","Spider-Man : Far From Home (2019)","Black Panther (2018)","Docter strange (2016)",

"Agents of S.H.I.E.L.D. (TV)","Agent Carter (TV)","The Defenders (TV)","The Gifted (TV)","Luke cage (TV)","Cloak and Dagger (TV)","Daredevil (TV)","Runaways (TV)","Jessica Jones (TV)","Legion (TV)","Wanda And Vision (TV)", "Loki (TV)", "Falcon and The Winter Soldier (TV)", "Hawkeye (TV)",

"X-Men (2000)","X2: X-Men United (2003)","X-Men : The Last Stand (2006)","X-Men Origins: Wolverine (2009)","X-Men : First Class (2011)","X-Men : Days of Future Past (2014)","X-Men: Apocalypse (2016)","Deadpool (2016)","Deadpool II (2018)", "Dark Phoenix (2019)","Logan (2017)","The Wolverine (2013)",

"Spider-Man 2017 (Anime)","Avengers assemble (Anime)","Hulk and the Agents of S.M.A.S.H. (Anime)","Guardians of the Galaxy (Anime)","Spider-Man 1994 (Anime)",
"Spider-Man 2008 (Anime)","Ultimate Spider-Man (Anime)",

"Iron Man","Tony Stark","Captain America","Steve Rozers","Thor Odinson","God of Thunder","Carol Denvers","Captain Marvel","Clint Barton",
"Hawkeye","Natasha Romanoff","Black Widow","Wanda Maximoff","Scarlette Witch","Vision","Peter Parker","Spider-Man","Col. James Rhodes","War Machine",
"Iron Patriot","Sam Wilson","Falcon","Bucky Barnes","Winter Soldier","Hulk","Bruce Banner","Ant-Man","Scott Lang","Hank Pym","Howard Stark","Happy Hogan",
"Jane Foster","Mighty Thor","Rocket Racoon", "Groot", "Pepper Potts", "Peter Quill","Starlord","Gamora", "Drax The Destroyer","T'Challa","Black Panther",
"Doctor Stephen Strange","Sorceror Supreme","Nebula", "Mantis", "Heimdall","Scrapper 142","Valkarie","Okoye","Shang Chi","Wong","Wasp","Hope van Dyne","Janet van Dyne", "Nick Fury","Collector","MJ.","Talos","Soren","Red Guardian","Peggy Carter","Agent Carter","Wade Wilson","Deadpool","Frigga","Odin","Heimdall","Hogun","Fandral",
"Volstagg","Frigga","Sif","Ho Yinsen","Harley Keener","Happy Hogan","J.A.R.V.I.S.","F.R.I.D.A.Y.","E.D.I.T.H.","Peggy Carter","Howard Stark",
"Abraham Erskine","Maria Hill","Sharon Carter","Erik Selvig","Grandmaster","Skurge","Phil Coulson","Pietro Maximoff","Quicksilver","Eitri","Wong","Shuri",
"Cassie Lang","Maria Rambeau","Karl Mordo","Ancient One","Nakia",

"Iron Monger","Obadiah Stane","Red Skull","Johann Schmidt","Stonekeeper","Loki","God of Mischief","Laufey","Abomination","Ronan","Quentin Beck","Mysterio","Galactus",
"Hela", "Goddess of Death","Ultron", "Whiplash","Ivan Vanko","Mandarin","Helmut Zemo","Malekith","Dormammu","Surtur","N'Jadaka","KillMonger","Thanos","Taskmaster",
"Aldrich Killian","Maya Hansen","Brock Rumlow","Crossbones","Alexander Pierce","Algrim","Kurse","Cull Obsidian","Ebony Maw","Proxima Midnight",
"Corvus Glaive","Darren Cross","Yellowjacket","Ava Starr","Ghost","Everett K. Ross","Yon-Rogg","Adrian Toomes","Vulture","Ten Rings",

"Thaddeus Thunderbolt Ross",
"Avengers","X-Men","HYDRA","S.H.I.E.L.D.","Chittauri Army","The Dark Elves","Elementals","Frost Giants","Black Order","Guardians of the Galaxy","", "Extremis",

"Vormir","Asgard","Xandar","Knowhere","Wakanda","Sokovia","Quantum Realm","Morag","Titan",
"Sokovia Accords",
 "Power Stone", "Time Stone", "Mind Stone", "Space Stone", "Reality Stone","Soul Stone" ,"Infinity Gauntlet", "Infinity Sword", "Vibranium shield", "Iron Man Armor", "Ten Rings","Tessaract","Cosmic Cube","Stormbreaker","Mjolnir",];

autocomplete(document.getElementById("myInput"), countries);
