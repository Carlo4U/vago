import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { styles } from '../../styles/about.styles';

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Smart Home</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.logoContainer}>
          <Ionicons name="home" size={80} color="#004d40" />
          <Text style={styles.logoText}>Smart Home System</Text>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Our App</Text>
          <Text style={styles.sectionText}>
            The Smart Home System app allows you to control and monitor your home's lighting and other connected devices from anywhere. 
            With an intuitive interface, you can easily manage your smart home ecosystem.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.featureItem}>
            <Ionicons name="bulb-outline" size={24} color="#004d40" style={styles.featureIcon} />
            <Text style={styles.featureText}>Control lights remotely</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="pencil-outline" size={24} color="#004d40" style={styles.featureIcon} />
            <Text style={styles.featureText}>Customize device names</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="shield-checkmark-outline" size={24} color="#004d40" style={styles.featureIcon} />
            <Text style={styles.featureText}>Secure account management</Text>
          </View>
          <View style={styles.featureItem}>
            <Ionicons name="analytics-outline" size={24} color="#004d40" style={styles.featureIcon} />
            <Text style={styles.featureText}>Monitor device status</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.sectionText}>
            Email: support@smarthomesystem.com{'\n'}
            Phone: +1 (555) 123-4567{'\n'}
            Website: www.smarthomesystem.com
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2023 Smart Home System. All rights reserved.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

