interface User {
  id: string
  email: string
  name: {
    first: string
    last: string
  }
  avatar: string
}

export default User
