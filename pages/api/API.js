import axios from "axios"

const API = {
  getAppointmentData: () => {
    return axios.get("/api/appointments")
  }
}

export default API