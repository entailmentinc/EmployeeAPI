const localStorageService = (function () {
  function _setToken(auth_data) {
    localStorage.setItem('auth_data', auth_data)
  }
  function _getAccessToken() {
    return localStorage.getItem('auth_data')
  }
  function _clearToken() {
    localStorage.removeItem('auth_data')
  }
  return {
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    clearToken: _clearToken,
  }
})()
export default localStorageService
