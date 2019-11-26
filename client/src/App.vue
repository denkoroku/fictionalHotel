<template lang="html">
<div class="">
  <h1 class= "glow">Crafty Coders</h1>
  <h2>Booking System</h2>
  <booking-form></booking-form>
  <guest-table></guest-table>
</div>
</template>

<script>
import BookingForm from '@/components/BookingForm';
import GuestTable from '@/components/GuestTable';

export default {
  name: 'app',
  components: {
    'booking-form': BookingForm,
    'guest-table': GuestTable
  }
}
</script>

<style lang="css">
body{
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  display:flex;
  justify-content: center;
  font-size: 1.2em;
  background: rgb(17,60,149);
background: linear-gradient(90deg, rgba(61, 90, 128,1) 0%, rgba(152, 193, 217,0.8995973389355743) 35%, rgba(133,176,198,1) 100%);
}

h1{
  font-family: 'Monoton', cursive;
}

.glow {
  font-size: 80px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}

h1, h2 {

  color: #293241;
  text-shadow: 2px 2px darkGrey;
}


</style>
