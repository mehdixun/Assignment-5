// Heart count section 
const hearts = document.querySelectorAll('.heart');
let count = 0;
for(const heart of hearts){
    heart.addEventListener('click', function(event){
        event.preventDefault()
        // console.log('click heart')
        
        const displayHeart = document.getElementById('display-heart');
        count = count + 1;
        displayHeart.textContent = count
    })
}

// Call section
let coins = 100;

const callButtons = document.querySelectorAll('.btn-call');
const coinDisplay = document.getElementById('coin-display');
const history = document.getElementById('call-history');

for (const btn of callButtons){
    btn.addEventListener('click', function(event){
        event.preventDefault()
        // console.log("Calling")

        const container = btn.closest('.card');
        const serviceName = container.querySelector('.service-name').textContent;
        const serviceNumber = container.querySelector('.service-number').textContent;

        if(coins < 20){
            alert('You don,t have enough coins. You need at least 20 coins to make the call.')
            return;
        }
        coins = coins - 20;
        coinDisplay.textContent = coins;

        alert(`Calling ${serviceName} - ${serviceNumber}`);

        
        const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
        const div = document.createElement('div')
        div.classList.add('bg-red')
        div.innerHTML = `
        <div class="bg-gray-100 rounded-xl p-2 mt-2 flex gap-5">
        <div
                        <h3>${serviceName}</h3>
                    <p>${serviceNumber}</p>
                    </div>
                    <div>${date}</div>
        </div>
        `

        history.appendChild(div)
    })
}

// Clear history button
const callHistory = document.getElementById('call-history');
document.getElementById('btn-clr').addEventListener('click', function(event){
    // console.log('clear')

    callHistory.innerHTML = '';
})


// Challenge part
let copyCount = 0;

const btnCopy = document.querySelectorAll('.btn-copy')
const btnCopyDisplay = document.getElementById('btn-copy-display');

for(const btn of btnCopy){
    btn.addEventListener('click', async function(event){
        event.preventDefault()
        // console.log('copy')

        const card = btn.closest('.card') ;
        const serviceNumber = card.querySelector('.service-number').textContent

        try{
            await navigator.clipboard.writeText(serviceNumber);
            alert(`The number has been copied : ${serviceNumber}`)
        

        copyCount += 1;
        btnCopyDisplay.textContent = copyCount;
        }

        catch(err) {
            alert('Failed to copy')
            console.log(err)
        }
    })
}
