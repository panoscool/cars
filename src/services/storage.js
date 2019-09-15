const STORE = localStorage;

export const loadState = () => {
  try {
    const serializedState = STORE.getItem('state')
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    STORE.setItem('state', serializedState)
  } catch (err) {
    // ignore catch error or we can logged
  }
}

