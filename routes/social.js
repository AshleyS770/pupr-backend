const express = require('express')
const router = express.Router()
const Utils = require('../utils')
const Social = require('../models/Social')

// GET- get all profiles ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Social.find().populate('user', '_id firstName lastName')
    .then(profiles => {
      if(profiles == null){
        return res.status(404).json({
          message: "No profile found"
        })
      }
      res.json(profiles)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Problem getting profile"
      })
    })  
})

// export
module.exports = router