import {useState} from 'react';

function GalleryItems({gallery, likeTheImage}){
    console.log('inside Gallery Items')
    let [description, setDescription] = useState(true);

function toggleImageWithDescription(){
    console.log('Inside Toggle img with description')
    if(description === false){
        setDescription(true)
    }
    else if(description === true){
        setDescription(false)
    }
}


    return(
        <>
            <div onClick={() =>{
                toggleImageWithDescription();
            }}>
                {(description) ?
                <div key={gallery.id}> 
                    <img src={gallery.path}/>
                </div> : <p className="description">{gallery.description}</p>
                }
            </div>
            <div>
                <button 
                onClick={() => {
                    likeTheImage(gallery.id);
                }}>Like❤️</button>
                <div>Likes: {gallery.likes}</div>
            </div>
        </>
    )
}

export default GalleryItems;