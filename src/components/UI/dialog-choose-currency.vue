<template>
  <v-dialog
      v-model="dialog"
      persistent
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn large v-bind="attrs" v-on="on">
          <v-icon size="32px" left>mdi-plus</v-icon> 
          <span class=" ">Отследить курс</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2" style="word-break: normal;">
          Выберите денежные единицы
        </v-card-title>

        <v-card-text>
            <v-flex d-flex class="align-center mt20" style="flex-direction:column; margin-top:20px">
                <span class="text-h6">Перевести из:</span><currency-selector @valuechange="selectedCurr.from=$event"></currency-selector>
                <span class="text-h6">Перевести в:</span><currency-selector @valuechange="selectedCurr.to=$event"></currency-selector>
            </v-flex>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            height="40px"
            style="margin:2px 5px 7px 0"
            color="primary"
            text
            @click="dialog = false; ifBothSelected ? $emit('bothSelected',selectedCurr) : null ">
            Подтвердить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import CurrencySelector from '@/components/UI/currency-selector.vue'
export default {
    components:{CurrencySelector },
    data () {
      return {
        dialog: false,
        selectedCurr: {
          from:'',
          to:''
        }
      }
    },

    computed:{
      ifBothSelected() {
        return !!(this.selectedCurr.from && this.selectedCurr.to)
    },
  
}}

</script>
