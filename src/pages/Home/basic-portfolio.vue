<template>
    <div class="business-images">
        <img class="business-image" src="@/assets/images/screengrabs/1.png" />
        <img class="business-image" src="@/assets/images/screengrabs/2.png" />
        <img class="business-image" src="@/assets/images/screengrabs/3.png" />
        <img class="business-image" src="@/assets/images/screengrabs/4.png" />
        <img class="business-image" src="@/assets/images/screengrabs/15.png" />
        <img class="business-image" src="@/assets/images/screengrabs/5.png" />
        <img class="business-image" src="@/assets/images/screengrabs/14.png" />
        <img class="business-image" src="@/assets/images/screengrabs/6.png" />
        <img class="business-image" src="@/assets/images/screengrabs/7.png" />
        <img class="business-image" src="@/assets/images/screengrabs/13.png" />
        <img class="business-image" src="@/assets/images/screengrabs/8.png" />
        <img class="business-image" src="@/assets/images/screengrabs/9.png" />
        <img class="business-image" src="@/assets/images/screengrabs/10.png" />
        <img class="business-image" src="@/assets/images/screengrabs/11.png" />
        <img class="business-image" src="@/assets/images/screengrabs/12.png" />

        
      </div>
</template>

<style scoped>
.business-images {
  display: flex;
  gap: 50px;
  width: 100%;
  row-gap: 50px;
  column-gap: 50px;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: scroll;
  padding: 1em 1em 0px 0px;
  background-color: white;
  padding: 2em;
  padding-bottom: 3em;
}

.business-image {
  object-fit: cover;
  min-height: 250px;
  max-height: 250px;
  border-radius: var(--border-radius);
  object-position: center;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.137);
  border-radius: 10px;
}
</style>