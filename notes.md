Base Mode Todo List
[ ] Create a photo gallery where Visitors can click on an image to see a description and use a button to "like" an image. 
    [x] Create 3 components App, GalleryList, GalleryItem.
        [x] App will represents the overall application or site
        [x] GalleryList represents the gallery of images.
        [x] GalleryItem represents a single image in the gallery with the abilit to click and toggle between desription and like an image
    [x] Use Axios to retrieve (GET) data from '/gallery' Store it in 'App' with 'props'
        [x] Loop through the list of gallary data
        [x] Make GalleryItems
    [x] Create New Componet 'GalleryItem.jsx'
        [x] Pass it an idividual gallery item with 'props'
        [x] Update 'GalleryList' to display an Image
        [x] Swap image with description 'onClick'
        [x] Create a like button
        [x] Display the number of likes for each item
        [x] When like button is clicked use Axios to update (PUT) the like count '/gallery/like/id:'
        [x] Update the gallery each time a like button is clicked.
Stretch Goals
Make sure to complete stretch goals in order
[ ] Make sure to use new branches for each new feature
[ ] Create a database `react_gallery`
    [ ] Create a database.sql file
[ ] Create a new form (New Componet) to allow user's to POST a new gallery Item
    [ ] Client side form ( Use absolute URL for immages)
    [ ] Server side route for posting an image
[ ] Create the ability to delte a Gallery item
[ ] Add Styling with Material- UI [https://material-ui.com/](https://material-ui.com/)
[ ] Use [multer](https://github.com/expressjs/multer) for image upload 
