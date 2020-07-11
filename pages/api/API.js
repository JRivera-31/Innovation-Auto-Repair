import axios from "axios"

const API = {
  getAppointmentData: () => {
    return axios.get("/api/appointments")
  },

  createAppointment: (name, email, phonenumber, description, date, time) => {
    return axios.post("/api/appointments", {name, email, phonenumber, description, date, time})
  }
}

export default API