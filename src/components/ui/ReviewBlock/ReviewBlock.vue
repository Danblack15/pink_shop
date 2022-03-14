<template>
  <form method="post" action="/review" @submit.prevent>
    <fieldset class="star-list">
      <p>Оценка</p>

      <ReviewBlockStarList @selectRate="selectRate"/>

      <input 
        type="number" 
        name="rate" 
        id="rate" 
        v-model.trim="post.rate" 
      />
    </fieldset>
    <fieldset class="name-reviewer">
      <p>Имя</p>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ваше имя"
        v-model.trim="post.author"
      />
    </fieldset>
    <fieldset class="text-reviewer">
      <p>Отзыв</p>
      <textarea
        name="review"
        id="review"
        cols="30"
        rows="10"
        placeholder="Ваш отзыв"
        v-model.trim="post.text"
      ></textarea>
    </fieldset>

    <ButtonProduct class="submit-review" @click="createReview">
      Оставить отзыв
    </ButtonProduct>
  </form>
</template>

<script>
export default {
  name: "ReviewBlock",

  data() {
    return {
      post: {
        author: "",
        avatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
        rate: "",
        text: "",
      },
    };
  },

  methods: {
    createReview() {
      if (this.validFrom()) {
        this.$emit("create", this.post)

        this.post = {
          author: "",
          avatar:
            "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
          rate: "",
          text: "",
        }

        let allPath = document.querySelectorAll(".star-list path")

        allPath.forEach((star) => {
          star.style.fill = "#E4E4E4"
        })

        this.post.rate = ""
      }
    },

    validFrom() {
      let allInput = document.querySelectorAll("form input"),
        bool = true,
        textarea = document.getElementById("review")

      allInput.forEach((input) => {
        if (input.value == "") {
          input.style.border = "1px solid #FF6969"
          bool = false
        } else {
          input.style.border = "1px solid #898989"
        }
      })

      //Если пустой отзыв
      if (textarea.value == "") {
        textarea.style.border = "1px solid #FF6969"
        bool = false
      } else {
        document.getElementById("review").style.border = "1px solid #898989"
      }

      //Если не выбран рейтинг
      if (!this.post.rate) {
        let allPath = Object.assign(document.querySelectorAll(".star-list path"))
        
        for (const key in allPath) {
          if (Object.hasOwnProperty.call(allPath, key)) {
            const star = allPath[key]

            star.style.fill = "#FF6969"
          }
        }
      }

      return bool
    },

    selectRate(rateInc) {
      this.post.rate = Number(rateInc)
    },
  }
};
</script>

<style src="./ReviewBlock.css" scoped>

</style>