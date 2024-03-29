$("#salvona-circle").on("click", showSalvona);
$("#rutgers-circle").on("click", showRutgers);
$("#board-circle").on("click", showBoard);
$("#lifetime-circle").on("click", showLifetime);
$("#coding-circle").on("click", showCoding);
$("#mysuit-circle").on("click", showMysuit);

$("#salvona-circle").dblclick(function () {
  window.location = "https://www.salvona.com/";
});

$("#rutgers-circle").dblclick(function () {
  window.location = "https://www.rutgers.edu/";
});

$("#board-circle").dblclick(function () {
  window.location = "https://ballotpedia.org/Cameron_Cardinale";
});

$("#lifetime-circle").dblclick(function () {
  window.location = "https://www.lifetime.life/";
});

$("#coding-circle").dblclick(function () {
  window.location = "https://bootcamp.rutgers.edu/coding/";
});

$("#mysuit-circle").dblclick(function () {
  window.location = "https://mysuit.com/";
});

function showSalvona() {
  $("#experience-desc").empty();
  $("#experience-desc").append(
    '<div class="experience-desc-text">Salvona is a biotechnology company that works on microencapsulation systems for pharmaceuticals and cosmetics. At Salvona I helped test and create these systems after bringing the company fully online from a completely paper client database.</div>'
  );
}

function showRutgers() {
  $("#experience-desc").empty();
  $("#experience-desc").append(
    '<div class="experience-desc-text">In 2016 I began my pursuit of a Bachelor\'s Degree at Rutgers University in New Brunswick. I studied Political Science before graduating in May of 2020.</div>'
  );
}

function showBoard() {
  $("#experience-desc").empty();
  $("#experience-desc").append(
    '<div class="experience-desc-text">In 2017 I was elected out of a field of 13 candidates as the youngest member of the Board of Education, taking office in 2018. My time on the Board afforded me leadership skills along with a collaborative mindset. While on the board, I worked to balance a $200 million budget as part of the Finance Committee along with enhancing the district\'s technology as head of the Technology Committee.</div>'
  );
}

function showLifetime() {
  $("#experience-desc").empty();
  $("#experience-desc").append(
    '<div class="experience-desc-text">I have been CPR, AED, and First Aid certified for some time now. While at LifeTime I learned how to work as a team with my fellow guards and how to stay focused on one task for a long period of time.</div>'
  );
}

function showCoding() {
  $("#experience-desc").empty();
  $("#experience-desc").append(
    '<div class="experience-desc-text">In July of 2021 I began the Rutgers Coding Bootcamp. It is a 12-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Jest, Node.js, MySQL, MERN, Express, Handelbars.js, React, along with others.</div>'
  );
}

function showMysuit() {
  $("#experience-desc").empty();
  $("#experience-desc").append(
    '<div class ="experience-desc-text">After the coding bootcamp, I joined the My.Suit team as a Software Developer in New York, NY. My suit is a company that strives to make the best custom tailor-fit suits in the industry. I currently work as their lead full stack developer, working to rework their old classic ASP system into a React/Node driven system.</div>'
  );
}

var cards = document.getElementsByClassName("card");

function showAll() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;
  }
}

function showAPI() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("api-calls")) {
      cards[i].hidden = true;
    }
  }
}

function showReactNative() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("react-native")) {
      cards[i].hidden = true;
    }
  }
}

function showBootstrap() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("bootstrap")) {
      cards[i].hidden = true;
    }
  }
}

function showJest() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("jest")) {
      cards[i].hidden = true;
    }
  }
}

function showReact() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("react")) {
      cards[i].hidden = true;
    }
  }
}

function showjquery() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("jquery")) {
      cards[i].hidden = true;
    }
  }
}

function showMongo() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("mongo")) {
      cards[i].hidden = true;
    }
  }
}

function showMySql() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("mysql")) {
      cards[i].hidden = true;
    }
  }
}

function showExpress() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("express")) {
      cards[i].hidden = true;
    }
  }
}

function showNode() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("node")) {
      cards[i].hidden = true;
    }
  }
}

function showServer() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("server")) {
      cards[i].hidden = true;
    }
  }
}

function showInquirer() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].hidden = false;

    if (!cards[i].classList.contains("inquirer")) {
      cards[i].hidden = true;
    }
  }
}

$("#node-filter").on("click", showNode);
$("#express-filter").on("click", showExpress);
$("#mysql-filter").on("click", showMySql);
$("#mongo-filter").on("click", showMongo);
$("#jquery-filter").on("click", showjquery);
$("#react-filter").on("click", showReact);
$("#jest-filter").on("click", showJest);
$("#all-filter").on("click", showAll);
$("#api-filter").on("click", showAPI);
$("#bootstrap-filter").on("click", showBootstrap);
$("#server-filter").on("click", showServer);
$("#inquirer-filter").on("click", showInquirer);
$("#react-native-filter").on("click", showReactNative);
