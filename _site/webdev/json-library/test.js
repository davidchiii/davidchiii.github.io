async function fetchData() {
    try{
        const response = await fetch('./data.json');
        const data = await response.json();
        return data;
    }
    catch (error){
        console.error("error with data:", error)
        return []
    }
}

// console.log(fetchData())

function fetchdata2() {
    try {
        fetch('./data.json')
            .then((response) => response.json())
            .then((json) => console.log(json))
    }
    catch (error) {
        console.error('error with data', error)
        return []
    }
}

console.log(fetchdata2())