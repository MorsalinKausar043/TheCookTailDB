const inputData = document.getElementById("inputData");
const showMultiData = document.getElementById("ShowMultiData");
const showSingle = document.getElementById("showSingle");

// click event -------------=>

document.getElementById("clickBtn").addEventListener("click", async () => {
    try
    {
        if (inputData.value === "")
        {
            alert("Please Fill the input Box!")
        } else
        {
            showMultiData.innerHTML = "";
            showSingle.textContent = "";
            const getInputVal = inputData.value[0].toUpperCase() + inputData.value.slice(1).toLowerCase();
            const fetchData = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${getInputVal}`)).json();
            fetchData.drinks === null ? alert("Data Not Found") : fetchData.drinks.forEach((crrElm) => getSearchData(crrElm));
        }
        inputData.value = "";
    }
    catch (error)
    {
        console.log(error)
    }
});

// show multiData --------------=>

const getSearchData = (searchData) => {
    const { idDrink, strDrinkThumb, strDrink } = searchData;
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card text-light bg-dark text-center h-100">
                <img onClick="imgClickData('${idDrink}')" src="${strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h6 class="fw-bold">${strDrink}</h6>
            </div>
        </div>
    `;
    showMultiData.appendChild(div)
};

// show showMultiData img click singledata ------=>

const imgClickData = async (idData) => {
    try
    {
        const fetchData = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idData}`)).json();
        getSingleData(fetchData.drinks[0]);
    }
    catch (error)
    {
        console.log(error)
    }
};

// get showSingle data ---------->

const getSingleData = (singleDataVal) => {
    const { strDrinkThumb, strDrink, strInstructions, strCategory } = singleDataVal;
    showSingle.textContent = "";
    const div = document.createElement("div");
    div.classList.add("row");
    div.innerHTML = `
        <div class="col-md-5">
        <img src="${strDrinkThumb}" style="width: 100%; height: 220px;" class=" rounded-start" alt="...">
        </div>
        <div class="col-md-7">
            <div class="card-body">
            <h5 class="card-title">${strDrink}</h5>
            <p class="card-text">${strInstructions.slice(0,120)}</p>
            <p class="card-text"><small class="text-muted">Category : ${strCategory}</small></p>
            </div>
        </div>
    `;
    showSingle.appendChild(div);
};

// event used FUNCTION -----------=>

const randomData = async (eventArguVal="a") => {
    try
    {
        showMultiData.innerHTML = "";
        showSingle.textContent = "";
        const fetchData = await (await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${eventArguVal}`)).json();
        fetchData.drinks.map((crrElm) => getSearchData(crrElm));
        
    }
    catch (error)
    {
       console.log(error); 
    }
};

// USE EVENT CLICK -----------=>

randomData();
const ClickA = () => randomData("a");
const ClickB = () => randomData("b");
const ClickC = () => randomData("c");
const ClickD = () => randomData("d");
const ClickE = () => randomData("e");
const ClickF = () => randomData("f");
const ClickG = () => randomData("g");
const ClickH = () => randomData("h");
const ClickI = () => randomData("i");
const ClickJ = () => randomData("j");
const ClickK = () => randomData("k");
const ClickL = () => randomData("l");
const ClickM = () => randomData("m");
const ClickN = () => randomData("n");
const ClickO = () => randomData("o");
const ClickP = () => randomData("p");
const ClickQ = () => randomData("q");
const ClickR = () => randomData("r");
const ClickS = () => randomData("s");
const ClickT = () => randomData("t");
const ClickU = () => randomData("u");
const ClickV = () => randomData("v");
const ClickW = () => randomData("w");
const ClickX = () => randomData("x");
const ClickY = () => randomData("y");
const ClickZ = () => randomData("z");

