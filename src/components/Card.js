import React from 'react';

const Card = ({id, author, download_url, width, height}) => {

    const imageURL = `${download_url}`

    const downloadImage = () => {
        // fetch image url
        fetch(imageURL)
            .then(response => {
                // create BLOB object 
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob); // generate blob URL
					let a = document.createElement('a'); // create link
    				a.href = url; // pass through the generated blob url
  					a.download = `${imageURL}.jpg`; // set filename
                    a.click(); // access link on user click
                }
            );
		});
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h2>{author} - photo {id}</h2>
                </div>    
                <img src={download_url} className="card-img" alt="" />
                <div className="card-body">
                    <p className="card-title">
                        Author: {author}
                    </p>
                    <p className="card-text">
                        Dimensions: {width}px x {height}px
                    </p>
                    <p className="card-text">
                        <button onClick={() => downloadImage()} className="btn btn-info btn-sm">
                            <i className="fas fa-file-download"></i> 
                            Download Image
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card;