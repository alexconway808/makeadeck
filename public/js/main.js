(function(){
  var IMAGEPATHS = {
    "Diamonds" : "https://s3.amazonaws.com/uploads.hipchat.com/54891/813048/xfN6DyUUrDqJjoS/Screen%20Shot%202014-09-17%20at%208.22.33%20PM.png", 
    "Spades" : "https://s3.amazonaws.com/uploads.hipchat.com/54891/813048/LFWNhmpId7o3auv/Screen%20Shot%202014-09-17%20at%208.22.25%20PM.png",
    "Clubs" : "https://s3.amazonaws.com/uploads.hipchat.com/54891/813048/dzGDQoT1OjhuzUF/Screen%20Shot%202014-09-17%20at%208.22.39%20PM.png",
    "Hearts" : "https://s3.amazonaws.com/uploads.hipchat.com/54891/813048/ubJFZeqSuSy7kB5/Screen%20Shot%202014-09-17%20at%208.22.45%20PM.png"
  };

  //Instantiate a new deck from the Deck class
  var deck = new Deck();

  deck.shuffle();

  var hand = deck.deal();

  var handContainer = $('<div id ="display_MyHand"></div>');
  $("body").append(handContainer);


  var cardOne = $('<div id ="display_cardOne"></div>');
  var cardOneValue = $('<h1></h1>').html(hand[0].value);
  cardOne.append(cardOneValue);
  var cardOneSuit = IMAGEPATHS[hand[0].suit];
  var cardOneImage = $('<img src="'+cardOneSuit + '">');  
  cardOne.append(cardOneImage);
  handContainer.append(cardOne);

  var cardTwo = $('<div id ="display_cardTwo"></div>');
  var cardTwoValue = $('<h1></h1>').html(hand[1].value);
  cardTwo.append(cardTwoValue);
  var cardTwoSuit = IMAGEPATHS[hand[1].suit];
  var cardTwoImage = $('<img src="'+cardTwoSuit + '">');
  cardTwo.append(cardTwoImage);
  handContainer.append(cardTwo);

  var cardThree = $('<div id ="display_cardThree"></div>');
  var cardThreeValue = $('<h1></h1>').html(hand[2].value);
  cardThree.append(cardThreeValue);
  var cardThreeSuit = IMAGEPATHS[hand[2].suit];
  var cardThreeImage = $('<img src="'+cardThreeSuit + '">');
  cardThree.append(cardThreeImage);
  handContainer.append(cardThree);  

  var cardFour = $('<div id ="display_cardFour"></div>');
  var cardFourValue = $('<h1></h1>').html(hand[3].value);
  cardFour.append(cardFourValue);
  var cardFourSuit = IMAGEPATHS[hand[3].suit];
  var cardFourImage = $('<img src="'+cardFourSuit + '">');
  cardFour.append(cardFourImage);
  handContainer.append(cardFour);

  var cardFive = $('<div id ="display_cardFive"></div>');
  var cardFiveValue = $('<h1></h1>').html(hand[4].value);
  cardFive.append(cardFiveValue);
  var cardFiveSuit = IMAGEPATHS[hand[4].suit];
  var cardFiveImage = $('<img src="'+cardFiveSuit + '">');
  cardFive.append(cardFiveImage);
  handContainer.append(cardFive);


})()