var myComputer = {
    operatingSystem: "manjaro",
    screenSize: "27 inces",
    purchaseYear: 2011
};

var andreas = {
    name: 'Andreas',
    sayName: function() {
      // You could also have gordon.name instead of this.name,
      // but then if you changed the name of the object from gordon
      // to something else, you'd have to change this line too.
      console.log(this.name);  
    }
  }