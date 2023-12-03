const express = require("express")
const mongoose = require("mongoose")
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override')
const ejs = require("ejs")
const app = express();
const photoController = require('./controllers/photocontrollers')
const pageController = require('./controllers/pagecontroller')
//connect DB


mongoose.connect("mongodb+srv://xataializade01:xetai12345@cluster0.a2dghd0.mongodb.net/pcat-db?retryWrites=true&w=majority", {
 serverSelectionTimeoutMS: 5000,
}).then(()=> {
    console.log("DB CONNECTED!")
})
.catch((error) => {
    console.log(error)
})

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});





//Template ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUpload());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

//ROUTES
app.get("/", photoController.getAllPhotos)
app.get("/photos/:id", photoController.getPhoto)
app.post("/photos", photoController.createPhoto)
app.put("/photos/:id", photoController.updatePhoto)
app.delete('/photos/:id', photoController.deletePhoto)

app.get("/photos/edit/:id", pageController.getEditPage)
app.get("/about", pageController.getAboutPage)
app.get("/add", pageController.getAddPage)


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda baslatildi.`)
})