<script>
import Brochure from "@/components/Brochure";

let nArray = [
    { image: "", video: require("@/assets/hero/videos/6.mp4") },
    { image: "", video: require("@/assets/hero/videos/2.mp4") },
    { image: "", video: require("@/assets/hero/videos/4.mp4") },
  ]
  
  export default {
    components: {Brochure},
    data() {
      return {
        nArr: nArray,
        videoStart: 0,
        ended: this.playNext,
        quote: false
      }
    },
    methods: {
      play() {
      document.querySelector('video').playbackRate = 0.5;
      document.querySelector('video').play();
    },
      playVideo() {
        console.log(this.nArr)
        var videoPlayer = document.getElementById('videoElement');
        
        let random = Math.floor(Math.random() * this.nArr.length)
        // videoPlayer.poster = this.nArr[0].image
        videoPlayer.src = this.nArr[random].video
        videoPlayer.playbackRate = 0.7;
      },
      playNext() {
        try {
          let i = this.videoStart + 1
          if (i < this.nArr.length) {
            var videoPlayer = document.getElementById('videoElement');
            videoPlayer.poster = this.nArr[i].image
            videoPlayer.src = this.nArr[i].video
            this.videoStart = i
            console.log(i)
          } else {
            this.videoStart = 0
            i = this.videoStart
            var videoPlayer = document.getElementById('videoElement');
            videoPlayer.src = this.nArr[i].video
          }
        } catch (err) { }
      },
    },
    mounted() {
      this.playVideo()
    },
    computed: {
  
    }
  }
  </script>


<template>
  <div class="home">
    <div class="hero">
      <video id="videoElement" muted autoplay no-controls @ended="ended"></video>
      <div class="container">
        <section>
          <div class="brochure-flex-wrap">
          <div>
            <h1>We create innovative digital solutions.</h1>
            <p class="mb-2">
              We are a world class business consulting & digital agency delivering top notch solutions to your individual and business needs.
            </p>
            <br>
            <div class="button-group">
              <button class="button-light-big" onclick="window.open('https://calendly.com/boltcliq/15-minutes-free-consultation', '_blank')">
              Book a Session
            </button>
            </div>
          </div>
          <div class="brochure">
            <Brochure v-if="quote"/>
          </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brochure-flex-wrap {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.button-group {
  display: flex;
  gap: 10px;
  place-items: center;
  position: relative;
}

.button-group > div img {
  position: absolute;
  top: 0;
  animation: scaler 5s ease infinite;
}

@keyframes scaler {
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.3);
  }
  100%{
    transform: scale(1);
  }
}


.hero {
  width: 100%;
  height: 100vh;
  background: #000000;
  mix-blend-mode: normal;
  background-size: cover;
  position: relative;
}

a {
  text-decoration: none;
}

video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.hero:before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero .container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  align-items: center;
}

.hero h1 {
  width: 600px;
  color: #ffffff;
  font-size: 75px;
  margin-bottom: 10px;
  font-style: normal;
}

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }

  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}

.hero h1 span {
  font-family: var(--heading-font-family);
  color: var(--primary);
}

.hero p {
  width: 550px;
  line-height: 1.5;
  color: #ffffff;
}


@media (max-width: 768px) {
  .hero {
    background-position: top right;
    height: 130vh;
  }

  .hero h1 {
    width: 100%;
    line-height: 1.3;
    font-size: 50px;
  }

  .hero p {
    width: 100%;
    line-height: 1.5;
  }

  .hero .container {
    width: 100%;
  }
}
</style>
