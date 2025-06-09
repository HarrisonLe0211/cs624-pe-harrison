# Cities & Countries App

## Input
- The app maintains two arrays in component state: `cities` and `countries`.  
- Each `city` object has:
  - `id`: UUID  
  - `name`: string  
  - `country`: string  
  - `locations`: array of location objects, each with `id`, `name`, and `info`.  
- Each `country` object has:
  - `id`: UUID  
  - `name`: string  
  - `currency`: string (default currency)  
  - `currencies`: array of additional currency objects, each with `id`, `name`, and `info`.  
- Users interact with four input forms:
  - **Add City** (`AddCity` screen): city name + country name  
  - **Add Country** (`AddCountry` screen): country name + default currency  
  - **Add Location** (`City` detail screen): location name + info  
  - **Add Currency** (`Country` detail screen): currency name + info  

## Process
The bottom tab navigator switches among four main screens:

1. **Cities** (stack navigator):
   - `Cities` list: scrolls through all `cities`.  
   - `City` detail: displays the selected city’s details, its `locations`, plus the **Add Location** form.  
2. **Add City**:
   - Users enter a city name and country.  
   - On submit, `addCity()` generates a UUID, appends `{ id, name, country, locations: [] }` to `cities`, and clears the inputs.  
3. **Countries** (stack navigator):
   - `Countries` list: scrolls through all `countries`.  
   - `Country` detail: displays the selected country’s `name` and default `currency`, its added `currencies` (each showing “Not used.” in the info), plus the **Add Currency** form.  
4. **Add Country**:
   - Users enter a country name and default currency.  
   - On submit, `addCountry()` generates a UUID, appends `{ id, name, currency, currencies: [] }` to `countries`, and clears the inputs.  

All forms use React Native’s `<TextInput>` components, enforce non-empty validation, clear fields on success, and—in the detail screens—use absolute positioning to keep the **Add Location**/**Add Currency** inputs and button stuck to the bottom.

## Output
- **Cities** tab:  
  - A scrollable list of added cities (name + country).  
  - Tapping a city navigates to its detail view.  
- **City** detail:  
  - A list of the city’s **locations**.  
  - A sticky-bottom **Add Location** form.  
- **Countries** tab:  
  - A scrollable list of added countries (name + default currency).  
  - Tapping a country navigates to its detail view.  
- **Country** detail:  
  - Displays default currency and a list of additional **currencies** (each rendered with “Not used.” appended).  
  - A sticky-bottom **Add Currency** form.  
- Bottom tabs allow instant navigation between lists, details, and add-forms for both cities and countries.
