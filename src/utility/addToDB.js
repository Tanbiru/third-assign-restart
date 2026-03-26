const getStoredApp = () => {
    const storedAppSTR = localStorage.getItem("appList");
    if (storedAppSTR) {
       
        return JSON.parse(storedAppSTR).map(id => parseInt(id));
    }
    return [];
}



const addToStoredDB = (id) => {
    
    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
        alert("Already Downloaded");
        return false; 
    } else {
        storedAppData.push(id);
        localStorage.setItem("appList", JSON.stringify(storedAppData));
        return true; 
    }
}

const removeFromStoredDB = (id) => {
    const storedAppData = getStoredApp();
    const updatedData = storedAppData.filter(appId => appId !== id);
    localStorage.setItem("appList", JSON.stringify(updatedData));
}

export { addToStoredDB, getStoredApp, removeFromStoredDB };