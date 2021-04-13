var express = require('express');
var router = express.Router();
var PetService = require('../services/petService')
petService = new PetService()

/* GET users listing. */
router.get('/get-all', function(req, res, next) {
  res.statusCode = 200
  res.send(petService.getAllPets());
});

router.post('/add', function(req,res, next) {
  if (!req.body.name) {
    res.statusCode = 422
    res.send('please enter a name for the pet')
  } else {
    petService.addPet(req.body.name)
    res.send('pet ' + req.body.name + ' was added to the list')
  }
})

router.post('/found', function(req, res, next) {
  if (!req.body.name) {
    res.statusCode = 422
    res.send('please enter a name for the pet')
  } else {
    try {
      petService.makePetFound(req.body.name)
      res.send('pet ' + req.body.name + ' is now marked as found')
    } catch(e) {
      res.statusCode = 422
      console.log(e)
      res.send(e)
    }
  }
})

router.delete('/', function(req,res, next) {
  if (!req.body.name) {
    res.statusCode = 422
    res.send('please enter a name for the pet')
  } else {
    try {
      petService.deletePet(req.body.name)
      res.send('pet ' + req.body.name + ' was deleted from the list')
    } catch(e) {
      res.statusCode = 422
      console.log(e)
      res.send(e)
    }
  }
})

module.exports = router;
