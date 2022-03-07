<template>
  <section class="tabs">
    <section class="tabs__nav">
      <ul>
        <li
          id="tab-1"
          :class="{ active: selectedTab == 'tab-1' }"
          @click="setSelectedTab"
        >
          Описание
        </li>
        <li
          id="tab-2"
          :class="{ active: selectedTab == 'tab-2' }"
          @click="setSelectedTab"
        >
          Характеристики
        </li>
        <li
          id="tab-3"
          :class="{ active: selectedTab == 'tab-3' }"
          @click="setSelectedTab"
        >
          Отзывы
        </li>
        <li
          id="tab-4"
          :class="{ active: selectedTab == 'tab-4' }"
          @click="setSelectedTab"
        >
          Оставить отзыв
        </li>
      </ul>
    </section>

    <section class="tabs__item-list" v-if="item">
      <UiTabsItem
        name="tab-1"
        :class="{ show: selectedTab == 'tab-1' }"
        class="tabs__item-list__item"
      >
        <p class="tabs__item-list__item__description" v-html="item.descr"></p>
      </UiTabsItem>

      <UiTabsItem
        name="tab-2"
        :class="{ show: selectedTab == 'tab-2' }"
        class="tabs__item-list__item"
      >
        <section class="tabs__item-list__item__props">
          <div v-for="item in item.props" :key="item.measure">
            <p>{{ item.caption }}</p>
            <p>{{ item.value }} {{ item.measure }}</p>
          </div>
        </section>
      </UiTabsItem>

      <UiTabsItem
        name="tab-3"
        :class="{ show: selectedTab == 'tab-3' }"
        class="tabs__item-list__item"
      >
        <section
          class="tabs__item-list__item__reviews"
          v-if="reviewsLength > 0"
        >
          <div
            class="tabs__item-list__item__reviews__reviews"
            v-for="item in item.reviews"
            :key="item.text"
          >
            <div class="tabs__item-list__item__reviews__reviews__img">
              <img :src="item.avatar" alt="person" />
            </div>

            <div class="tabs__item-list__item__reviews__reviews__info">
              <div>
                <p>{{ item.author }}</p>
                <StarsList :rate="item.rate" />
              </div>
              <div>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </section>

        <p v-else class="tabs__item-list__item__not-reviews">
          Отзывов пока нет
        </p>
      </UiTabsItem>

      <UiTabsItem
        name="tab-4"
        :class="{ show: selectedTab == 'tab-4' }"
        class="tabs__item-list__item"
      >
        <ReviewBlock @create="createReview" />
      </UiTabsItem>
    </section>
  </section>
</template>

<script>
export default {
  name: "UiTabs",

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      selectedTab: "tab-1",
      reviewsLength: null,
    };
  },

  methods: {
    createReview(review) {
      this.item.reviews.push(review)
      this.reviewsLength = this.item.reviews.length
      this.selectedTab = "tab-3"
    },

    setSelectedTab(e) {
      this.reviewsLength = this.item.reviews.length
      this.selectedTab = e.target.getAttribute("id")
    },

    reviewsLen() {
      this.reviewsLength = this.item.reviews.length
    },
  },
};
</script>

<style src="./UiTabs.css" scoped>

</style>