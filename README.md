### Running the code
- git clone https://github.com/danjtate/drpg_users.git
- cd into the repo
- npm install
- npm start
- app running on localhost:3000

### Things to complete
- convert files to typescript
- Unit Tests


### Notes
After not using React for a while my knowledge is a little old, have been re-learning the basics and learning new concepts within React. Have kept all branches rather than deleting after merging to ensure that the commits are visible. 

Having not use unit tests or typescript extensively prior to this I wanted to get an app that met the more functional requirements working first then improve the app with typescript/unit tests if time permitted.

- The search function would need to be worked on, allows for partial matches against last name and email however I would work toward having the table reduce in length as a search term is typed when partial matching.
- As the API itself is paginated the search as it currently stands will only search on the shown values rather than the full dataset. This could be improved by performing the search directly on the API if there were an endpoint for it.
- Alter the modal form so that each input is its own component and pass through relevant values where needed to reduce repeat code for some functions
- Pagination: Workaround for this specific task, however if there were more pages this may not work so would need to find a permanent fix for this
- Would prefer to create full logging components to log different levels (info, debug, error) for example. Console logs used in their place
- Some calls such as getAllUsers on page load is being called twice 
- Would make it look a LOT nicer

