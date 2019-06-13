const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

try{
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;


    recognition.onstart = function(){
        console.log("Has started ");
    }

    recognition.onresult = function(event){
            console.log(event);
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;

            content.textContent = transcript;

            if(event.results[current].isFinal){
                readOutLoud(transcript);
            }

    }


    btn.addEventListener('click',()=>{
        recognition.start();
    });


    function readOutLoud(message){
        const speech = new SpeechSynthesisUtterance();
        speech.text=message;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);
    }

}

catch(e){
    console.log({"err":"error","val":e});

}


