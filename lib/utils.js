export function handlerAddToBookmarks(id){
    let arrayIds = JSON.parse(localStorage.getItem('id')) 
    let ids = new Set(arrayIds).add(id)
    localStorage.setItem('id', JSON.stringify([...ids]))
}
export function getItemsFromLocalStorage(){
    return JSON.parse(localStorage.getItem('id'))
    // console.log(arr)

}