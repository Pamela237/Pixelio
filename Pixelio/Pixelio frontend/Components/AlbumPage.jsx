import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';
import NavBar from './NavBar';

const AlbumPage = () => {
  const navigation = useNavigation();

  const handleAddAlbum = () => {
    // Logic to add a new album
    // This could navigate to a new screen for album creation
    navigation.navigate('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleAddAlbum} style={styles.addButton}>
          <Icon name="plus" size={12} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.albumGrid}>
        {/* Map your albums here */}
      </ScrollView>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffaddf', // Example background color
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    zIndex: 10,
    backgroundColor: '#ffaddf', // Match your theme
    borderRadius: 50,
    padding: 10,
  },
  container: {
    flex: 1,
  },
  albumGrid: {
    // Style your album grid
    padding: 10,
  },
  // Add other styles here
});

export default AlbumPage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/AlbumPage' // Your custom styles for AlbumPage
// import NavBar from './NavBar';

// const AlbumPage = () => {
//   // This will be replaced with actual data fetching logic
//   const albums = [
//     /* Mockup data structure */
//     { id: 1, title: 'Camera', thumbnail: 'path/to/image' },
//     { id: 2, title: 'Screenshots', thumbnail: 'path/to/image' },
//     // Add more albums as needed
//   ];

//   return (
//     <div className="album-page">
//       <header className="app-header">
//         <h1 className="app-title">Pixelio</h1>
//       </header>
//       <main className="album-grid">
//         {albums.map((album) => (
//           <div key={album.id} className="album-card">
//             <img src={album.thumbnail} alt={album.title} />
//             <h2>{album.title}</h2>
//           </div>
//         ))}
//       </main>
//         <div className="page-container">
//             {/* ... other page content ... */}
//             <NavBar />
//         </div>
//     </div>
//   );
// };

// export default AlbumPage;
