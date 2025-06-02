# Cities App

## Input
- The app maintains two arrays in component state: `cities` and `countries`.  
- Each `city` object has `id`, `name`, `country`, and `locations` (array).  
- Each `country` object has `id`, `name`, and `currency`.  
- Users fill two input forms: Add City (city name + country) and Add Country (country name + currency).

## Process
The bottom tab navigator switches among four screens: Cities list, Add City, Countries list, Add Country. When users submit a city or country, the `addCity()` or `addCountry()` function generates a UUID, updates state, and triggers navigation. The Cities list maps `cities` to a scrollable view; tapping a city opens details. Add forms leverage `TextInput` components for user data, validate non-empty values, and clear fields after submission.

## Output
- A scrollable list of added cities grouped by `locations`.  
- A scrollable list of added countries with their currencies.  
- Navigation flows allow quick toggling between lists and forms.  
