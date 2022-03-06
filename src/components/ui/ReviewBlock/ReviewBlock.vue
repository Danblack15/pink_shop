<template>
  <form method="post" action="/review" @submit.prevent>
    <fieldset class="star-list">
        <p>Оценка</p>
        <div>
            <Star @click="selectRate"/>
            <Star @click="selectRate"/>
            <Star @click="selectRate"/>
            <Star @click="selectRate"/>
            <Star @click="selectRate"/>
        </div>
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
    name: 'ReviewBlock',

    data() {
        return {
            post: {
                author: '',
                avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                rate: '',
                text: ''
            }
        }
    },

    methods: {
        createReview() {
            if (this.validFrom()) {
                this.$emit('create', this.post)
                this.post = {
                    author: '',
                    avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                    rate: '',
                    text: ''
                }

                let allPath = document.querySelectorAll('.star-list path')

                allPath.forEach(star => {
                    star.style.fill = '#E4E4E4'
                })

                this.post.rate = ''
            }
        },

        validFrom() {
            let allInput = document.querySelectorAll('form input'),
                bool = true,
                textarea = document.getElementById('review')

            allInput.forEach(input => {
                if (input.value == '') {
                    input.style.border = '1px solid #FF6969'
                    bool = false
                } else {
                    input.style.border = '1px solid #898989'
                }
            })

            if (textarea.value == '') {
                textarea.style.border = '1px solid #FF6969'
                bool = false
            } else {
                document.getElementById('review').style.border = '1px solid #898989'
            }

            return bool
        },

        selectRate(e) {
            let allPath = document.querySelectorAll('.star-list path')

            allPath.forEach(star => {
                star.style.fill = '#E4E4E4'
            })

            e.target.firstElementChild.style.fill = 'rgb(241, 196, 80)'


            let allPathObj = Object.assign(allPath),
                rateInc = 0

            //Выделение оценки(звезды) и значение в input
            for (const key in allPathObj) {
                if (Object.hasOwnProperty.call(allPathObj, key)) {
                    const star = allPathObj[key];
                    
                    if (star.style.fill !== 'rgb(241, 196, 80)') {
                        star.style.fill = 'rgb(241, 196, 80)'

                        rateInc++
                    
                    } else {
                        rateInc++

                        this.post.rate = rateInc

                        break
                    }
                }
            }                
            
        }
    }
}
</script>

<style src="./ReviewBlock.css" scoped>

</style>