<template>
      <v-card shaped color="grey lighten-4" elevation="5" height="120px" width="260px">
    <v-card-text >
      <p class="text-h5 text--primary">
        1 {{this.fromCurrency}} = {{this.responseObj?.rates[this.toCurrency].end_rate.toFixed(3)}} {{ this.toCurrency }}
      </p>
      <div class="text--primary">
        <v-row style="padding:0"> 
          <v-col cols="5" style="padding:0 10px"> За месяц:</v-col> 
          <v-layout justify="center" column align-baseline wrap><v-col style="padding:0">
            {{ this.responseObj?.rates[this.toCurrency].change >0 ? "+" + this.responseObj?.rates[this.toCurrency]?.change.toFixed(2) : this.responseObj?.rates[this.toCurrency].change.toFixed(2) }}
          </v-col>  
          <v-col style="padding:0"> 
            {{ this.responseObj?.rates[this.toCurrency].change_pct >0 ? "+" + this.responseObj?.rates[this.toCurrency]?.change_pct.toFixed(2)+"%" : this.responseObj?.rates[this.toCurrency].change_pct.toFixed(2)+"%" }}
          </v-col></v-layout>
        </v-row>
      </div>
    </v-card-text>
    </v-card>
</template>

<script>
export default {
  props:{
      toCurrency:{
        type:String,
        required:true
      },
      fromCurrency: {
          required:true,
          type: String
      },
      responseObj:{
        required: true
      }
  }
}
</script>
