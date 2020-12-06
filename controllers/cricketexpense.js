const { response } = require('express')
const cricketexpense = require('../models/cricketexpense')

const credit =(req,res,next) =>{
    let CricketExpense = new cricketexpense({
        Name:req.body.Name,
        Amount:req.body.Amount,
        Type:req.body.Type,
        Date:req.body.Date
    })
    CricketExpense.save()
    .then(response =>{
        res.json({
            message: 'Credited successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occoured'
        })
    })
}
module.exports = {credit}