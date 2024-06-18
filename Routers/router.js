const express = require("express")

const router = new express.Router()

module.exports =  router;

// a register
router.post('/users/register',userController.register)