const axios = require('axios')
const {apiMethodList} = require('./helper')

class RetroachievementsApi {

  /**
   * @description - Constructor method initialize user and api key
   * @author Welington Monteiro
   * @param user - User name
   * @param apiKey - Api key
   * @example const Retro = new RetroAchievement(userName, 'api_key_123456')
   */
  constructor(user, apiKey) {
    this.urlBase = 'https://retroachievements.org'
    this.user = user
    this.apiKey = apiKey
    this.apiPages = apiMethodList()
  }

  /**
   * @description Mount request api retro achievements
   * @author Welington Monteiro
   * @param { String|method } page - Name of method call api
   * @param { String|params } urlOptions - Params optional url
   * @return {Promise<unknown>}
   */
  async getApi(page, urlOptions = '') {
    return new Promise((resolve, reject) => {
      let url = `${this.urlBase}/API/${page}?z=${this.user}&y=${this.apiKey}${urlOptions}`
      axios({url}).then(resolve).catch(reject)
    })
  }

  /**
   * @description Get top Ten users
   * @author Welington Monteiro
   * @return {Promise<unknown>}
   * @example .getTopTenUsers()
   */
  async getTopTenUsers() {
    return this.getApi(this.apiPages.getTopTenUsers)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @return {Promise<unknown>}
   */
  async getConsoleIDs() {
    return this.getApi(this.apiPages.getConsoleIDs)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @param consoleId
   * @param flag
   * @return {Promise<unknown>}
   */
  async getGameList({consoleId, flag = false} = {}) {
    return this.getApi(this.apiPages.getGameList, `&i=${consoleId}&f=${flag}`)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @param gameId
   * @return {Promise<unknown>}
   */
  async getGameInfo({gameId} = {}) {
    return this.getApi(this.apiPages.getGameInfo, `&i=${gameId}`)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @param gameId
   * @return {Promise<unknown>}
   */
  async getGameInfoExtended({gameId} = {}) {
    return this.getApi(this.apiPages.getGameInfoExtended, `&i=${gameId}`)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @param count
   * @param offset
   * @return {Promise<unknown>}
   */
  async getFeedFor({user = this.user, count = 1, offset = 0} = {}) {
    return this.getApi(this.apiPages.getFeedFor, `&u=${user}&c=${count}&o=${offset}`)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @return {Promise<unknown>}
   */
  async getUserRankAndScore({user = this.user} = {}) {
    return this.getApi(this.apiPages.getUserRankAndScore, `&u=${user}`)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @param count
   * @param offset
   * @return {Promise<unknown>}
   */
  async getUserRecentlyPlayedGames({user = this.user, count = 1, offset = 0} = {}) {
    return this.getApi(this.apiPages.getUserRecentlyPlayedGames, `&u=${user}&c=${count}&o=${offset}`)
  }

  /**
   * @description User summary, and number of most recently played games
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @param { String|number } numRecentGames - Number of most recently
   * @return {Promise<unknown>}
   * @example .getUserSummary({user: 'Scott', numRecentGames: 3})
   */
  async getUserSummary({user = this.user, numRecentGames} = {}) {
    return this.getApi(this.apiPages.getUserSummary, `&u=${user}&g=${numRecentGames}&a=5`)
  }

  /**
   * @description Complete summary of a {user} progress in game ID
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @param { String } gameId - Game Id
   * @return {Promise<unknown>}
   * @example .getGameInfoAndUserProgress({ user: 'Scott', gameId: 3 })
   */
  async getGameInfoAndUserProgress({user = this.user, gameId} = {}) {
    return this.getApi(this.apiPages.getGameInfoAndUserProgress, `&u=${user}&g=${gameId}`)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @param { String } gameId - Game Id
   * @return {Promise<unknown>}
   * @example .getGameRating({ gameId: 3 })
   */
  async getGameRating({gameId} = {}) {
    return this.getApi(this.apiPages.getGameRating, `&i=${gameId}`)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @param { String } gameId - Game Id
   * @return {Promise<unknown>}
   * @example .getUserGameRankAndScore({ user: 'Scott', gameId: 3 })
   */
  async getUserGameRankAndScore({user = this.user, gameId} = {}) {
    return this.getApi(this.apiPages.getUserGameRankAndScore, `&u=${user}&g=${gameId}`)
  }

  /**
   * @description
   * @author Welington Monteiro
   * @param { String } gameId - Game Id
   * @return {Promise<unknown>}
   * @example .getGameRankAndScore({ gameId: 3 })
   */
  async getGameRankAndScore({gameId} = {}) {
    return this.getApi(this.apiPages.getGameRankAndScore, `&g=${gameId}`)
  }

  /**
   * @description Get Achievements count by game id
   * @author Welington Monteiro
   * @param { String } gameId - Game Id
   * @return {Promise<unknown>}
   * @example .getAchievementCount({gameId: 3})
   */
  async getAchievementCount({gameId} = {}) {
    return this.getApi(this.apiPages.getAchievementCount, `&i=${gameId}`)
  }

  /**
   * @description Get Achievements unlocks
   * @author Welington Monteiro
   * @param { String } achievementId - Achievement Id
   * @return {Promise<unknown>}
   * @example .getAchievementUnlocks({achievementId: 385})
   */
  async getAchievementUnlocks({achievementId} = {}) {
    return this.getApi(this.apiPages.getAchievementUnlocks, `&a=${achievementId}`)
  }

  /**
   * @description Get Achievements Earned by {user} in between dates
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @param {String|Date} dateStart - Start date
   * @param {String|Date} dateEnd - End date
   * @return {Promise<unknown>}
   * @example .getAchievementsEarnedBetween({user: 'Scott', dateStart: '2013-12-31 20:00:00', dateEnd: '2014-01-01 04:00:00'})
   */
  async getAchievementsEarnedBetween({user = this.user, dateStart, dateEnd} = {}) {
    return this.getApi(this.apiPages.getAchievementsEarnedBetween, `&u=${user}&f=${dateStart}&t=${dateEnd}`)
  }

  /**
   * @description Get Games Completed by User
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @return {Promise<unknown>}
   * @example .getUserCompletedGames({user: 'Scott'});
   */
  async getUserCompletedGames({user = this.user} = {}) {
    return this.getApi(this.apiPages.getUserCompletedGames, `&u=${user}`)
  }

  /**
   * @description Get Games Completed by User
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @return {Promise<unknown>}
   * @example .getUserCompletedGames2({user: 'Scott'});
   */
  async getUserCompletedGames2({user = this.user} = {}) {
    return this.getApi(this.apiPages.getUserCompletedGames2, `&u=${user}`)
  }

  /**
   * @description get User progress by list of ids
   * @author Welington Monteiro
   * @param { String } [user] - User search focus
   * @param { String } gameIds - Array of game ids
   * @example .getUserProgress( {user: 'Scott', gameIds: '2, 3, 75' )
   * @return {Promise<unknown>}
   */
  async getUserProgress({user = this.user, gameIds = ''} = {}) {
    gameIds = gameIds.replace('/\s+/', '')    //	Remove all whitespace
    return this.getApi(this.apiPages.getUserProgress, `&u=${user}&i=${gameIds}`)
  }
}

module.exports = RetroachievementsApi
