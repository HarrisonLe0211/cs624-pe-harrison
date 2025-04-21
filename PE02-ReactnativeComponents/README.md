# Courses App

## Input
The program allows users to enter a course onto a TextInput field. All course data (core, depth, electives, seminars, internship, and capstone) is hard-coded directly into the source file through Text components. A static image (CityU icon) is also loaded from the ./assets directory.

## Process
The app is built using the React Native framewo. It incorporates six core components: ScrollView, View, Text, TextInput, Image, and StyleSheet. The screen is scrollable and internally styled via an external styles.js file.

The View components are used extensively to group content into logical sections:
   - A View wraps the logo and input form.
   - Each section of the curriculum (Core, Depth, Electives, Capstone) is enclosed in its own View.
   - Sub headers (Seminar and Internship) are styled and grouped within the Electives section.

The styles are modularized and applied to control layout spacing, backgrounds, typography, and alignment.

## Output
The output is a structured, scrollable mobile interface that presents the CityU MSCS curriculum:
   - A logo at the top
   - An input field for favorite course entry
   - Grouped and labeled course sections, each has their own header styles and View containers