export function handlerAddToBookmarks(id){
    if(id){
        let arrayIds = JSON.parse(localStorage.getItem('id')) 
        let ids = new Set(arrayIds).add(id)
        localStorage.setItem('id', JSON.stringify([...ids]))
    }
    
}
export function getItemsFromLocalStorage(){
    if(localStorage.getItem('id')){
        return JSON.parse(localStorage.getItem('id'))
    }else{
        return null;
    }
    // console.log(arr)

}