# UserCard Grid

## Input
- The app maintains an array of six user‐card objects in component state.  
- Each object has:
  - `image` (avatar source)  
  - `name`  
  - `occupation`  
  - `description`  
  - `showThumbnail` (boolean)  
- On render, each object is mapped to a `ProfileCard`.  
- Tapping a card invokes `handleProfileCardPress(index)`, which flips that card’s `showThumbnail` flag in state.

## Process
- **Framework:** Built with React Native (iOS, Android & Web).  
- **Components:**  
  - `App`  
    - Initializes six identical user‐card objects in `this.state.data`.  
    - Implements `handleProfileCardPress(index)` using `immutability-helper` to toggle `showThumbnail`.  
    - Renders a wrapping `<View>` grid (`styles.container`) that flex‐wraps into rows.  
  - `ProfileCard`  
    - Wrapped in a `TouchableHighlight` for all platforms.  
    - Applies platform‐specific shadows (`elevation` on Android; `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius` on iOS).  
    - Displays, in order:  
      1. **Avatar**: a small white circle (`60×60`) with black border and drop‐shadow, containing a `40×40` icon, centered via padding.  
      2. **Name**: white, bold, 12 pt text with a dark text‐shadow.  
      3. **Occupation**: bold, 9 pt text underlined by a bottom border.  
      4. **Description**: italic, 7 pt centered text.  
    - Uses `styles.cardThumbnail` (scale 0.5) when `showThumbnail===true` to render a smaller “thumbnail” card; otherwise, it renders at full size (`150×200`).  
- **Layout & Styles:**  
  - **Grid Container (`styles.container`)**  
    - `backgroundColor: '#FFFFFF'`  
    - `flexDirection: 'row'`, `flexWrap: 'wrap'`  
    - `justifyContent: 'center'`, `alignItems: 'center'`  
    - `padding: 20`  
  - **Card (`styles.cardContainer`)**  
    - `width: 150`, `height: 200`, `margin: 5`  
    - `borderWidth: 5`, `borderRadius: 20`, blue background (`dodgerblue`)  
    - Android: `elevation: 20`; iOS: `shadowColor: 'black'`, `shadowOffset: { height: 12 }`, `shadowOpacity: 0.35`, `shadowRadius: 10`  
  - **Avatar (`styles.cardImageContainer`)**  
    - `width/height: 60`, `borderRadius: 30`, white fill, black border  
    - Android: `elevation: 20`; iOS: similar shadow settings  
  - **Thumbnail Transform (`styles.cardThumbnail`)**  
    - `transform: [{ scale: 0.5 }]`  

## Output
A responsive grid of six profile cards that:
1. **Wrap** into two rows of three on narrow viewports.  
2. Render **drop‐shadows** and **borders** consistently on iOS, and Web. Somehow the shadows are not working for the Android version (same thing with HOS06)
3. **Toggle** between a small “thumbnail” (scaled 0.5) and full‐size card on tap.  
4. Maintain consistent spacing, alignment, and touch feedback across platforms.  