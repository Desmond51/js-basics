const address1= showAddress("Clarks quarter","Buea", "SW0948")
console.log(address)
function showAddress(street,city, zipCode ){
  return {
    street,
    city,
    zipCode
  }
  
}
showAddress(address);

let address = new ShowAddress("Malingo", "Buea", "SW05484");
console.log(address);
function ShowAddress(street, city, zipCode){
  this.street = street,
  this.city = city,
  this.zipCode = zipCode

}

Address()