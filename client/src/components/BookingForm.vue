<template lang="html">
  <form class="tableItems" v-on:submit.prevent="addBooking">
    <label class="tabLabel"for="name">Name:</label>
    <input class="tabItem" type="text" id="name" v-model="name" required/>
    <label class="tabLabel" for="email">Email:</label>
    <input class="tabItem" type="text" id="email" v-model="email" required/>
    <input  class ="btn" id="saveBtn" type="submit" value="Save"/>
  </form>
</template>

<script>
import { eventBus } from '@/main.js'
import HotelService from '@/services/HotelService.js'
export default {
  name: 'booking-form',
  data(){
    return {
      name: '',
      email: null,
      checked_in: false
      }
    },
    methods: {
      addBooking(){
        const booking = {
          name: this.name,
          email: this.email,
          checked_in: this.checked_in
        }
        HotelService.postBooking(booking)
        .then(res => eventBus.$emit('booking-added', res))
        .then(() => {
          this.name = '',
          this.email = null
        })
      }
    }
  }
</script>
<style lang="css" scoped>
.btn{
  font-size: 1.2em;
}
form{
  margin:5%;
  background-color: #E0FBFC;
  border-radius: 15px;
  border-style:double;
  border-width: thick;
  box-shadow:10px 10px 10px grey;
}
#saveBtn{
  text-decoration: none;
  background: white;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
}
#saveBtn:hover{
 box-shadow: 0 5px 15px rgba(255, 51, 153, .8);
}



.tableItems{
  padding:20px;
}

.tabItem{
  margin-left:5px;
  margin-top:20px;
  margin-bottom: 20px;
  margin-right: 20px;
}

</style>
