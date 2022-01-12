function timer() {
    //intialization of three reactive variables
    this.domS = 0;
    this.domM = 0;
    this.domH = 0;
    //setInterval will execute function every one sec
    var t = setInterval(() => {
      //increment of second
      if (this.event == true) {
        /*This part has some problem*/
        console.log(this.domS)
        this.domS = this.domS + 1;
        if (this.domS == 60) {
          //It is whole minute Now
          //As domS reached 60
          this.domS = 0;
          //Minute variable will be incremented
          this.domM = this.domM + 1;
        if (this.domM == 60) {
          //Whole hour is passed
          this.domM = 0;
          //Hour is incremented
          this.domH = this.domH + 1;
        };
      };

      //At every interval
      //after updating variables
      //This checkpoint checks if we have to stop
      if (this.inputS == this.domS &&
        this.inputM == this.domM &&
        this.inputH == this.domH) {
        //This statement will stop interval function
        clearInterval(t);
        //This will stop Howler object
        //from playing sound
        sound.stop();
      }
    }
  //  else {console.log('ok')}
    },1000);
};

let vm =  new Vue({
  el:'#test',
  data: {domS: 0, domM: 0, domH: 0,
      inputS: 0, inputM: 0, inputH: 0, event:false},
  methods: {
    //This is function that runs
    //everything in the project
    //it is triggered by start button
    meditationEvent() {
      this.event = true;
      if (this.inputS !== 0
        && this.event == true) {
        this.timer();
        sound.play();
     }
   },
    timer: timer,
    stopToggle() {
      this.event = !this.event;
    }
  },
})

//crossorigin error
var sound = new Howl({
   src: ['audio/audio1.mp3'],
   loop:true
});

//Now my goal is different

//if this.event is true
//run the timer
//if false stop it.
