// script.js


const submitButton = document.getElementById('submit-button');
const postTextArea = document.getElementById('post-text');
const postImageInput = document.getElementById('post-image');


function checkSubmitButton() {
    
    if (postTextArea.value.trim() !== '' || postImageInput.files.length > 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}


postTextArea.addEventListener('input', checkSubmitButton);


postImageInput.addEventListener('change', checkSubmitButton);


submitButton.addEventListener('click', function(e) {
    e.preventDefault();  

    
    const postText = postTextArea.value.trim();
    const postImage = postImageInput.files[0];

    
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    
    
    let postContent = `<p>${postText}</p>`;
    
    if (postImage) {
        const imageURL = URL.createObjectURL(postImage);
        postContent += `<img src="${imageURL}" alt="Uploaded Image" style="max-width: 100%; height: auto; margin-top: 10px;">`;
    }

    newPost.innerHTML = `
        <div class="post-profile">
            <div class="profile">
                <img src="profile-pic.jpg" alt="Profile Picture">
                <p class="name">User Name</p>
            </div>
        </div>
        <div class="post-content">
            ${postContent}
        </div>
        <div class="btn-group">
            <button class="btn btn-like">Likes <span class="like-count">0</span></button>
            <button class="btn btn-comment">Comments <span class="comment-count">0</span></button>
            <button class="btn btn-share">Share</button>
        </div>
    `;

    
    document.getElementById('posts-container').prepend(newPost);

    
    postTextArea.value = '';
    postImageInput.value = '';
    submitButton.disabled = true; 
});

console.log("trd")