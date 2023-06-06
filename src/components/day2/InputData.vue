<template>
    <div id="login-form">
        <form>
            <div>
                <label> First number: </label>
                <input v-model="firstNumber" />
            </div>
           
            <div>
                <label> First number: </label>
                <input v-model="secondNumber" />
            </div>  
            <div>
                <label>Calculate type:</label>
                <select v-model="calculateType" @change="sendData()">
                    <option disabled value="">Please Select</option>
                    <option value="plus">Plus</option>
                    <option value="sub">Sub</option>
                    <option value="mul">Multi</option>
                </select>
            </div>   
        </form>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        firstNumber: 0,
        secondNumber: 0,
        calculateType: '',
      };
    },
    emits: ['data_cal'],
    methods: {
      sendData() {
        this.$emit('data_cal', [
          {'firstNumber':  this.firstNumber},
          {'secondNumber': this.secondNumber},
          {'calculateType': this.calculateType}
        ])
      }
    }
  }
</script>
