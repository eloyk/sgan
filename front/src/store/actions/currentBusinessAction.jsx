import TYPES from "store/types"

export function currentBusinessChange(payload) {
  return {
    type: TYPES.CURRENT_BUSINESS_CHANGE,
    payload: payload
  }
}
