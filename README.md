Development README

1 Organization of your components

At the highest level is the App component. This stores the raw stock data and instantiates an instance of
FilterList. FilteredList is where all the logic of the site takes place. It has several functions used
for filtering and sorting the stocks as well as rendering the majority of the site. Within FilterListed, 
there are two components--DisplayList and DisplayCart. Both of these components are very similar. Their
purpose is to map a list (the one passed from FilteredList, which originally came from App) onto a set of
cards. In DisplayList, the cards have a "Purchase Stock" button, while in DisplayCart they have a "Remove
from Cart" button.

By mapping the information onto cards within DisplayList and DisplayCart, I was able to have less unique
components as well as reduce the number of layers I had to pass information through in order to update
the list.

2 How data is passed down through your components.

The main complexity of this site is the passing of information from the DisplayList and DisplayCart
components to the FilteredList. This occurs when a user presses a button to either add or remove an item
from the cart. This is done by passing the addToCart and removeFromCart methods in FilteredList into
DisplayList and DisplayCart when they are instantiated. This gives the sub-components reference
to a method they can call to alter what items are in the cart. In the code, I refer to these methods
as "callback" which then gets passed into the props and utilized in methods within the sub-components.

3 How user interactions can trigger changes in the state of components

Filtering: When a user selects one of the filtering options, the site updates the corresponding state variable.
Before the list of items is displayed, the state variable is used as a comparison. For example, in the "Sector" 
filter, the state variable would be set to something like "Technology" and if this string matched the string store
in a given item's sector, then that item would be displayed. 

Sorting: Similar to filtering, sorting starts by setting the sort state variable to a given value when a user makes
a selection on the site. Before the list is displayed, a helper method references the sort state and reorders the list
to reflect it. 

The Cart: When a user selects "Purchase Stock", that item is added to a list stored in the state of FilteredList.
list is displayed using DisplayCart. Notice that once an item is in the cart, it no longer has a "Purchase Stock"
option but instead a "Remove From Cart" one. This is because the information is being displayed through DisplayCart
instead of DisplayList
