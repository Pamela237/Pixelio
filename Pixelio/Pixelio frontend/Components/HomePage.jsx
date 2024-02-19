import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import NavBar from './NavBar';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pixelio</Text>
        <TouchableOpacity style={styles.uploadButton}><Icon name="plus" size={12} color="#fff" /></TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.imageGrid}>
        {/* Map your images here */}
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffaddf', // Example background color
  },
  title: {
    fontSize: 24,
    color: '#ffffff', // Example title color
  },
  uploadButton: {
    // Style your button
  },
  uploadButtonText: {
    // Style your button text
  },
  imageGrid: {
    // Style your image grid
    padding: 10,
  },
});

export default HomePage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/HomePage'; // Your custom styles
// import NavBar from './NavBar';

// const HomePage = () => {
//   // This function will handle the file upload logic
//   const handleUpload = (event) => {
//     // Logic to handle file upload
//   };

//   return (
//     <div className="home-page">
//       <header className="app-header">
//         <h1 className="app-title">Pixelio</h1>
//         <button className="upload-btn" onClick={handleUpload}>+</button>
//       </header>
//       <main className="image-grid">
//         {/* This is where we'll map over the images fetched from the server and render them */}
//       </main>
//       <div className="page-container">
//         {/* ... other page content ... */}
//         <NavBar />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
