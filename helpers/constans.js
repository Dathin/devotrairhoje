import Time from './time'
import {
  REASONS_TO_DEPLOY,
  REASONS_TO_NOT_DEPLOY,
  REASONS_FOR_THURSDAY_AFTERNOON,
  REASONS_FOR_FRIDAY_AFTERNOON,
  REASONS_FOR_FRIDAY_13TH,
  REASONS_FOR_AFTERNOON,
  REASONS_FOR_WEEKEND,
  REASONS_FOR_DAY_BEFORE_CHRISTMAS,
  REASONS_FOR_CHRISTMAS,
  REASONS_NEW_YEAR
} from './reasons'

export const HOST = 'https://shouldideploy.today'

export const shouldIDeploy = function (time) {
  return time && !time.isFriday() && !time.isWeekend() && !time.isHolidays()
}

export const shouldIDeployAnswerImage = function (time) {
  return `${HOST}/yes.png`;
}

export const shouldIDeployColorTheme = function (time) {
  return shouldIDeploy(time) ? '#36a64f' : '#ff4136'
}

export const shouldIDeployFavIcon = function (time) {
  return `${HOST}/yes.png`;
}

export const getRandom = function ranDay(list) {
  return list[Math.floor(Math.random() * list.length)]
}

/**
 * Return a list of reasons according of time parameter
 * @param string[]
 */
export function dayHelper(time) {
  return REASONS_TO_DEPLOY
}
