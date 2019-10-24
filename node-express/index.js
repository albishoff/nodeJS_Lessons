const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRouts = require('./routs/home')
const addRouts = require('./routs/add')
const courseRouts = require('./routs/courses')

const app = express()

const hbs = exphbs.create({
	defaultLayout: 'main',
	extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use('/', homeRouts)
app.use('/add', addRouts)
app.use('/courses', courseRouts)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
