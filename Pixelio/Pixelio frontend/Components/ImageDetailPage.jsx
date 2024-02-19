import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import NavBar from './NavBar';

const ImageDetailPage = ({ route }) => {
  const { imageId } = route.params; // Assuming you pass imageId as a parameter

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'image-url-here' }} style={styles.image} />
      <View style={styles.actionButtons}>
        <TouchableOpacity onPress={() => {/* handle favorite */}}><Text>⭐</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => {/* handle delete */}}><Text>🗑️</Text></TouchableOpacity>
      </View>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '80%', // Adjust as needed
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  // Add other styles here
});

export default ImageDetailPage;

// import React, { useState, useEffect } from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import NavBar from './NavBar'; // Reuse the NavBar component
// import '../css/ImageDetailPage'; // Custom styles for ImageDetailPage

// const ImageDetailPage = () => {
//   const { imageId } = useParams(); // This will get the image ID from the URL
//   const [image, setImage] = useState(null);
//   const history = useHistory(); // This will be used to navigate back after deletion

//   useEffect(() => {
//     // Fetch the specific image details
//     // The actual URL and method to fetch the image will depend on your API implementation
//     fetch(`/api/images/${imageId}`)
//       .then((response) => response.json())
//       .then(setImage)
//       .catch((error) => console.error('Error fetching image:', error));
//   }, [imageId]);

//   // Handle image deletion
//   const handleDelete = () => {
//     fetch(`/api/images/${imageId}`, { method: 'DELETE' })
//       .then((response) => response.json())
//       .then(() => history.push('/photos')) // Redirect to photos page after deletion
//       .catch((error) => console.error('Error deleting image:', error));
//   };

//   // Handle adding image to favorites
//   const handleFavorite = () => {
//     fetch(`/api/media/addToFavorites/${imageId}`, { method: 'POST' })
//       .then((response) => response.json())
//       .then(() => {
//         // You can perform an action after adding to favorites, like updating the state
//       })
//       .catch((error) => console.error('Error adding image to favorites:', error));
//   };

//   if (!image) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="image-detail-page">
//       <header className="app-header">
//         <button onClick={handleFavorite} className="favorite-btn">⭐</button>
//         <button onClick={handleDelete} className="delete-btn">🗑️</button>
//       </header>
//       <main className="image-container">
//         <img src={image.imageUrl} alt="Detail" />
//       </main>
//       <NavBar />
//     </div>
//   );
// };

// export default ImageDetailPage;