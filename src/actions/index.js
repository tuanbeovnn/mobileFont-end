import * as types from './../contants/ActionType';
export const actSearch = (search) => {
	return {
		type : types.CHANGE_SEARCH,
		search
		
	}
}
