// This is a Node.js server file example

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// Then you can use process.env.DB_CONNECTION_STRING to access your connection string

const app = express();
const port = 3000;

const ensureFavoritesAlbumExists = async () => {
  const favoritesAlbum = await Album.findOne({ albumName: "Favorites" });
  if (!favoritesAlbum) {
    // The "Favorites" album doesn't exist, so create it
    const newFavoritesAlbum = new Album({ albumName: "Favorites", albumDescription: "User favorite images and videos" });
    await newFavoritesAlbum.save();
    console.log('Favorites album created');

    return false;
  }

  return true;
};
  
// Call this function after connecting to MongoDB
mongoose.connect(process.env.DB_CONNECTION_STRING)
.then(() => {
  console.log('MongoDB connected...');
  ensureFavoritesAlbumExists();
})
.catch(err => console.log(err)); 
  
// Album Schema
const AlbumSchema = new mongoose.Schema({
  albumName: {
    type: String,
    required: true,
    trim: true
  },
  albumDescription: {
    type: String,
    trim: true
  },
  albumCreationTimestamp: {
    type: Date,
    default: Date.now
  },
  albumModificationTimestamp: {
    type: Date,
    default: Date.now
  }
});
  
// Image Schema
const ImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true
  },
  imageCreationTimestamp: {
    type: Date,
    default: Date.now
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album'
  }
});

// Create Models
const Album = mongoose.model('Album', AlbumSchema);
const Image = mongoose.model('Image', ImageSchema);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/albums', async (req, res) => {
  const albums = await Album.find();
  res.json(albums);
});

app.get('/images', async (req, res) => {
  const images = await Image.find();
  res.json(images);
});


// Route for adding a new album
app.post('/album', async (req, res) => {
  const newAlbum = new Album({
    albumName: req.body.albumName,
    albumDescription: req.body.albumDescription,
    albumCreationTimestamp: new Date(),
    albumModificationTimestamp: new Date(),
    // ... add other album fields
  });

  try {
    const savedAlbum = await newAlbum.save();
    res.status(201).json(savedAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
  
// Route for deleting an album
app.delete('/album/:id', async (req, res) => {
  try {
    const deletedAlbum = await Album.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
  
// Route for updating an album
app.patch('/album/:id', async (req, res) => {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(
      req.params.id,
      {
        albumName: req.body.albumName,
        albumDescription: req.body.albumDescription,
        albumModificationTimestamp: new Date(),
        // ... add other fields that may be updated
      },
      { new: true } // This option returns the modified document
    );
    res.status(200).json(updatedAlbum);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
  
// Route for adding a new image
app.post('/image', async (req, res) => {
  const newImage = new Image({
    imageUrl: req.body.imageUrl,
    imageCreationTimestamp: new Date()
  });

  try {
    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for deleting an image
app.delete('/image/:id', async (req, res) => {
  try {
    const deletedImage = await Image.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
  
// Route for updating an image
app.patch('/image/:id/:album', async (req, res) => {
  try {
    const updatedImage = await Image.findByIdAndUpdate(
      req.params.id,
      {
        albumm: req.params.album
      },
      { new: true }
    );
    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to add an image to the "Favorites" album
// app.post('/api/media/addToFavorites/:mediaId', async (req, res) => {
//   try {
//     // Find the "Favorites" album
//     const favoritesAlbum = await Album.findOne({ albumName: "Favorites" });
//     if (favoriteAlbum == false) {
//       throw res.status(404).json({ message: "Favorites album not found." });
//     }

//     // Update the image's album reference to "Favorites"
//     const updatedImage = await Image.findByIdAndUpdate(req.params.mediaId, {
//       $set: { album: favoritesAlbum._id }
//     }, { new: true });

//     if (updatedImage) {
//       res.status(200).json(updatedImage);
//     } else {
//       res.status(404).json({ message: "Image not found." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
  
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
