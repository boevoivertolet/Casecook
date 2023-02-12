const profileReducer = (state: any, action: any): any => {
	switch (action.type) {
		case 'ADD-POST':
			return { ...state }
		default:
			return { ...state }
	}
}

export default profileReducer
