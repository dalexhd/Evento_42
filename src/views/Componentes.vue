<template>
  <div>
    <button class="btn" @click="btnClick" v-show="!showImage">Hola {{ counter }}</button>
    <img
      v-show="showImage"
      src="https://media0.giphy.com/media/13d2jHlSlxklVe/giphy.webp?cid=790b761186bd135e81813d50885e1f6c2a281219cbb12928&rid=giphy.webp"
    >
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0,
      showImage: false
    };
  },
  methods: {
    btnClick() {
      if (this.counter < 42) {
        if (this.counter > 9) {
          this.counter += 2;
        } else {
          this.counter++;
        }
      } else {
        this.showImage = true;
        setTimeout(() => {
          this.showImage = false;
          this.counter = 0;
        }, 3000);
      }
    }
  }
};
</script>
