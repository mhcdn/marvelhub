  var preKey = "?alt=media&key=";

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("mysearchbtn").click();
  }
});


linksData = [{"id":1,"url":"value","title":"Abomination"},{"id":2,"url":"value","title":"Abomination"},{"id":3,"url":"value","title":"Abraham Erskine"},{"id":4,"url":"value","title":"Adrian Toomes"},{"id":5,"url":"value","title":"Agent Carter"},{"id":6,"url":"https://marvel-hub.blogspot.com/p/agent-carter.html","title":"Agent Carter (TV)"},{"id":7,"url":"https://marvel-hub.blogspot.com/p/agents-of-shield.html","title":"Agents of S.H.I.E.L.D. (TV)"},{"id":8,"url":"value","title":"Aldrich Killian"},{"id":9,"url":"value","title":"Alexander Pierce"},{"id":10,"url":"value","title":"Algrim"},{"id":11,"url":"value","title":"Ancient One"},{"id":12,"url":"value","title":"Ant-Man"},{"id":13,"url":"https://mhb-movies.blogspot.com/p/ant-man.html","title":"Ant-Man (2015)"},{"id":14,"url":"https://mhb-movies.blogspot.com/p/ant-man-and-wasp.html","title":"Ant-Man and the Wasp (2018)"},{"id":15,"url":"value","title":"Asgard"},{"id":16,"url":"value","title":"Ava Starr"},{"id":17,"url":"value","title":"Avengers"},{"id":18,"url":"https://mhb-movies.blogspot.com/p/avengers-age-of-ultron.html","title":"Avengers : Age Of Ultron (2015)"},{"id":19,"url":"https://mhb-movies.blogspot.com/p/avengers-endgame.html","title":"Avengers : Endgame (2019)"},{"id":20,"url":"https://mhb-movies.blogspot.com/p/avengers-infinity-war.html","title":"Avengers : Infinity War (2018)"},{"id":21,"url":"value","title":"Black Order"},{"id":22,"url":"value","title":"Black Panther"},{"id":23,"url":"https://mhb-movies.blogspot.com/p/black-panther.html","title":"Black Panther (2018)"},{"id":24,"url":"value","title":"Black Widow"},{"id":25,"url":"value","title":"Brock Rumlow"},{"id":26,"url":"value","title":"Bruce Banner"},{"id":27,"url":"value","title":"Bucky Barnes"},{"id":28,"url":"value","title":"Captain America"},{"id":29,"url":"https://mhb-movies.blogspot.com/p/captain-america-civil-war.html","title":"Captain America : Civil War (2016)"},{"id":30,"url":"https://mhb-movies.blogspot.com/p/the-first-avenger.html","title":"Captain America : The First Avenger (2010)"},{"id":31,"url":"https://mhb-movies.blogspot.com/p/the-winter-soldier.html","title":"Captain America : The Winter Soldier (2014)"},{"id":32,"url":"value","title":"Captain Marvel"},{"id":33,"url":"https://mhb-movies.blogspot.com/p/captain-marvel.html","title":"Captain Marvel (2019)"},{"id":34,"url":"value","title":"Carol Denvers"},{"id":35,"url":"value","title":"Cassie Lang"},{"id":36,"url":"value","title":"Chittauri Army"},{"id":37,"url":"value","title":"Clint Barton"},{"id":38,"url":"https://marvel-hub.blogspot.com/p/cloak-and-dagger.html","title":"Cloak and Dagger (TV)"},{"id":39,"url":"value","title":"Col. James Rhodes"},{"id":40,"url":"value","title":"Collector"},{"id":41,"url":"value","title":"Corvus Glaive"},{"id":42,"url":"value","title":"Cosmic Cube"},{"id":43,"url":"value","title":"Crossbones"},{"id":44,"url":"value","title":"Cull Obsidian"},{"id":45,"url":"https://marvel-hub.blogspot.com/p/daredevil.html","title":"Daredevil (TV)"},{"id":46,"url":"https://mhb-movies.blogspot.com/p/dark-phoenix-2019.html","title":"Dark Phoenix (2019)"},{"id":47,"url":"value","title":"Darren Cross"},{"id":48,"url":"value","title":"Deadpool"},{"id":49,"url":"https://mhb-movies.blogspot.com/p/deadpool-2016.html","title":"Deadpool (2016)"},{"id":50,"url":"https://mhb-movies.blogspot.com/p/deadpool-2-2018.html","title":"Deadpool II (2018)"},{"id":51,"url":"https://mhb-movies.blogspot.com/p/doctor-strange.html","title":"Docter strange (2016)"},{"id":52,"url":"value","title":"Doctor Stephen Strange"},{"id":53,"url":"value","title":"Dormammu"},{"id":54,"url":"value","title":"Drax The Destroyer"},{"id":55,"url":"value","title":"E.D.I.T.H."},{"id":56,"url":"value","title":"Ebony Maw"},{"id":57,"url":"value","title":"Eitri"},{"id":58,"url":"value","title":"Elementals"},{"id":59,"url":"value","title":"Erik Selvig"},{"id":60,"url":"value","title":"Everett K. Ross"},{"id":61,"url":"value","title":"Extremis"},{"id":62,"url":"value","title":"F.R.I.D.A.Y."},{"id":63,"url":"value","title":"Falcon"},{"id":64,"url":"https://marvel-hub.blogspot.com/p/the-falcon-and-winter-soldier.html","title":"Falcon and The Winter Soldier (TV)"},{"id":65,"url":"value","title":"Fandral"},{"id":66,"url":"value","title":"Frigga"},{"id":67,"url":"value","title":"Frost Giants"},{"id":68,"url":"value","title":"Galactus"},{"id":69,"url":"value","title":"Gamora"},{"id":70,"url":"value","title":"Ghost"},{"id":71,"url":"value","title":"God of Mischief"},{"id":72,"url":"value","title":"God of Thunder"},{"id":73,"url":"value","title":"Goddess of Death"},{"id":74,"url":"value","title":"Grandmaster"},{"id":75,"url":"value","title":"Groot"},{"id":76,"url":"value","title":"Guardians of the Galaxy"},{"id":77,"url":"https://mhb-movies.blogspot.com/p/guardians-of-galaxy.html","title":"Guardians of The Galaxy (2014)"},{"id":78,"url":"https://mhb-movies.blogspot.com/p/guardians-of-galaxy-vol2.html","title":"Guardians of The Galaxy Vol.2"},{"id":79,"url":"value","title":"Hank Pym"},{"id":80,"url":"value","title":"Happy Hogan"},{"id":81,"url":"value","title":"Harley Keener"},{"id":82,"url":"value","title":"Hawkeye"},{"id":83,"url":"https://marvel-hub.blogspot.com/p/hawkeye.html","title":"Hawkeye (TV)"},{"id":84,"url":"value","title":"Heimdall"},{"id":85,"url":"value","title":"Hela"},{"id":86,"url":"value","title":"Helmut Zemo"},{"id":87,"url":"value","title":"Ho Yinsen"},{"id":88,"url":"value","title":"Hogun"},{"id":89,"url":"value","title":"Hope van Dyne"},{"id":90,"url":"value","title":"Howard Stark"},{"id":91,"url":"value","title":"Hulk"},{"id":92,"url":"https://mhb-movies.blogspot.com/p/hulk.html","title":"Hulk (2008)"},{"id":93,"url":"value","title":"HYDRA"},{"id":94,"url":"value","title":"Infinity Gauntlet"},{"id":95,"url":"value","title":"Infinity Sword"},{"id":96,"url":"value","title":"Iron Man"},{"id":97,"url":"https://mhb-movies.blogspot.com/p/iron-man.html","title":"Iron Man (2008)"},{"id":98,"url":"value","title":"Iron Man Armor"},{"id":99,"url":"https://mhb-movies.blogspot.com/p/iron-man-ii.html","title":"Iron Man II (2010)"},{"id":100,"url":"https://mhb-movies.blogspot.com/p/iron-man-iii.html","title":"Iron Man III (2013)"},{"id":101,"url":"value","title":"Iron Monger"},{"id":102,"url":"value","title":"Iron Patriot"},{"id":103,"url":"value","title":"Ivan Vanko"},{"id":104,"url":"value","title":"J.A.R.V.I.S."},{"id":105,"url":"value","title":"Jane Foster"},{"id":106,"url":"value","title":"Janet van Dyne"},{"id":107,"url":"https://marvel-hub.blogspot.com/p/jessica-jones.html","title":"Jessica Jones (TV)"},{"id":108,"url":"value","title":"Johann Schmidt"},{"id":109,"url":"value","title":"Karl Mordo"},{"id":110,"url":"value","title":"KillMonger"},{"id":111,"url":"value","title":"Knowhere"},{"id":112,"url":"value","title":"Kurse"},{"id":113,"url":"value","title":"Laufey"},{"id":114,"url":"https://marvel-hub.blogspot.com/p/legion.html","title":"Legion (TV)"},{"id":115,"url":"https://mhb-movies.blogspot.com/p/logan-2017.html","title":"Logan (2017)"},{"id":116,"url":"value","title":"Loki"},{"id":117,"url":"https://marvel-hub.blogspot.com/p/loki.html","title":"Loki (TV)"},{"id":118,"url":"https://marvel-hub.blogspot.com/p/luke-cage.html","title":"Luke cage (TV)"},{"id":119,"url":"value","title":"Malekith"},{"id":120,"url":"value","title":"Mandarin"},{"id":121,"url":"value","title":"Mantis"},{"id":122,"url":"value","title":"Maria Hill"},{"id":123,"url":"value","title":"Maria Rambeau"},{"id":124,"url":"value","title":"Maya Hansen"},{"id":125,"url":"value","title":"Mighty Thor"},{"id":126,"url":"value","title":"Mind Stone"},{"id":127,"url":"value","title":"MJ."},{"id":128,"url":"value","title":"Mjolnir"},{"id":129,"url":"value","title":"Morag"},{"id":130,"url":"value","title":"Mysterio"},{"id":131,"url":"value","title":"N'Jadaka"},{"id":132,"url":"value","title":"Nakia"},{"id":133,"url":"value","title":"Natasha Romanoff"},{"id":134,"url":"value","title":"Nebula"},{"id":135,"url":"value","title":"Nick Fury"},{"id":136,"url":"value","title":"Obadiah Stane"},{"id":137,"url":"value","title":"Odin"},{"id":138,"url":"value","title":"Okoye"},{"id":139,"url":"value","title":"Peggy Carter"},{"id":140,"url":"value","title":"Pepper Potts"},{"id":141,"url":"value","title":"Peter Parker"},{"id":142,"url":"value","title":"Peter Quill"},{"id":143,"url":"value","title":"Phil Coulson"},{"id":144,"url":"value","title":"Pietro Maximoff"},{"id":145,"url":"value","title":"Power Stone"},{"id":146,"url":"value","title":"Proxima Midnight"},{"id":147,"url":"value","title":"Quantum Realm"},{"id":148,"url":"value","title":"Quentin Beck"},{"id":149,"url":"value","title":"Quicksilver"},{"id":150,"url":"value","title":"Reality Stone"},{"id":151,"url":"value","title":"Red Guardian"},{"id":152,"url":"value","title":"Red Skull"},{"id":153,"url":"value","title":"Rocket Racoon"},{"id":154,"url":"value","title":"Ronan"},{"id":155,"url":"https://marvel-hub.blogspot.com/p/the-runaways.html","title":"Runaways (TV)"},{"id":156,"url":"value","title":"S.H.I.E.L.D."},{"id":157,"url":"value","title":"Sam Wilson"},{"id":158,"url":"value","title":"Scarlette Witch"},{"id":159,"url":"value","title":"Scott Lang"},{"id":160,"url":"value","title":"Scrapper 142"},{"id":161,"url":"value","title":"Shang Chi"},{"id":162,"url":"value","title":"Sharon Carter"},{"id":163,"url":"value","title":"Shuri"},{"id":164,"url":"value","title":"Sif"},{"id":165,"url":"value","title":"Skurge"},{"id":166,"url":"value","title":"Sokovia"},{"id":167,"url":"value","title":"Sokovia Accords"},{"id":168,"url":"value","title":"Sorceror Supreme"},{"id":169,"url":"value","title":"Soren"},{"id":170,"url":"value","title":"Soul Stone"},{"id":171,"url":"value","title":"Space Stone"},{"id":172,"url":"value","title":"Spider-Man"},{"id":173,"url":"https://mhb-movies.blogspot.com/p/far-from-home.html","title":"Spider-Man : Far From Home (2019)"},{"id":174,"url":"https://mhb-movies.blogspot.com/p/spider-man-homecoming.html","title":"Spider-Man : Homecoming (2016)"},{"id":175,"url":"value","title":"Starlord"},{"id":176,"url":"value","title":"Steve Rozers"},{"id":177,"url":"value","title":"Stonekeeper"},{"id":178,"url":"value","title":"Stormbreaker"},{"id":179,"url":"value","title":"Surtur"},{"id":180,"url":"value","title":"T'Challa"},{"id":181,"url":"value","title":"Talos"},{"id":182,"url":"value","title":"Taskmaster"},{"id":183,"url":"value","title":"Ten Rings"},{"id":184,"url":"value","title":"Tessaract"},{"id":185,"url":"value","title":"Thaddeus Thunderbolt Ross"},{"id":186,"url":"value","title":"Thanos"},{"id":187,"url":"https://mhb-movies.blogspot.com/p/avengers.html","title":"The Avengers 2012"},{"id":188,"url":"value","title":"The Dark Elves"},{"id":189,"url":"https://marvel-hub.blogspot.com/p/the-defenders.html","title":"The Defenders (TV)"},{"id":190,"url":"https://marvel-hub.blogspot.com/p/the-gifted.html","title":"The Gifted (TV)"},{"id":191,"url":"https://mhb-movies.blogspot.com/p/the-wolverine-2013.html","title":"The Wolverine (2013)"},{"id":192,"url":"https://mhb-movies.blogspot.com/p/thor-dark-world.html","title":"Thor : The Dark World (2013)"},{"id":193,"url":"https://mhb-movies.blogspot.com/p/thor.html","title":"Thor (2011)"},{"id":194,"url":"value","title":"Thor Odinson"},{"id":195,"url":"https://mhb-movies.blogspot.com/p/thor-ragnarok.html","title":"Thor Ragnarok (2017)"},{"id":196,"url":"value","title":"Time Stone"},{"id":197,"url":"value","title":"Titan"},{"id":198,"url":"value","title":"Tony Stark"},{"id":199,"url":"value","title":"Ultron"},{"id":200,"url":"value","title":"Valkarie"},{"id":201,"url":"value","title":"Vibranium shield"},{"id":202,"url":"value","title":"Vision"},{"id":203,"url":"value","title":"Volstagg"},{"id":204,"url":"value","title":"Vormir"},{"id":205,"url":"value","title":"Vulture"},{"id":206,"url":"value","title":"Wade Wilson"},{"id":207,"url":"value","title":"Wakanda"},{"id":208,"url":"value","title":"Wanda Maximoff"},{"id":209,"url":"https://marvel-hub.blogspot.com/p/wandavision.html","title":"WandaVision (TV)"},{"id":210,"url":"value","title":"War Machine"},{"id":211,"url":"value","title":"Wasp"},{"id":212,"url":"value","title":"Whiplash"},{"id":213,"url":"value","title":"Winter Soldier"},{"id":214,"url":"value","title":"Wong"},{"id":215,"url":"value","title":"X-Men"},{"id":216,"url":"https://mhb-movies.blogspot.com/p/x-men-days-of-future-past-2014.html","title":"X-Men : Days of Future Past (2014)"},{"id":217,"url":"https://mhb-movies.blogspot.com/p/x-men-first-class-2011.html","title":"X-Men : First Class (2011)"},{"id":218,"url":"https://mhb-movies.blogspot.com/p/x-men-last-stand-2006.html","title":"X-Men : The Last Stand (2006)"},{"id":219,"url":"https://mhb-movies.blogspot.com/p/x-men-2000.html","title":"X-Men (2000)"},{"id":220,"url":"https://mhb-movies.blogspot.com/p/x-men-origins-wolverine-2009.html","title":"X-Men Origins: Wolverine (2009)"},{"id":221,"url":"https://mhb-movies.blogspot.com/p/x-men-apolcalypse-2016.html","title":"X-Men: Apocalypse (2016)"},{"id":222,"url":"https://mhb-movies.blogspot.com/p/x2-x-men-united.html","title":"X2: X-Men United (2003)"},{"id":223,"url":"value","title":"Xandar"},{"id":224,"url":"value","title":"Yellowjacket"},{"id":225,"url":"value","title":"Yon-Rogg"}]



function validateForm() {
  var titleInput = document.getElementById("myInput").value;
    var indexTitle = linksData.findIndex(obj => obj.title == titleInput);

if (indexTitle > -1) {  window.location.assign(linksData[indexTitle].url);}
else {  
    alert("There is no page Marvel Hub like you typed.");
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
