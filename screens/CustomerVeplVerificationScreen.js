// VisteonApp/src/screens/CustomerVeplVerificationScreen.js
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';
import { COLORS } from '../constants/colors';

const CustomerVeplVerificationScreen = ({ navigation }) => {
  const [customerBinLabel, setCustomerBinLabel] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [partName, setPartName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [quantityCustomer, setQuantityCustomer] = useState('');

  const [veplQR, setVeplQR] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [quantityVepl, setQuantityVepl] = useState('');

  const handleScanCustomerBin = () => {
    setCustomerBinLabel('CUST_BIN_SCAN_789');
    setPartNumber('PN_ABC_002');
    setPartName('Alternator Unit');
    setInvoiceNumber('INV_CUST_1122');
    setQuantityCustomer('25');
    Alert.alert('Scan Customer Bin', 'QR Scanner would open. Data populated.');
  };

  const handleScanVeplQR = () => {
    setVeplQR('VEPL_QR_SCAN_3344');
    setSerialNumber('SN_VEPL_5566');
    setQuantityVepl('25');
    Alert.alert('Scan VEPL QR', 'QR Scanner would open. Data populated.');
  };
  
  const handleSubmitVerification = () => {
      // Add logic to submit or verify the data
      Alert.alert('Verification', 'Data submitted for verification.');
      // Potentially navigate back or to a success screen
      // navigation.goBack(); 
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.scanButton} onPress={handleScanCustomerBin}>
            <Ionicons name="qr-code-outline" size={20} color={COLORS.primaryOrange} />
            <Text style={styles.scanButtonText}>Scan Customer's Bin Label</Text>
        </TouchableOpacity>
        <StyledInput placeholder="Scanned Customer Bin Data" value={customerBinLabel} onChangeText={setCustomerBinLabel} editable={false} />
        <StyledInput label="Part Number" placeholder="Enter Part Number" value={partNumber} onChangeText={setPartNumber} />
        <StyledInput label="Part Name" placeholder="Enter Part Name" value={partName} onChangeText={setPartName} />
        <StyledInput label="Invoice Number" placeholder="Enter Invoice Number" value={invoiceNumber} onChangeText={setInvoiceNumber} />
        <StyledInput label="Quantity" placeholder="Enter Quantity" value={quantityCustomer} onChangeText={setQuantityCustomer} keyboardType="numeric" />
      </View>

      <View style={styles.card}>
        <TouchableOpacity style={styles.scanButton} onPress={handleScanVeplQR}>
            <Ionicons name="qr-code-outline" size={20} color={COLORS.primaryOrange} />
            <Text style={styles.scanButtonText}>Scan VEPL QR</Text>
        </TouchableOpacity>
        <StyledInput placeholder="Scanned VEPL QR Data" value={veplQR} onChangeText={setVeplQR} editable={false} />
        <StyledInput label="Serial Number" placeholder="Enter Serial Number" value={serialNumber} onChangeText={setSerialNumber} />
        <StyledInput label="Quantity" placeholder="Enter Quantity" value={quantityVepl} onChangeText={setQuantityVepl} keyboardType="numeric" />
      </View>
      
      <StyledButton title="Submit Verification" onPress={handleSubmitVerification} style={{marginTop: 10}}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrayBackground,
  },
  contentContainer:{
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: COLORS.darkGray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primaryOrange,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
  scanButtonText: {
    marginLeft: 10,
    color: COLORS.primaryOrange,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CustomerVeplVerificationScreen;
