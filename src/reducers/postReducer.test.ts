import postReducer, {addPostAC, deletePostAC} from "./postReducer";

let state = {
    postData: [
        {postId: 1, message: '1'},
        {postId: 2, message: '2'},
        {postId: 3, message: '3'},
        {postId: 4, message: '4'},
    ],
    newPostText: ''
}


it('new post should be added', () => {
    //test data
    let action = addPostAC('hi')

    //action

    let newState = postReducer(state, action);

    // expectation

    expect(newState.postData.length).toBe(5)



})
it('message of new post should be correct', () => {
    //test data
    let action = addPostAC('hi')

    //action

    let newState = postReducer(state, action);

    // expectation


    expect(newState.postData[0].message).toBe('hi')


})
it('after deleting length of messages should be correct', () => {
    //test data
    let action = deletePostAC(3)

    //action

    let newState = postReducer(state, action);

    // expectation


    expect(newState.postData.length).toBe(3)


})
