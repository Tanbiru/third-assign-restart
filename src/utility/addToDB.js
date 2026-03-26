const getStoredApp = () => {

    const storedAppSTR = localStorage.getItem("appList")

    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR)
        return storedAppData
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {

    const storedAppData = getStoredApp();

    if (storedAppData.includes(id)) {
        console.log("hello");
        alert("Already Downloaded")
    }
    else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("appList",data)

    }
}

export { addToStoredDB, getStoredApp }