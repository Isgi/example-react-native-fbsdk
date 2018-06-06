export const navigateToDashboard = () => ({
  type: 'Navigation/RESET',
  index: 0,
  key: null,
  actions: [{
    type: 'Navigation/NAVIGATE',
    routeName: 'MainNavigators',
    action: {
      type: 'Navigation/RESET',
      index: 0,
      key: 'SettingNavigators',
      actions: [{
        type: 'Navigation/NAVIGATE',
        routeName: 'Settings'
      }]
    }
  }]
})

export const navigateToLogin = () => ({
  type: 'Navigation/RESET',
  key: null,
  index: 0,
  actions: [{
    type: 'Navigation/NAVIGATE',
    routeName: 'LoginNavigators',
    action: {
      type: 'Navigation/NAVIGATE',
      key: 'Login',
    }
  }]
})
