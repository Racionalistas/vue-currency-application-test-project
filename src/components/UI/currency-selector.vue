<template>
  <v-select 
  v-model="searchOutput" 
  item-color="teal"
  background-color="teal lighten-5"
  success
  solo
  style="font-size:20px;width: 200px;"  
  :items="allCurrenciesArr"
  item-text="abbreviation" 
  item-value="abbreviation" 
  @change="$emit('valuechange',$event)"
  ></v-select>
</template>

<script>
import allCurrenciesArr from '@/assets/allCurrencies.json'
export default {
  props:{
      abbreviation:{
        requied:true,
        type: String
      }
    },
  data() {
    return {
      allCurrenciesArr,
      searchOutput:"",
      test: this.abbreviation
    }
  },
  mounted(){
    this.searchOutput=allCurrenciesArr.find(el=>el.abbreviation==this.abbreviation)
  }
}
</script>
