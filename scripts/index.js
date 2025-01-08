document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".container-text > *");
    const typingSpeed = 100;
    const delayBetweenLines = 1000;

    let currentElementIndex = 0;

    // Function for typing animation
    function typeAnimation(element) {
        const text = element.getAttribute("data-text");
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
                setTimeout(type, typingSpeed);
            } else {
                currentElementIndex++;
                if (currentElementIndex < elements.length) {
                    setTimeout(() => {
                        const nextElement = elements[currentElementIndex];

                        // Check if the next element has a data-text attribute
                        if (nextElement.hasAttribute("data-text")) {
                            typeAnimation(nextElement);
                        } else {
                            // Call a different function for the subtitle (h3)
                            handleSubtitleAnimation(nextElement);
                        }
                    }, delayBetweenLines);
                }
            }
        }

        type();
    }

    // Function for handling subtitle animation
    function handleSubtitleAnimation(element) {
        // Add your logic for subtitle animation here
        // For example, you can type the sentences for the subtitle
        const sentences = [
            "I am a Full-Stack Developer. ",
            "I enjoy learning and turning ideas into reality. ",
            "Let's learn from each other. "
        ];
        let sentenceIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const delay = 100; // Typing speed in ms
        const pauseTime = 1500; // Pause between sentences
        const lastSentencePause = 3000; // Pause after the last sentence

        function typeSentence() {
            const currentSentence = sentences[sentenceIndex];
            if (isDeleting) {
                element.textContent = currentSentence.substring(0, charIndex--);
            } else {
                element.textContent = currentSentence.substring(0, charIndex++);
            }

            if (!isDeleting && charIndex === currentSentence.length) {
                isDeleting = true;
                setTimeout(
                    typeSentence,
                    sentenceIndex === sentences.length - 1 ? lastSentencePause : pauseTime
                );
                return;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                sentenceIndex = (sentenceIndex + 1) % sentences.length;
            }

            setTimeout(typeSentence, isDeleting ? delay / 2 : delay);
        }

        typeSentence();
    }

    // Start typing animation on the first element
    typeAnimation(elements[currentElementIndex]);
});
