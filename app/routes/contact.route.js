const express = require('express')
const contacts = require('../controllers/contact.controller.js')
const router = express.Router()


router.route('/')
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll)

router.route('/favorite')
    .get(contacts.findOneFavorite)

router.route('/:Id')
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete)

module.exports = router