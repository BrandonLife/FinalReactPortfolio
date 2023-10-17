const router = require('express').Router()
const Card = require('../models/card')
const cardSeedData = require('../models/cardSeedData')


//Seed data route
router.get('/data/seed', async (req, res)=>{
    await Promise.all([Movie.deleteMany()])
     const cards = await Card.insertMany(cardSeedData)
    res.redirect('/cards')
  
  })

//Home route for all cards
router.get('/', async (req, res)=>{
    let cards = await Card.find()
    res.render('Home', {cards})
})


//Get a specific page for a card
router.get('/:id', async (req, res)=>{
    const {id}= req.params
    const card = await Card.findById(id)
    res.render('cardShow', {card})
})

//Render make a new card page
router.get('/new', async (req, res)=>{
    res.render('newCard')
})

router.get('/projects', async (req, res)=>{
    let projects = await Card.find()
    res.render('projects', {projects})
})

//Create a new card
router.post('/', async (req, res)=>{
    console.log('post route hit')
   await Card.create(req.body)
    res.redirect('Projects')
})


//Get edit page for a card
router.get('/:id/edit', async (req, res)=>{
    const {id} = req.params
    let card = await Card.findById(id)
    res.render('cardEdit', {card})
})

router.delete('/:id', async (req, res)=>{
    const {id} = req.params
    await Card.findByIdAndDelete(id)
    res.redirect('/cards')
})

router.put('/:id', async (req, res)=>{
    const {id} = req.params
    await Card.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/cards/${id}`)
})

module.exports = router