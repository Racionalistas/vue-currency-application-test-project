<template>
  <v-container>
    <div style="height:260px; align-items: center;display:flex; justify-content: center;flex-direction:column">
      <div style="border:3px solid teal;">
        <dialog-choose-currency @bothSelected="trackExchange($event)">
        </dialog-choose-currency>
      </div>
        <v-expand-x-transition >
          <div v-show="expand" style="margin-top:15px">
            <info-card
            :from-currency="trackObj.from" 
            :to-currency="trackObj.to"
            :response-obj="trackObj.exchangeInfo"
            >
            </info-card>
          </div>
        </v-expand-x-transition>
    </div>


    <v-layout wrap align-center justify-center style="margin-top:50px; gap: 20px; " align-baseline>
      <span class="display-1" style="text-align:center">Популярные курсы валюты </span>
      <currency-selector abbreviation="USD" style="flex:0 0 12.5rem;" @valuechange="doUpdate($event)"></currency-selector>  
    </v-layout>
    <v-row style="gap:20px" justify="center">
      <v-col v-if="fromCurrency!=toCurrencies[0]" style="flex-grow:0">
        <info-card  
        :from-currency="fromCurrency" 
        :to-currency="toCurrencies[0]"
        :response-obj="responseObj">
        </info-card>
      </v-col>
      <v-col style="flex-grow:0" v-if="fromCurrency!=toCurrencies[1]">
        <info-card 
        :from-currency="fromCurrency" 
        :to-currency="toCurrencies[1]"
        :response-obj="responseObj">
        </info-card>
      </v-col>
      <v-col style="flex-grow:0" v-if="fromCurrency!=toCurrencies[2]">
        <info-card 
        :from-currency="fromCurrency" 
        :to-currency="toCurrencies[2]"
        :response-obj="responseObj">
        </info-card>
      </v-col>
      <v-col style="flex-grow:0" v-if="fromCurrency!=toCurrencies[3]">
        <info-card 
        :from-currency="fromCurrency" 
        :to-currency="toCurrencies[3]"
        :response-obj="responseObj">
        </info-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
import DialogChooseCurrency from '@/components/UI/dialog-choose-currency.vue'
import currencySelector from '@/components/UI/currency-selector.vue';
import InfoCard from '@/components/InfoCard.vue'
export default {
  components: { currencySelector, InfoCard, DialogChooseCurrency },
  data() {
    return {
      fromCurrency:"USD",
      toCurrencies:["RUB","EUR","USD","GBP"],
      responseObj: {rates:{USD:{change:0, change_pct:0,end_rate:0},
                           RUB:{change:0, change_pct:0,end_rate:0},
                           GBP:{change:0, change_pct:0,end_rate:0},
                           EUR:{change:0, change_pct:0,end_rate:0}}},
      expand:false,
      trackObj:{
        to:String(null),
        from:String(null),
        exchangeInfo: null
      }
    }
  },
  methods:{
    async trackExchange(evt){
      try{
        this.trackObj.to = evt.to,
        this.trackObj.from= evt.from
        this.currencyToTrack = evt.from;
        var myHeaders = new Headers();
        myHeaders.append("apikey", "ca21GUBBU1uReOuT9cp2aIASsmyNbXTB");

        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        let rightNow = new Date();
        this.trackObj.exchangeInfo = JSON.parse(await fetch("https://api.apilayer.com/exchangerates_data/fluctuation?start_date="+`${rightNow.getFullYear()}-${rightNow.getMonth()}-${rightNow.getDate()}`+"&end_date="+`${rightNow.getFullYear()}-${rightNow.getMonth()+1}-${rightNow.getDate()}`+"&base="+`${evt.from}`, requestOptions)
        .then(response => response.text()))
        this.expand=true;
      } catch (e) {console.log(e); 
      }
    },
    async doUpdate(evt){
      try{
        this.fromCurrency=evt;
        var myHeaders = new Headers();
        myHeaders.append("apikey", "ca21GUBBU1uReOuT9cp2aIASsmyNbXTB");

        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        let rightNow = new Date();
        this.responseObj = JSON.parse(await fetch("https://api.apilayer.com/exchangerates_data/fluctuation?start_date="+`${rightNow.getFullYear()}-${rightNow.getMonth()}-${rightNow.getDate()}`+"&end_date="+`${rightNow.getFullYear()}-${rightNow.getMonth()+1}-${rightNow.getDate()}`+"&base="+`${this.fromCurrency}`, requestOptions)
        .then(response => response.text()))} catch (e) {console.log(e); }
  
      }  
  },
  async mounted(){
    try{
        var myHeaders = new Headers();
        myHeaders.append("apikey", "ca21GUBBU1uReOuT9cp2aIASsmyNbXTB");

        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: myHeaders
        };
        let rightNow = new Date();
        this.responseObj = JSON.parse(await fetch("https://api.apilayer.com/exchangerates_data/fluctuation?start_date="+`${rightNow.getFullYear()}-${rightNow.getMonth()}-${rightNow.getDate()}`+"&end_date="+`${rightNow.getFullYear()}-${rightNow.getMonth()+1}-${rightNow.getDate()}`+"&base="+`${this.fromCurrency}`, requestOptions)
        .then(response => response.text()))} catch (e) {console.log(e); }
      }
};
</script>