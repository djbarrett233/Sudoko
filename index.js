// Load boards from file or manually - Redfyker tutorial 
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];

  //Create varables
  var timer;
  var timeRemaining;
  var lives;
  var selectedNum;
  var selectedTile;
  var disableSelect;

  window.onload = function() {
      // Run startfame function when vutton is clicked
      id("start-btn").addEventListener("click", startGame);
  }

  function startGame() {
      //Choose board difficulty
      let board;
      if (id("diff-1").checked) board = easy[0];
      else if (id("diff-2").checked) board = medium[0];
      else board = hard[0];
      // Set lives to 3 and enable selected numbers and tiles
      lives = 3;
      disableSelect = false; 
      id("lives").textContent = "Lives Remaining: 3";
      // Generate board based on difficulty
      generateBoard(board);
  }

  function generateBoard(board) {
      //Clear prvious board
      clearPrevious();
  }

  function clearPrevious() {
      // Access all of the tiles
      let tiles = qsa(".tile");
      //Remove each tile
      for (let i = 0; i < tiles.lemght; i++) {
          tiles[i].remove();
      }
      //If there is a timer clear it
      if (timer) clearTimeout(timer);
      }

  // Helper functions 
  function id(id) {
      return document.getElementById(id);
  }

  function qs(selector) {
      return document.querySelector(selector);
  }

  function qsa(selector) {
      return document.querySelectorAll(selector);
  }