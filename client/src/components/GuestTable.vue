<template lang="html">
<div>
  <table>
    <tr>
      <th>Name:</th>
      <th>Email:</th>
      <th>Checked in</th>
      <th><i class="fas fa-trash-alt"></i></th>
      <th><i class="fas fa-concierge-bell"></i></th>

    </tr>
    <tr v-for="booking in bookings">
      <td>{{booking.name}}</td>
      <td>{{booking.email}}</td>
      <td><i class="far fa-check-circle" v-if="booking.checked_in"></i><i class="far fa-times-circle" v-if="!booking.checked_in"></i></td>
      <td><input class="btn" v-on:click="deleteBooking(booking._id)" type="submit" value="Delete"></td>
      <td><input class="btn" v-on:click="checkIn(booking._id)" type="submit" value="Check In"></td>
    </tr>
  </table>
</div>
</template>

<script>
import { eventBus } from '@/main.js'
import HotelService from '@/services/HotelService.js'

export default {
  name: "guest-table",
  data(){
    return {
      bookings: []
    }
  },
  methods: {
    deleteBooking(id){
      HotelService.deleteBooking(id)
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    },

    checkIn(id){
      HotelService.updateBooking(id, { checked_in: true });
       const guest = this.bookings.find((booking) => {
        return booking._id === id
      })
      guest.checked_in = true
    }
  },
  mounted(){
    HotelService.getBookings()
    .then(bookings => this.bookings = bookings)

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })
  },
}
</script>


<style lang="css" scoped>
div {
 /* border: 1px solid black; */
}

table,th,td{
  padding:3px;
  border: 1px solid black;
  font-size:1.2em;
}

th, td {
  background-color: #E0FBFC;
}

table {
  padding:10%;
  border-collapse: collapse;
  border: 1px solid black;
}

.btn{
  font-size: 0.8em;
  vertical-align: middle;
  text-decoration: none;
  background: white;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
}

.btn:hover{
 box-shadow: 0 5px 15px rgba(255, 51, 153, .8);
}

.fa-check-circle{
  color: lightGreen;
}

.fa-times-circle{
  color: red;
}
</style>
