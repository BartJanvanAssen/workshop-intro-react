Be sure to install npm / nodejs
https://nodejs.org/en/

---

Create react app:
https://github.com/facebook/create-react-app

---

npx create-react-app my-app
cd my-app
npm start

---

Exercise:
1. Create an react app and fetch the backend api. Show the results on the page.
    the fetch api from the browser can be used. theres no need for an external library. Docs:
    https://developers.google.com/web/updates/2015/03/introduction-to-fetch

1.1. Create an List Item component and render the items from the backend using this component

1.2. Use an library like material ui to add some styles to the project.

you can install Material ui by these steps:
- "npm install @material-ui/core" in the root of the exercise 3 folder.
- for example use a chip using:
    import Chip from '@material-ui/core/Chip';

then use the chip in the render method:

    <Chip label="Basic Chip" />

then use the value from the items array in the label:

    <Chip label={VALUE_VARIABLE} />


-- Well done ;-)
