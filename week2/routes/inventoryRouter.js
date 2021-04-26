const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

//get all 
inventoryRouter.get('/', (req, res, next) => {
    Inventory.find((err, items) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(items)
    })
})

//post 
inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedItem)
    })
  })

  //delete
  inventoryRouter.delete("/:itemID", (req, res, next) => {
    Inventory.findOneAndDelete(
      {_id: req.params.itemID}, 
      (err, deletedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.item} from the database`)
      }
    )
  })

  //update (put)
  inventoryRouter.put("/:itemID", (req, res, next) => {
    Inventory.findOneAndUpdate(
      { _id: req.params.itemID},
      req.body,
      {new: true},
      (err, updatedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedItem)
      }
    )  
  })

  module.exports = inventoryRouter