<template>
    <v-form style="margin-top:80px;">
        <v-container>
          <v-row justify="center">
            <v-col class="flex-grow-0">
              <v-text-field @input="doConvert" v-model="amount" placeholder="Сумма:" class="text-h5" style="width:20rem;" autofocus></v-text-field>
            </v-col>
          </v-row>
          <v-row >
            <v-spacer></v-spacer>
            <v-col cols="2">
              <currency-selector abbreviation="RUB" @valuechange="fromCurrency=$event; doConvert()"></currency-selector>
            </v-col>
            <v-col align="center">
              <span class="display-1">перевести в</span>
            </v-col>
            <v-col cols="2">
              <currency-selector abbreviation="USD" @valuechange="toCurrency=$event; doConvert()"></currency-selector>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row justify="center">
            <v-col class="flex-grow-0" >
              <div class="text-h5" style="width:20rem; min-height: 3rem; border: 2px solid darkgray; display: flex; justify-content: center; align-items: center;">{{convertationResult}}</div>
            </v-col>
          </v-row>
        </v-container>
    </v-form>
</template>

<script>
import currencySelector from '@/components/UI/currency-selector.vue';
export default {
  components: { currencySelector },
  data() {
    return {
      amount:"",
      fromCurrency:"RUB",
      toCurrency:"USD",
      convertationResult:0
    }
  },
  methods:{
    doConvert(){
      if(!(this.amount&&this.fromCurrency&&this.toCurrency)) return 0 
      var myHeaders = new Headers();
      myHeaders.append("apikey", "ca21GUBBU1uReOuT9cp2aIASsmyNbXTB");

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
      
      fetch("https://api.apilayer.com/exchangerates_data/convert?to="+this.toCurrency+"&from="+this.fromCurrency+"&amount="+this.amount, requestOptions)
        .then(response => response.text())
        .then(result => {console.log(result);this.convertationResult = JSON.parse(result).result;})
        .catch(error => console.log('error', error));
      },
  }
};
</script>