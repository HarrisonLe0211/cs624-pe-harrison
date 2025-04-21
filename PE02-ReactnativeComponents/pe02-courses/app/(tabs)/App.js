import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput} from 'react-native';
import styles from './styles';
const CoreComponents = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container}>
    <Image source={require('../../assets/images/images.jpg')} style={styles.logo} />
    <View style={styles.sectionContainer}>
        <Text style={styles.label}>Which course did you like?</Text>
        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />
      </View>

      {/* Core Requirements */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Core Requirements (24 Credits)</Text>
        {[
          'CS 504 Software Engineering',
          'CS 506 Programming for Computing',
          'CS 519 Cloud Computing Overview',
          'CS 533 Computer Architecture',
          'CS 547 Secure Systems and Programs',
          'CS 622 Discrete Math and Algorithms for Computing',
          'CS 510 Artificial Intelligence for Data Science',
          'CS 620 Machine Learning & Deep Learning',
        ].map((course) => (
          <Text style={styles.course} key={course}>{course}</Text>
        ))}
      </View>

      {/* Depth of Study */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Depth of Study (6 Credits)</Text>
        <Text style={styles.course}>CS 624 Full-Stack Development I</Text>
        <Text style={styles.course}>CS 628 Full-Stack Development II</Text>
      </View>

      {/* Electives */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Electives (6 Credits)</Text>
        <Text style={styles.subtext}>
          Students may select two elective courses from any other disciplines within the School of Technology & Computing or complete the internship after taking three CS 650 seminar courses.
        </Text>

        {/* Seminar */}
        <Text style={styles.subHeader}>Seminar</Text>
        <Text style={styles.subtext}>
          Students can take three CS 650 seminar courses after taking 6 credit hours and before CS 680 or CS 687.
        </Text>
        <Text style={styles.course}>CS 650A Master's Seminar I in Special Technology (1 credit)</Text>
        <Text style={styles.course}>CS 650B Master's Seminar II in Special Technology (1 credit)</Text>
        <Text style={styles.course}>CS 650C Master's Seminar III in Special Technology (1 credit)</Text>

        {/* Internship */}
        <Text style={styles.subHeader}>Internship</Text>
        <Text style={styles.course}>CS 680 Computer Science Internship (3 credits)</Text>
      </View>

      {/* Capstone */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Capstone (3 Credits)</Text>
        <Text style={styles.course}>CS 687 Computer Science Capstone</Text>
      </View>
    </ScrollView>
  );
};

export default CoreComponents;