// const address1= showAddress("Clarks quarter","Buea", "SW0948")
// console.log(address)
// function showAddress(street,city, zipCode ){
//   return {
//     street,
//     city,
//     zipCode
//   }
  
// }
// showAddress(address);

// let address = new ShowAddress("Malingo", "Buea", "SW05484");
// console.log(address);
// function ShowAddress(street, city, zipCode){
//   this.street = street,
//   this.city = city,
//   this.zipCode = zipCode

// }

// Address()


let address2 = new Address('a','b', 'c','d');
let address3 = new Address("a", "b", "c", "d");

let equalAddress = new areEqual();
console.log(equalAddress);

function areEqual(address2, address3){
  return Object.keys( address2 ).every( function( prop ) {
    return address3.hasOwnProperty( prop );
  });

}

function Address(street, city, zipCode){
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}