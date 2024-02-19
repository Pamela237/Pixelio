import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate(' ')} style={styles.navItem}><Text style={styles.navText}>Photos</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Albums')} style={styles.navItem}><Text style={styles.navText}>Albums</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => {/* Implement search functionality */}} style={styles.navItem}><Icon name="search" size={20} color="#ffffff"/>{/* Adjust size and color as needed */}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffaddf', // color
    paddingBottom: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ffffff', // light border for some contrast
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    color: '#ffffff', // white text
    fontSize: 16, //  size as per design
    fontWeight: 'bold', // text stand out
  },
});
export default NavBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/NavBar'; // Your custom styles for NavBar

// const NavBar = () => {
//   return (
//     <nav className="bottom-nav">
//       <Link to="/photos">Photos</Link>
//       <Link to="/albums">Albums</Link>
//       <button className="search-btn">🔍</button>
//     </nav>
//   );
// };

// export default NavBar;
