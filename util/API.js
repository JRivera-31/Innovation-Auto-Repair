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
  },

  deleteBlockout: () => {
    return axios.delete('/api/blockouts', { date });
  },

  login: (username, password) => {
    return axios.post("/user/login", { username, password })
  },

  logout: () => {
    return axios.get("/user/logout")
  }
}

export default API