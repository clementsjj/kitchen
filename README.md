# Fridge

- This is a template for the Whats in the Fridge app.
- It uses material ui.
- Currently a work in progress.

## Alpha v.01

#### Search Ingredients

- Search one ingredient at a time, return a list of related ingredients as buttons, select items to add to fridge

#### The Fridge

- The fridge holds a list of the ingredients you wish to search
- You can add ingredients from a common ingredients list to make adding to the fridge easy
  - The common ingredients are listed as an array in /components/CommonIngredients.js
- Once you have added all your ingredients to the fridge, click 'Search Recipes' to bring up a list of 10 recipes in your 'Recipe Book'

#### Recipe Book

- The Recipe Book holds all recipes that are included

### Macro To Dos

- Lazy-load or pagination of Recipe Book Results
- A more comprehensive experience when viewing the recipe, with more details
- A page to view individual recipes if you have the recipe id
- 'About' page and possibly other landing page imporovements
- Clear recipe book and fridge

### Known Bugs

- CommonIngredients Button will not disable when added to fridge
- Recipe may overflow in modal
- Issues rendering common ingredients buttons and button names in fridge with Chrome. Works ok with Firefox.
- "no results." appears under ingredient search when you have recipes loaded
- Various sized recipe cards returned. Should make consistent size.
