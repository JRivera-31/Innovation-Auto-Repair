import axios from "axios"

const API = {
  get: () => {
    return axios.get("/api/appointments")
  }
}

export default API