function GalleryItems({gallery}){
    console.log('inside Gallery Items')

    return(
        <>
            <div key={gallery.id}>
                <img src={gallery.path}/>
            </div>
        </>
    )
}

export default GalleryItems;