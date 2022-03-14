<template>
  <div>
    <label @click="selectRate">
      <input 
        type="radio" 
        name="star" 
        v-model="selectStar" 
        value="1" 
        @input="$emit('selectRate', $event.target.value)"
      />
      <Star />
    </label>
    <label @click="selectRate">
      <input 
        type="radio" 
        name="star" 
        v-model="selectStar" 
        value="2" 
        @input="$emit('selectRate', $event.target.value)"
      />
      <Star />
    </label>
    <label @click="selectRate">
      <input 
        type="radio" 
        name="star" 
        v-model="selectStar" 
        value="3" 
        @input="$emit('selectRate', $event.target.value)"
      />
      <Star />
    </label>
    <label @click="selectRate">
      <input 
        type="radio" 
        name="star" 
        v-model="selectStar" 
        value="4" 
        @input="$emit('selectRate', $event.target.value)"
      />
      <Star />
    </label>
    <label @click="selectRate">
      <input 
        type="radio" 
        name="star" 
        v-model="selectStar" 
        value="5" 
        @input="$emit('selectRate', $event.target.value)"
      />
      <Star />
    </label>
  </div>
</template>

<script>
export default {
  name: "ReviewBlockStarList",

  data() {
    return {
      selectStar: null,
    };
  },

  methods: {
    selectRate(e) {
      let allPath = document.querySelectorAll(".star-list path")

      allPath.forEach((star) => {
        star.style.fill = "#E4E4E4"
      })
      
      let label = e.target.parentNode,
          path = label.childNodes[1].firstElementChild

      path.style.fill = "rgb(241, 196, 80)"

      let allPathObj = Object.assign(allPath)

      //Выделение оценки(звезды) и значение в input
      for (const key in allPathObj) {
        if (Object.hasOwnProperty.call(allPathObj, key)) {
          const star = allPathObj[key]

          if (star.style.fill !== "rgb(241, 196, 80)") {
            star.style.fill = "rgb(241, 196, 80)"
          } else {
            break
          }
        }
      }
    },
  },
};
</script>

<style src="./ReviewBlockStarList.css" scoped>

</style>