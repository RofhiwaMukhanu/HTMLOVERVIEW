console.log('ghhbh');

document.querySelectorAll('.follow-button').forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.innerHTML === "Follow") {
            button.innerHTML = "Following";
            button.classList.add("following");
        } else {
            button.innerHTML = "Follow";
            button.classList.remove("following");
        }
    });
});


const submitButton = document.getElementById('submitButton');
        const statusInput = document.getElementById('statusInput');
        const photoInput = document.getElementById('photoInput');
        const postFeed = document.getElementById('postFeed');

        // Function to handle post submission
        submitButton.addEventListener('click', function() {
            const statusText = statusInput.value.trim();
            const file = photoInput.files[0];

            // If the status is empty and no image is selected, alert the user
            if (statusText === "" && !file) {
                alert("Please enter some text or upload an image.");
                return;
            }

            // Create a new div for the post
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Add status text to the post
            if (statusText !== "") {
                const statusParagraph = document.createElement('p');
                statusParagraph.textContent = statusText;
                postDiv.appendChild(statusParagraph);
            }

            // If a photo is selected, add it to the post
            if (file) {
                const image = document.createElement('img');
                image.src = URL.createObjectURL(file); // Create a URL for the uploaded image
                image.alt = "Uploaded Image";
                image.style.maxWidth = "100%"; // Set max width for image to prevent it from overflowing
                postDiv.appendChild(image);
            }

            // Add the new post to the post feed
            postFeed.appendChild(postDiv);

            // Clear the inputs after submitting
            statusInput.value = "";
            photoInput.value = "";
        });