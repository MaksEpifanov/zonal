export const countTimerAction = () => ({
  type: 'COUNT_TIMER_POMODORO',
});

export const countLapAction = () => ({
  type: 'COUNT_LAP_POMODORO',
});

export const toggleTimerStatusAction = () => ({
  type: 'TOGGLE_TIMER_STATUS_POMODORO',
});

export const changeTimerModeAction = (mode) => ({
  type: 'CHANGE_TIMER_MODE_POMODORO',
  payload: mode,
});

export const changeSettingsFocusTimeAction = (time) => ({
  type: 'CHANGE_SETTINGS_FOCUS_TIME',
  payload: time,
});

export const changeSettingsShortBreakTimeAction = (time) => ({
  type: 'CHANGE_SETTINGS_SHORT_BREAK',
  payload: time,
});

export const changeSettingsLongBreakTimeAction = (time) => ({
  type: 'CHANGE_SETTINGS_LONG_BREAK',
  payload: time,
});

export const toggleSettingsSoundAction = (time) => ({
  type: 'TOGGLE_SETTINGS_SOUND',
  payload: time,
});

// 'focus', 'short-break', 'long-break'
export const resetTimerAction = () => ({
  type: 'RESET_TIMER',
});
