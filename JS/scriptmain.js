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

       
        submitButton.addEventListener('click', function() {
            const statusText = statusInput.value.trim();
            const file = photoInput.files[0];

            
            if (statusText === "" && !file) {
                alert("Please enter some text or upload an image.");
                return;
            }

            
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            
            if (statusText !== "") {
                const statusParagraph = document.createElement('p');
                statusParagraph.textContent = statusText;
                postDiv.appendChild(statusParagraph);
            }

            
            if (file) {
                const image = document.createElement('img');
                image.src = URL.createObjectURL(file);
                image.alt = "Uploaded Image";
                image.style.maxWidth = "100%"; 
                postDiv.appendChild(image);
            }

            
            postFeed.appendChild(postDiv);

            
            statusInput.value = "";
            photoInput.value = "";
        });