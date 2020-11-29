<template>
  <div class="switch">
    <div class="el-icon-arrow-left icon" @click="moveCarousel(-1)"></div>
    <div class="flex f1 hidden">
      <div class="item">
        <transition :name="animation ? 'left' : 'right'">
          <img v-if="show" :src="items[active - 1]" />
        </transition>
      </div>
      <div class="item">
        <transition :name="animation ? 'left' : 'right'">
          <img v-if="show" :src="items[active]" />
        </transition>
      </div>
      <div class="item">
        <transition :name="animation ? 'left' : 'right'">
          <img v-if="show" :src="items[active + 1]" />
        </transition>
      </div>
    </div>
    <div class="el-icon-arrow-right icon" @click="moveCarousel(1)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animation: false,
      num: 3,
      active: 1,
      show: true,
      items: [
        "https://www.w3school.com.cn/i/eg_tulip.jpg",
        "https://www.w3school.com.cn/i/eg_tulip.jpg",
        "https://www.w3school.com.cn/i/eg_tulip.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1407164044,228327687&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1407164044,228327687&fm=26&gp=0.jpg",
        "https://www.w3school.com.cn/i/eg_tulip.jpg",
      ],
    };
  },
  computed: {
    atEndOfList() {
      return (
        this.currentOffset <=
        this.paginationFactor * -1 * (this.items.length - this.windowSize)
      );
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      if (direction > 0) {
        this.animation = true;
        if (this.items.length - (this.num - 1) > this.active) {
          this.active = this.active + direction;
          this.loading();
        }
      } else {
        this.animation = false;
        if (this.active > 1) {
          this.active = this.active + direction;
          this.loading();
        }
      }
    },
    loading() {
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped lang="less">
.switch {
  width: 100%;
  box-sizing: border-box;
  padding: 0 100px;
  align-items: center;
  display: flex;
  .hidden {
    overflow: hidden;
  }
  .icon {
    font-size: 28px;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .item {
    flex: 1;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 15px;
      height: 100%;
      width: 100%;
    }
  }
  .right-enter-active,
  .right-leave-active {
    transition: 1s;
  }
  .right-enter,
  .right-leave-to {
  }
  .left-enter-active,
  .left-leave-active {
    transition: 1s;
  }
  .left-enter,
  .left-leave-to {
  }
}
</style>
