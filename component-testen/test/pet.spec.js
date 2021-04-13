var chakram = require("chakram")
var expect = chakram.expect;
var urlBase = "http://localhost:3000/pet-api";

describe("pet api rest test",function(){

  it("I should be able to update a pet status to found",function(){
    chakram.post(urlBase + '/found', {
      name: 'Minoes'
    }).then((request) => {
      expect(request).to.have.status(200)
    })
    
    chakram.get(urlBase + '/get-all').then((response) => {
      expect(response.body[0].found).to.be.true
    })
  });
});