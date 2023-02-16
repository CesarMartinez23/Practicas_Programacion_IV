<template>
  <h3>Filtros Por Region</h3>
  <div v-for="region in allRegions" :key="region.id">
    <input type="radio" name="selectRegion" :value="region" v-model="currentRegion" />
    {{ region }}
  </div>
  <br />
  {{ $store.state.currentRegion }} <br><br>
</template>

<script>
export default {
  data() {
    return {
      allRegions: [
        "All",
        "Europe",
        "Asia",
        "Africa",
        "Americas",
        "Oceania",
        "Antarctic",
      ],
    };
  },
  computed: {
    currentRegion: {
      get() {
        return this.$store.state.currentRegion
      },
      set(value) {
        this.$store.commit("SET_REGION", value)
      }
    }
  }
}
</script>
