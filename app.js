const numOne = document.querySelectorAll('.num1');
const rup = document.querySelector('.rup');

const daily = document.querySelector('.day')
const weekly = document.querySelector('.week');
const monthly = document.querySelector('.month');




let jsonData;
fetch('data.json')
    .then(res => res.json())
    .then(data => {

        let output = '';
        
        setData(data, output);
        setDaily(data);
        setWeekly(data);
        setMonthly(data);
    })


const setData = (e, output) => {
    e.forEach(el => {
        output += `
            <div class="mainDiv">
                <div class="inso">
                    <div class="tto">
                        <h4 class="tto">${el.title}</h4>
                        <img src="images/icon-ellipsis.svg" alt="#" class="elip">
                    </div>
                    <h1 class="tto num1">${el.timeframes.daily.current}hrs</h1>
                <p class="tto num2">Last weekly - ${el.timeframes.daily.previous}hrs</p>
            </div>
        </div>
    `
        rup.innerHTML = output;

    });

    let classes = ['one', 'two', 'three', 'four', 'five', 'six']
    let len = classes.length;
    let mainDiv = document.querySelectorAll('.mainDiv');

    for (let c = 0; c < mainDiv.length; c++) {
        mainDiv[c].className += ' ' + classes[c % len];
    }
}


const setDaily = (e) => {
    daily.addEventListener('click', () => {
        output = '';
        e.forEach(el => {
            output += `
                <div class="mainDiv">
                <div class="inso">
                    <div class="tto">
                        <h4 class="tto">${el.title}</h4>
                        <img src="images/icon-ellipsis.svg" alt="#" class="elip">
                    </div>
                    <h1 class="tto num1">${el.timeframes.daily.current}hrs</h1>
                <p class="tto num2">Last weekly - ${el.timeframes.daily.previous}hrs</p>
            </div>
        </div>
            `
            rup.innerHTML = output;
        })
        let classes = ['one', 'two', 'three', 'four', 'five', 'six']
        let len = classes.length;
        let mainDiv = document.querySelectorAll('.mainDiv');

        for (let c = 0; c < mainDiv.length; c++) {
            mainDiv[c].className += ' ' + classes[c % len];
        }
    })
}

const setWeekly = (e) => {
    weekly.addEventListener('click', () => {

        output = '';
        e.forEach(el => {

            output += `
            <div class="mainDiv">
            <div class="inso">
                <div class="tto">
                    <h4 class="tto">${el.title}</h4>
                    <img src="images/icon-ellipsis.svg" alt="#" class="elip">
                </div>
                <h1 class="tto num1">${el.timeframes.weekly.current}hrs</h1>
            <p class="tto num2">Last weekly - ${el.timeframes.weekly.previous}hrs</p>
        </div>
    </div>
        `
            rup.innerHTML = output;

        })
        let classes = ['one', 'two', 'three', 'four', 'five', 'six']
        let len = classes.length;
        let mainDiv = document.querySelectorAll('.mainDiv');

        for (let c = 0; c < mainDiv.length; c++) {
            mainDiv[c].className += ' ' + classes[c % len];
        }
    })
}

const setMonthly = (e) => {
    monthly.addEventListener('click', () => {

        output = '';
        e.forEach(el => {

            output += `
        <div class="mainDiv">
        <div class="inso">
            <div class="tto">
                <h4 class="tto">${el.title}</h4>
                <img src="images/icon-ellipsis.svg" alt="#" class="elip">
            </div>
            <h1 class="tto num1">${el.timeframes.monthly.current}hrs</h1>
        <p class="tto num2">Last weekly - ${el.timeframes.monthly.previous}hrs</p>
    </div>
</div>
    `
            rup.innerHTML = output;

        })
        let classes = ['one', 'two', 'three', 'four', 'five', 'six']
        let len = classes.length;
        let mainDiv = document.querySelectorAll('.mainDiv');

        for (let c = 0; c < mainDiv.length; c++) {
            mainDiv[c].className += ' ' + classes[c % len];
        }
    })
}