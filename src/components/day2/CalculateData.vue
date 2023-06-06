<template>
  <div id="calculate-data">
    <label>
      <button @click="sendResult()" >Calculate</button>
    </label>
    <div>
      Result: {{ result }}
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        result: null
      }
    },
    props: ['firstNumber', 'secondNumber', 'calculateType'],
    emits: ["result"],
    methods: {
      sendResult () {
        this.result = this.calculate
      }
    },
    computed: {
      calculate() {
        if (this.calculateType == 'plus') {
          return parseInt(this.firstNumber) + parseInt(this.secondNumber);
        }else if (this.calculateType == 'sub'){
          return parseInt(this.firstNumber) + parseInt(this.secondNumber);
        }else if (this.calculateType == 'mul') {
          return parseInt(this.firstNumber) * parseInt(this.secondNumber);
        }else{
          return 'Something is wrong!!!'
        }
      },
    }
  }
</script>