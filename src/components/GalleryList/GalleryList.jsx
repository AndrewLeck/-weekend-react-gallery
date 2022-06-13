import GalleryItems from "../GalleryItems/GalleryItems"

function GalleryList({GalleryList, likeTheImage}){
    console.log('Inside GalleryList');
    return (
        <>
            <div>
                <h2>Naruto Characters</h2>
             {GalleryList.map((gallery) => {
                 return (
                     <GalleryItems key={gallery.id} gallery={gallery} likeTheImage={likeTheImage}/>
                 )
             })}
            </div>
        </>
    )
}

export default GalleryList;