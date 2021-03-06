const express = require('express')

const router = express.Router()

const HowTos = require('./howTo-model')

router.get('/', (req, res) => {
    HowTos.getHowTos()
        .then(howto => {
            res.status(200).json(howto)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error getting all the How-To s ' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    HowTos.getHowTo(id)
        .then(howto => {
            if (howto) {
                res.status(200).json(howto)
            } else {
                res.status(404).json({ errorMessage: 'Could not find how-to with that Id' })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error getting how to' })
        })
})

router.get('/category', (req, res) => {
    const { category } = req.body
    HowTos.getByCategory(category)
        .then(howto => {
            res.status(200).json(howto)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error getting all the How-To s in that category ' })
        })
})

router.get('/complexity', (req, res) => {
    const { complexity } = req.body
    HowTos.getByomplexity(complexity)
        .then(howto => {
            res.status(200).json(howto)
        })
        .catch(error => {
            console.log(error)
            HowTos.getByomplexity(complexity)
            res.status(500).json({ errorMessage: 'Error getting all the How-To s with that complexity' })
        })
})

module.exports = router;