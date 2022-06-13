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
            <div className="photo" onClick={() =>{
                toggleImageWithDescription();
            }}>
                {(description) ?
                <div key={gallery.id}> 
                    <img src={gallery.path}/>
                </div> : <p className="description">{gallery.description}</p>
                }
                {/* If I have my Like button here. Whenever I click the like button the discription appears and the photo disapears. 
                Formatting wise I like the button here but I'm not sure why its displaying the discription when I click the button */}
                
                {/* <div>
                    <button 
                    onClick={() => {
                        likeTheImage(gallery.id);
                    }}>❤️ This</button>
                    <div>{gallery.likes} People ❤️ this</div>
                </div> */}
            </div>

            {/* If I put my Button down here then I dont have a fortmation issue.
             However, I couldnt figure out how to make it appear like the wirframe mock ups */}
            <div>
                <button 
                onClick={() => {
                    likeTheImage(gallery.id);
                }}>❤️ This</button>
                <div>{gallery.likes} People ❤️ this</div>
            </div> 
        </>
    )
}

export default GalleryItems;