function sequencer(){
    const kick = new Tone.Player('./sounds/kick-electro01.wav').toDestination();
    const snare = new Tone.Player('./sounds/snare-lofi02.wav').toDestination();
    var index = 0;

    Tone.Transport.scheduleRepeat(repeat,'8n');
    Tone.Transport.start();

    function repeat(){
        var step = index % 8;
        const kickInputs = document.querySelector(`.kick input:nth-child(${step+1})`);
        const snareInputs = document.querySelector(`.snare input:nth-child(${step+1})`);
        if(kickInputs.checked){
            kick.start();
        }
        if(snareInputs.checked){
            snare.start();
        }
        index++;
    }
}

function setup(){
    var mic,recorder,soundFile;
    var state = 0;
    createCanvas(400,400);
    background(200);
    fill(0);
}

sequencer();