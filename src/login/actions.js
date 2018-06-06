
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
      key: 'DashboardNavigators',
      actions: [{
        type: 'Navigation/NAVIGATE',
        routeName: 'Dashboard'
      }]
    }
  }]
})
