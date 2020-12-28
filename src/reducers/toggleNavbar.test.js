import actionTypes from '../constants/actionTypes'
import reducer from './index'

describe("toggleNavbar Reducer", () => {
    it("TOGGLE_NAVBAR success", () => {
        const state = {}
        const action = {
            type: actionTypes.TOGGLE_NAVBAR
        }
        const results = reducer(state, action)
        expect(results)
            .toEqual({
                navbarIsCollapsed: true
            })
    })
})