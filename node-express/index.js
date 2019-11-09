const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const homeRouts = require('./routs/home')
const cardRouts = require('./routs/card')
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

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use('/', homeRouts)
app.use('/add', addRouts)
app.use('/courses', courseRouts)
app.use('/card', cardRouts)

const PORT = process.env.PORT || 3000

async function start() {
	try {
		const url = 'mongodb+srv://sergey:xE9RwuURNWh4MmkG@cluster0-kitpb.mongodb.net/shop'
		await mongoose.connect(url, { useNewUrlParser: true })

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}

start()
