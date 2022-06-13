import GalleryItems from "../GalleryItems/GalleryItems"

function GalleryList({GalleryList, likeTheImage}){
    console.log('Inside GalleryList');
    return (
        <>
            <div>
                <p>Gallery goes here</p>
             {GalleryList.map((gallery) => {
                 return (
                     <GalleryItems gallery={gallery} likeTheImage={likeTheImage}/>
                 )
             })}
            </div>
        </>
    )
}

export default GalleryList;