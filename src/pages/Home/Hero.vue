<script>
  import Brochure from "@/components/Brochure";
  let nArray = [
    { image: "", video: require("@/assets/hero/videos/2.mp4") },
    { image: "", video: require("@/assets/hero/videos/4.mp4") },
    { image: "", video: require("@/assets/hero/videos/5.mp4") },
    { image: "", video: require("@/assets/hero/videos/6.mp4") },
    { image: "", video: require("@/assets/hero/videos/7.mp4") },
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
              We create world-class digital products, web design, and branding
              that impacts people's experience
            </p>
            <br>
            <div class="button-group">
              <button class="button-light-big" onclick="window.open('https://calendly.com/boltcliq/30-minutes-free-consultation', '_blank')">
              Book a Session
            </button>
              <button class="button-primary" @click="quote=!quote">
                Request Quote
              </button>
            </div>
          </div>
          <div class="brochure">
            <Brochure v-if="quote"/>
          </div>
          </div>
        </section>
        <div class="container-bottom">
          <section>
            <div class="bottom-grid">
              <a href="https://pages.topuniverse.org/message-from-our-ceo/" target="_blank">
                <h4 class="bottom-text">The Future of Education</h4>
              </a>
              <a href="#">
                <h4 class="bottom-text">Food Aggregation</h4>
              </a>
              <a href="https://topuniverse.org/cohort/" target="_blank">
                <h4 class="bottom-text">Digital Education</h4>
              </a>
              <a href="https://topafrica.org" target="_blank">
                <h4 class="bottom-text">Products Engineering</h4>
              </a>
            </div>
          </section>
        </div>
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
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

a {
  all: unset;
}

section {
  width: 85%;
  margin: 0 auto;
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
  height: 100%;
  display: grid;
  align-items: center;
}

.hero .container-bottom {
  position: absolute;
  bottom: 30px;
  width: 100%;
  /* margin: 0 auto; */
}


.hero .container-bottom .bottom-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  align-items: center;
  margin: 0 auto;
}

.bottom-text {
  color: rgba(255, 255, 255, 0.795);
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 300;
  background-color: none;
  border-top: 1px solid rgba(255, 255, 255, 0.019);
}

.bottom-text:hover {
  transition: all 1s ease-in;
  color: white;
  background-color: rgba(255, 255, 255, 0.042);
  border-top: 1px solid rgba(255, 255, 255, 0.551);
}

.hero h1 {
  line-height: 1.2;
  width: 550px;
  color: #ffffff;
  font-size: 50px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 900;
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
  width: 450px;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.4;
  color: #ffffff;
}

.hero .player_button p {
  font-size: 16px;
}

@media (max-width: 768px) {
  .hero {
    background-position: top right;
    height: 130vh;
  }

  .hero h1 {
    width: 100%;
    line-height: 45px;
    font-size: 45px;
  }

  .hero p {
    width: 100%;
    font-size: 16px;
    line-height: 1.5;
  }

  .hero .container {
    width: 100%;
  }
}
</style>
