export const startup = state => state;

export const startupSuccess = state => state.merge({ booted: true });
