const tokens = new Map()
tokens.set('Janus', 'xxsxsadasd')
tokens.set('Echo', 'pigcccc')

const login = {
  url: '/geek-admin/user/login',
  type: 'post',
  response: (config) => {
    const { username } = config.body
    const token = tokens.get(username)

    // mock error
    if (!tokens.has(username)) {
      return {
        code: 60204,
        message: 'Account and password are incorrect.',
      }
    }

    return {
      code: 200,
      data: token,
    }
  },
}

export default login
