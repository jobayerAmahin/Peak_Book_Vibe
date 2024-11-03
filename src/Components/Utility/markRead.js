const getLocalData=()=>{
    const mainArray=localStorage.getItem('markRead')
    if(mainArray){
        const stringifiedData=JSON.parse(mainArray)
        return stringifiedData
    }
    return []
}

const addToLocalStorage=(id)=>{
    const localArray=getLocalData()
    if(localArray.includes(id)){
        alert(`${id} is alread exist`)
    }
    else{
        localArray.push(id)
        const stringifiedArray=JSON.stringify(localArray)
        localStorage.setItem('markRead',stringifiedArray)
    }
}

export {addToLocalStorage}