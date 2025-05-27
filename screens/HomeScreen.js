// VisteonApp/src/screens/HomeScreen.js
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderBar from '../components/HeaderBar'; // Assuming HeaderBar is created
import { COLORS } from '../constants/colors';

// Optional: If you have a home graphic, place it in assets
// const homeGraphic = require('../../assets/home-graphic.png');

const { width } = Dimensions.get('window');
const buttonSize = (width - 80) / 2; // 2 buttons per row, with some padding

const HomeScreen = ({ navigation }) => {
  const menuItems = [
    { id: '1', title: 'Invoice / Bin Verification', screen: 'InvoiceBinVerification' },
    { id: '2', title: 'Customer / VEPL Verification', screen: 'CustomerVeplVerification' },
    { id: '3', title: 'Bin Label / Part Label Verification', screen: 'BinLabelVerification' },
    { id: '4', title: 'Printed QR Stickers', screen: 'PrintedQRStickers' },
  ];

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.safeArea}>
      <HeaderBar title="Home" showNotification={true} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.graphicContainer}>
          {/* Placeholder for the engine graphic. Replace with <Image source={homeGraphic} /> if you have it */}
          <Ionicons name="settings-outline" size={100} color={COLORS.primaryOrange} />
          <Text style={styles.graphicText}>System Dashboard</Text>
        </View>

        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuButton}
              onPress={() => handleMenuPress(item.screen)}
            >
              <Text style={styles.menuButtonText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightGrayBackground,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  graphicContainer: {
    width: '100%',
    height: 200, // Adjust as needed
    backgroundColor: COLORS.secondaryOrange, // A lighter shade for the background graphic area
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    // If using an ImageBackground for the orange circle effect:
    // overflow: 'hidden',
  },
  graphicText: {
    fontSize: 18,
    color: COLORS.primaryOrange,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  menuButton: {
    width: buttonSize,
    height: buttonSize * 0.8, // Adjust height to make it less square if needed
    backgroundColor: COLORS.secondaryOrange,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    shadowColor: COLORS.darkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  menuButtonText: {
    color: COLORS.textBlack,
    fontSize: 15, // Adjusted for better fit
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default HomeScreen;
