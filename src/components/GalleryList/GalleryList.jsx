import GalleryItems from "../GalleryItems/GalleryItems"

function GalleryList({GalleryList}){
    console.log('Inside GalleryList');
    return (
        <>
            <div>
                <p>Gallery goes here</p>
             {GalleryList.map((gallery) => {
                 return (
                     <GalleryItems gallery={gallery} />
                 )
             })}
            </div>
        </>
    )
}

export default GalleryList;