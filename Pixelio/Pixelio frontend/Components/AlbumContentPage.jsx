import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import NavBar from './NavBar'; // Reuse the NavBar component
import '../css/AlbumContentPage'; // Your custom styles for AlbumContentPage

const AlbumContentPage = () => {
  const [album, setAlbum] = useState({ name: 'Album Name', images: [] }); // Example album state

  useEffect(() => {
    // Fetch the album details and images
  }, []);

  const handleEditAlbum = () => {
    // Logic to edit the album name
  };

  const handleDeleteAlbum = () => {
    // Logic to delete the album
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{album.name}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={handleEditAlbum}>
            <Icon name="edit" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDeleteAlbum} style={styles.deleteButton}>
            <Icon name="trash" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={album.images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
          </TouchableOpacity>
        )}
      />
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // light background for the page
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffaddf', // color to match your design
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'YourFontFamily', // Replace with your actual font family
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    width: 80, // space for both buttons
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    margin: 10,
    borderRadius: 10, // Optional: if you want rounded corners for your images
    overflow: 'hidden', // Needed to apply borderRadius on images
    elevation: 5, // Add shadow for Android (optional)
    shadowColor: '#000', // Add shadow for iOS (optional)
    shadowOffset: { width: 0, height: 2 }, // Add shadow for iOS (optional)
    shadowOpacity: 0.25, // Add shadow for iOS (optional)
    shadowRadius: 3.84, // Add shadow for iOS (optional)
  },
  image: {
    width: '100%',
    height: 200, // Fixed height, or you can make it responsive
    resizeMode: 'cover',
  },
});


export default AlbumContentPage;