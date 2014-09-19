//Creating the class
var Deck = function() {
  //Creating the constructors
  this.cards = [];
  //Calling the generate function
  this.generate();
}

//Adding the generate function to the Deck class
Deck.prototype.generate = function(){
  var suitNames = ["Diamonds", "Spades", "Clubs", "Hearts"];
  var tempCard = 1;

  for (var cardsPerSuit = 1; cardsPerSuit <= 13; cardsPerSuit++, tempCard++){
    // this.cards.push(i + "");  //push the numbers into an array as a string using the + ""
    if (cardsPerSuit === 1){
      cardsPerSuit = "Ace";
    }
    if (cardsPerSuit === 11){
      cardsPerSuit = "Jack";
    }
    if (cardsPerSuit === 12){
      cardsPerSuit = "Queen";
    }
    if (cardsPerSuit === 13){
      cardsPerSuit = "King";
    }

    for (var suits = 0; suits < suitNames.length; suits++){
      var card = new Card(suitNames[suits], cardsPerSuit);
      this.cards.push(card);
    }
    cardsPerSuit = tempCard;
  }
}

Deck.prototype.deal = function(){
  return this.cards.splice(0, 5);  //Splice out and return the first 5 elements of the this.cards array
}

Deck.prototype.shuffle = function(){
  var counter = this.cards.length; 
  var random_index = 0;
  var temp = null;

  while (counter > 0) {

    random_index = Math.floor(Math.random() * counter);

    counter--;

    temp = this.cards[counter];
    this.cards[counter] = this.cards[random_index];
    this.cards[random_index] = temp; 
  } 

}

  
  //assign each card to a random number
  //sort the numbers asc to desc
  //change the number back to cards
  //display random deck
