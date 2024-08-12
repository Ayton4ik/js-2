const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
  };

const timer = {

    intervalId: null,

    start() {
        const startTime = Date.now();
        this.intervalId = setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = currentTime - startTime;

            console.log('deltaTime: ', deltaTime);
        }, 1000)
    },

    stop() {
        clearInterval(this.intervalId);
    }
}

refs.startBtn.addEventListener('click', ()=>{timer.start()})
refs.stopBtn.addEventListener('click', ()=>{timer.stop()})

