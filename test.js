const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// connect DB

mongoose.connect("mongodb://127.0.0.1:27017/pcat-test-db");
//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
})

const Photo = mongoose.model('Photo', PhotoSchema)

//? create a photo
// Photo.create({
//     title: "Photo Title 2",
//     description: "Photo description 2 lorem ipsum"
// })

//?read a photo
//  async function readPhoto() {
//     try {
//         const data =  await Photo.find({});
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
 
//  } 
//  readPhoto()

// ?Update photo
// const id ="655f9223f48dd2ad6a564541";
// const dataupdated = {title :  "Photo Title 1 updated",
// description :"Photo description 1 updated"}
// async function UpdatePhoto() {
//     try {
//        const updated = await Photo.findByIdAndUpdate(id,dataupdated,{new:true})
//         console.log(updated)
//     } catch (error) {
//         console.log(error)
//     }
// }
// UpdatePhoto()


//? Delete photo
  const id ="655f9223f48dd2ad6a564541";
const DeletePhoto = async() => {
    try {
        await Photo.findByIdAndDelete(id)
        console.log("It was removed")    
    } catch (error) {
        console.log(error)
    }
    
} 
DeletePhoto();


