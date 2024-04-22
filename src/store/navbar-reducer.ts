const initialState:NavbarType = {
    onlineFriendsData: [
        {id: 1, name: 'Serg Sergeev', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcK1_fGqbqbwQS6kn7NajMPCTEAfz9K52yxg&usqp=CAU'},
        {id: 2, name: 'Elena Elenova', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLn3tuyxUh6B93ao0WlTikMvolJ_LdgvTXrA&usqp=CAU'},
        {id: 3, name: 'Leon Leonov', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7Xlf0H7Tyx7iUKWylGTC01blhe1ILbMnyA&usqp=CAU'},
    ]
}

//reducer
export function navbarReducer(navbar:NavbarType = initialState, action:any):NavbarType {
    return navbar
}

//types
export type OnlineFriendType = {id:number, name:string, ava:string}
export type NavbarType = {onlineFriendsData:Array<OnlineFriendType>}