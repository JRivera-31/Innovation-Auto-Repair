import axios from "axios"

const API = {
  getAppointmentData: () => {
    return axios.get("/api/appointments")
  },

  createAppointment: (name, email, phonenumber, description, date, time) => {
    return axios.post("/api/appointments", {name, email, phonenumber, description, date, time})
  },

  deleteAppointment: (id) => {
    return axios.delete(`/api/appointments/${id}`);
  },

  getLastAppointment: () => {
    return axios.get("/api/lastappointment")
  },

  getBlockoutData: () => {
    return axios.get('/api/blockouts');
  },

  createBlockout: (date) => {
    return axios.post('/api/blockouts', { date });
  },

  deleteBlockout: (id) => {
    return axios.delete(`/api/blockouts/${id}`);
  },

  login: (username, password) => {
    return axios.post("/user/login", { username, password })
  },

  getMe: () => {
    return axios.get("/user/me");
  },

  logout: () => {
    return axios.get("/user/logout")
  }
}

export default API