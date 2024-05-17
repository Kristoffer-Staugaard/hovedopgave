<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      currentDate: '',
      days: [],
      currYear: 0,
      currMonth: 0,
      months: [
        "Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli",
        "August", "September", "Oktober", "November", "December"
      ],
      showInput: false,
      nameValue: '',
      UCLMailValue: '', 
      messageValue: '' 
    };
  },
  mounted() {
    let currentDate = new Date();
    this.currYear = currentDate.getFullYear();
    this.currMonth = currentDate.getMonth();
    this.renderCalendar();
  },
  methods: {
    renderCalendar() {
      let currentDate = new Date(); 
      let date = new Date(this.currYear, this.currMonth, 1);
      let firstDayOfMonth = date.getDay();
      let lastDateOfMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate();
      let lastDayOfMonth = new Date(this.currYear, this.currMonth, lastDateOfMonth).getDay();
      let lastDateOfLastMonth = new Date(this.currYear, this.currMonth, 0).getDate();
      let daysArray = [];

      for (let i = firstDayOfMonth; i > 0; i--) {
        daysArray.push({ date: lastDateOfLastMonth - i + 1, active: false });
      }

      for (let i = 1; i <= lastDateOfMonth; i++) {
        let isActive = i === currentDate.getDate() && this.currMonth === currentDate.getMonth() && this.currYear === currentDate.getFullYear();
        daysArray.push({ date: i, active: isActive });
      }

      for (let i = lastDayOfMonth; i < 6; i++) {
        daysArray.push({ date: i - lastDayOfMonth + 1, active: false });
      }

      this.days = daysArray;
      this.currentDate = `${this.months[this.currMonth]} ${this.currYear}`;
    },
    changeMonth(direction) {
      this.currMonth += direction;
      if (this.currMonth < 0) {
        this.currMonth = 11;
        this.currYear--;
      } else if (this.currMonth > 11) {
        this.currMonth = 0;
        this.currYear++;
      }
      this.renderCalendar();
    },
    showInputBox(day) {
      this.showInput = true;
      this.inputValue = '';
    },
    hideInputBox() {
      this.showInput = false;
    },
    sendData() {
  const dataToSend = {
    name: this.nameValue,
    uclMail: this.UCLMailValue,
    message: this.messageValue
  };
  console.log('Data til afsendelse:', dataToSend);

  fetch('https://hovedopgave-f875e-default-rtdb.firebaseio.com/booking.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
  .then(response => {
    console.log('Data er sendt server:', response);
    this.nameValue = '';
    this.UCLMailValue = '';
    this.messageValue = '';
    this.popupMessage = '✔ booking sendt';
    setTimeout(() => {
      console.log('Fjerner popup-melding');
        this.$nextTick(() => {
            this.popupMessage = ''; 
            this.$forceUpdate();
        });
    }, 2000);
   })  
  .catch(error => {
    console.error('Fejl ved afsendelse af data:', error);
  });
}
  }
};
</script>
<template>
    <section id="bdk">
      <div class="calendar">
          <div class="current-date">{{ currentDate }}</div>
        <div v-if="showInput" class="input-container">
          <div class="input-box">
              <div class="input-hide-box-1">
              <div class="input-hide-box-1-tekst">
                  <h3>Book en tid til Karrierevejledning</h3>
              </div>
              <button @click="hideInputBox" class="btn-div-hide-box-x">X</button>
              </div>
              <div class="input-hide-box-2">
              <input type="text" v-model="nameValue" placeholder="Navn" class="input-felter-box">
              <input type="text" v-model="UCLMailValue" placeholder="UCL mail" class="input-felter-box">
              <input type="text" v-model="messageValue" placeholder="besked" class="input-felter-box" id="input-input-felter-box-besked">
              </div>
              <div class="input-hide-box-3">
              <button @click="sendData" class="btn-div-hide-box-send">Send</button>
              </div>
              <div>
                <div class="popup-sendt">{{ popupMessage }}</div>
              </div>
          </div>
        </div>
        <div class="btn-wrap">
          <button class="carousel-btn" @click="changeMonth(-1)">
            <div class="btn-div">&lt;</div>
          </button>
          <button class="carousel-btn" @click="changeMonth(1)">
            <div class="btn-div">&gt;</div>
          </button>
        </div>
          <ul class="days">
            <li v-for="day in days" :class="{ 'active': day.active, 'inactive': !day.active }" @click="showInputBox(day.date)">
              {{ day.date }}
            </li>
          </ul>
      </div>
    </section>
  </template>

<style scoped>
.current-date {
  font-size: 1.45rem;
  font-weight: 500;
  color: #E2F1EE;
  Font-style: italic;
}

.calendar {
  padding: 20px;
  border-style: solid;
  background: #1A444D;
}

.calendar ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  text-align: center;
}

.calendar .days {
  margin-bottom: 20px;
}

.calendar li {
  color: #333;
  width: calc(100% / 7);
  font-size: 1.07rem;
}

.calendar .weeks li {
  font-weight: 500;
  cursor: default;
}

.calendar .days li {
  z-index: 1;
  cursor: pointer;
  position: relative;
  margin-top: 30px;
}

.days li.inactive {
  color: #FFFFFF;
}

.days li.active {
  color: #FFF;
}

.days li::before {
  position: absolute;
  content: "";
  left: 50%;
  top: 50%;
  height: 40px;
  width: 40px;
  z-index: -1;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.days li.active::before {
  background: #F8CCC4;
}

.days li:not(.active):hover::before {
  background: #F8CCC4;
}

.input-container {
  position: fixed;
  top: 20%;
  left: 59%;
  transform: translateX(-50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 450px;
  width: 500px;
  z-index: 9999;
  display: flex;

}
.input-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 20px;
}
.input-box input {
  flex: 1;
  margin-right: 10px;

}

.input-hide-box-1{
margin-left: 50px;
display: flex;
}

.input-hide-box-2{
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 30px;
    padding-left: 36px;
}

.input-felter-box{
    width:420px;
}

#input-input-felter-box-besked{
    height: 200px;
}

.input-hide-box-3{
    margin-left: 170px;
}


.btn-div-hide-box-x{
    background-color: #CAE4E3;
   width: 30px;
   height: 30px;
   color:#1A444D;
   align-content: center;
   font-size: 20px;
   border-radius: 15%;
}

.btn-div-hide-box-x:hover{
background-color: #FCE977;
}

.btn-div-hide-box-send{
    background-color: #CAE4E3;
   width: 150px;
   height: 50px;
   color:#1A444D;
   align-content: center;
 font-size: 50px;
}

.btn-div-hide-box-send:hover{
background-color: #FCE977;
}

.input-hide-box-1-tekst{
    width:400px
}

.popup-sendt{
  display: flex;
width: 200px;
padding-left: 180px;
color: #1A424B;
}
</style>