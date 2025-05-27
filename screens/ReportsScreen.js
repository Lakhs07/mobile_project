// VisteonApp/src/screens/ReportsScreen.js
// Placeholder Screen for Bottom Tab
import { StyleSheet, Text, View } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import { COLORS } from '../constants/colors';
import { commonStyles } from '../constants/styles';


const ReportsScreen = ({navigation}) => {
  return (
    <View style={styles.safeArea}>
        <HeaderBar title="Reports" navigation={navigation} />
        <View style={styles.container}>
            <Text style={commonStyles.titleText}>Reports</Text>
            <Text style={styles.placeholderText}>
                This screen will display various reports.
                Functionality to be implemented.
            </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightGrayBackground,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: COLORS.textGray,
    textAlign: 'center',
    marginTop: 10,
  }
});

export default ReportsScreen;
