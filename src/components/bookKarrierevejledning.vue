<script>
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
      ]
    };
  },
  mounted() {
    let currentDate = new Date(); // Hent den aktuelle dato
    this.currYear = currentDate.getFullYear(); // Indstil det aktuelle år
    this.currMonth = currentDate.getMonth(); // Indstil den aktuelle måned
    this.renderCalendar();
  },
  methods: {
    renderCalendar() {
      let currentDate = new Date(); // Hent den aktuelle dato
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
      //console.log("Changing month:", direction); // Tilføjet linje
      //console.log("Current month:", this.currMonth); // Tilføjet linje
      //console.log("Current year:", this.currYear); // Tilføjet linje
      this.currMonth += direction;
     // console.log("New month:", this.currMonth); // Tilføjet linje
     // console.log("New year:", this.currYear); // Tilføjet linje
      if (this.currMonth < 0) {
        this.currMonth = 11;
        this.currYear--;
      } else if (this.currMonth > 11) {
        this.currMonth = 0;
        this.currYear++;
      }
      this.renderCalendar();
    }
  }
};
</script>


<template>
    <section id="bdk">
      <div class="calendar">
        <div class="current-date">{{ currentDate }}</div>
        <div class="btn-wrap">
          <button class="carousel-btn" @click="changeMonth(-1)">
            <div class="btn-div">&lt;</div>
          </button>
          <button class="carousel-btn" @click="changeMonth(1)">
            <div class="btn-div">&gt;</div>
          </button>
        </div>
        <ul class="days">
          <li v-for="day in days" :class="{ 'active': day.active, 'inactive': !day.active }">{{ day.date }}</li>
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
</style>