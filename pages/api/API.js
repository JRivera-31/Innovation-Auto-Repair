import axios from "axios"

const API = {
  getAppointmentData: () => {
    return axios.get("/api/appointments")
  },

  createAppointment: (name, email, phonenumber, description, date, time) => {
    return axios.post("/api/appointments", {name, email, phonenumber, description, date, time})
  },

  getBlockoutData: () => {
    return axios.get('/api/blockouts');
  },

  createBlockout: () => {
    return axios.post('/api/blockouts', { date });
  }
}

export default API