import * as actions from '../../js/actions/'
import * as types from '../../js/constants/action.types'

// Describe the action tests
describe('actions', () => {

  it('Creates an action to set the game setting State', () => {
    const val = 'Hard'
    const expectedAction = {
      type: types.UPDATE_SETTINGS,
      val
    }
    // Run the test on the action
    expect(actions.updateSetting(val)).toEqual(expectedAction)
  })


  it('Creates an action to set the users details for the game in the store', () => {
    const details = {
      username:'john',
      userTime:'00:23:24',
      userMoves:10,
    };
    const expectedAction = {
      type: types.SAVE_SCORE,
      userdetails:details
    }
    // Run the test on the action
    expect(actions.saveScore(details)).toEqual(expectedAction)
  })


})
