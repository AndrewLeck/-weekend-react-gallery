Base Mode Todo List
[ ] Create a photo gallery where Visitors can click on an image to see a description and use a button to "like" an image. 
    [x] Create 3 components App, GalleryList, GalleryItem.
        [x] App will represents the overall application or site
        [x] GalleryList represents the gallery of images.
        [x] GalleryItem represents a single image in the gallery with the abilit to click and toggle between desription and like an image
    [ ] Use Axios to retrieve (GET) data from '/gallery' Store it in 'App' with 'props'
        [ ] Loop through the list of gallary data
        [ ] Make GalleryItems
    [ ] Create New Componet 'GalleryItem.jsk'
        [ ] Pass it an idividual gallery item with 'props'
        [ ] Update 'GalleryList' to display an Image
        [ ] Swap image with description 'onClick'
        [ ] Create a like button
        [ ] Display the number of likes for each item
        [ ] When like button is clicked use Axios to update (PUT) the like count '/gallery/like/id:'
        [ ] Update the gallery each time a like button is clicked.
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
