// script.js

// Get the elements
const submitButton = document.getElementById('submit-button');
const postTextArea = document.getElementById('post-text');
const postImageInput = document.getElementById('post-image');

// Function to check if the Submit button should be enabled
function checkSubmitButton() {
    // Enable submit button if there's text or if a file is selected
    if (postTextArea.value.trim() !== '' || postImageInput.files.length > 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Event listener to check if the textarea has input
postTextArea.addEventListener('input', checkSubmitButton);

// Event listener to check if a file is uploaded
postImageInput.addEventListener('change', checkSubmitButton);

// Handle the Submit button click event
submitButton.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent page refresh (in case the form is submitted)

    // Get the text from the textarea and file input
    const postText = postTextArea.value.trim();
    const postImage = postImageInput.files[0];

    // Create the new post (assuming you have a posts container)
    const newPost = document.createElement('div');
    newPost.classList.add('post');
    
    // Handle the post content
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

    // Add the new post to the posts container (you can prepend or append it)
    document.getElementById('posts-container').prepend(newPost);

    // Clear the form
    postTextArea.value = '';
    postImageInput.value = '';
    submitButton.disabled = true; // Disable the submit button again
});

console.log("trd")