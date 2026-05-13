import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // On laisse l'erreur remonter pour que React Query la gère
    return Promise.reject(error)
  }
)
