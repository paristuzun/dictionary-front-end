const API = "http://murmuring-scrubland-52560.herokuapp.com"

export function createUser(userData) {
  return fetch(`${API}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: userData })
  }).then(res => res.json())
}

export function login(formData) {
  return fetch(`${API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  }).then(res => res.json())
}

export function getTopics() {
  return fetch(`${API}/topics`)
    .then(res => res.json())
}
