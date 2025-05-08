# Todo App

## Input
- Users type a new to-do into a `TextInput` field at the top of the screen.  
- The current text is tracked in component state (`inputValue`).  
- Tapping **Submit** (the white pill-shaped button) invokes the `submitTodo` handler, which reads and trims `inputValue` and adds a new to-do object (`{ title, todoIndex, complete }`) into the `todos` array in state.

## Process
- **Framework:** Built with React Native.  
- **Components:**  
  - `Heading` renders the large “todos” title.  
  - `Input` wraps a `TextInput` and propagates user typing to `App` via `inputChange`.  
  - `TodoList` receives an array of to-dos plus two callbacks (`toggleComplete` and `deleteTodo`) and maps each to a `Todo` row.  
  - `Todo` displays the to-do text and two `TodoButton` actions (“Done” / “Delete”).  
  - `Button` renders the bottom-right **Submit** button and triggers `submitTodo`.  
  - `TabBar` lives at the bottom and lets users filter between **All**, **Active**, and **Complete** to-dos by setting a `type` in state.  

- **State & Logic:**  
  1. **Adding:** `submitTodo` appends a new to-do (with a unique index and `complete: false`), then clears the input.  
  2. **Toggling:** `toggleComplete` flips `complete` on the matching to-do.  
  3. **Deleting:** `deleteTodo` filters the array to remove the selected to-do.  
  4. **Filtering:** `getFilteredTodos()` returns all / only incomplete / only complete to-dos based on the current `type`.  

- **Layout & Styles:**  
  - A `ScrollView` wraps the main content for vertical scrolling.  
  - `View` containers and `StyleSheet` rules manage spacing, shadows, and alignment.  
  - The input and submit controls sit above the to-do list; the tab bar is fixed at the bottom.

## Output
A clean, scrollable mobile interface presenting:
1. **Heading** (“todos”) at the top.  
2. **Text input** for entering new items.  
3. **Submit button** to add the typed to-do to the list.  
4. **To-do list** showing each item with “Done” and “Delete” actions.  
5. **Tab bar** fixed at the bottom to filter between All / Active / Complete.
