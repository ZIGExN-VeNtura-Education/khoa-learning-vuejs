<template>
  <div id="day-two">
    <InputData @data_cal="onNewData($event)" />
    <CalculateData v-bind="data_receive" @result="onNewResult($event)"/>
  </div>
</template>
<script>
import InputData from './InputData.vue'
import CalculateData from './CalculateData.vue'
export default{
    components:{
        InputData,
        CalculateData
    },
  data() {
    return {
      data_receive: {
        firstNumber: 0,
        secondNumber: 0,
        calculateType: null
      },
      result_receive: null
    }
  },
  methods: {
    onNewData(data_cal){
      this.data_receive.firstNumber = data_cal[0].firstNumber;
      this.data_receive.secondNumber = data_cal[1].secondNumber;
      this.data_receive.calculateType = data_cal[2].calculateType;
    },
    onNewResult(result) {
      this.result_receive = result;
    }
  }
}
</script>
