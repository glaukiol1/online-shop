
const express = require('express') // Require ExpressJS

const app = express() // Init the app AKA server

const bodyParser = require('body-parser') // Require Body Parser Module
const cookieParser = require('cookie-parser') // Require Cookie Parser Module

app.use(cookieParser()) // Use cookie parser module in our server
app.use(bodyParser.urlencoded({
	extended: true
})); // Use body parser module in our server
app.use(express.json()) // Use JSON in our server
app.set('view engine', 'pug') // Use the pug langauge to default view
app.use(express.static('public')) // Set the public folder to be static in our server


app.get('/', (req,res) => { // Setup GET request on the / route
	res.render('index.pug') // Render the index.pug file to the client
})

app.get('/shop', (req,res) => {
	res.render('shop.pug')
})

const shoes = require("./shoes.json");

app.get('/shoes', (req,res) => {
	if (req.query.id) {
		const id = parseInt(req.query.id);
		var shoe = null;
		shoes.shoes.forEach(_shoe => {
			if (_shoe.id === id) {
				shoe = _shoe;
			}
		});
		res.json(shoe);
	} else {
		res.json(shoes);
	}
})

app.get('/buy', (req,res)=>{
	if (req.query.id) {
		res.render('buy')
	} else {
		res.redirect('/shop')
	}
})
const crypto = require('crypto');

const encrypt = (txt)=>{
	return crypto.createHash('sha256').update(txt).digest('hex')
}
const password = "GLAUKIOl1_ADMIN_PASSWORD";

const enc = encrypt(password);

app.get('/admin', (req,res)=>{
	if (req.cookies.admin === enc) {
		res.render('admin')
	} else {
		if (!req.cookies.admin) {
			res.render('admin-login');
			res.end()
		}
		if (req.cookies.admin && !req.query.error) {
			if (req.cookies.admin !== 'logout') {
				res.redirect('/admin?error=wrongpass')
			} else {
				res.redirect('/admin?error=logout')
			}
		} else {
			res.render('admin-login')
		}
	}
})

app.listen(3000, ()=>{console.log('Server Started on 127.0.0.1:3000!')}) // Listen on port 3000

