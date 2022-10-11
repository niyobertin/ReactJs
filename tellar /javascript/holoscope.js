const getHoloscope = () => {
    const userName = document.getElementById("yourname").value;
    const day = parseInt(document.getElementById("days").value);
    const month = parseInt(document.getElementById("months").value);
    const birth_year = parseInt(document.getElementById("birthYear").value);
    const holoscopeSign = document.getElementById("sign");
    const holoscopeAnimalSign = document.getElementById("animal");
    const daterange = document.getElementById("daterange");
    const userYears = document.getElementById("yearOfBirth");
    const greating = document.getElementById("userholoscope");
    const currentYear = new Date().getFullYear();
    const userYear = currentYear - birth_year;
    let holoscope = 0

    if ((day >= 21 && month === 3) || (day <= 19 && month === 4)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>ARIES</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Montain Sheep</b>`
        daterange.innerHTML = `You  You have born between  born between : 21/03 and 19/04`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 20 && month === 4) || (day <= 20 && month === 5)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>TARUS</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Bull</b>`
        daterange.innerHTML = `You  You have born between <b> 20/04 and 20/05`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 21 && month === 5) || (day <= 21 && month === 6)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>GERMINI</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Deer</b>`
        daterange.innerHTML = `You  You have born between <b> 21/05 and 21/06`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 22 && month === 6) || (day <= 22 && month === 7)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>CANCER</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Crab or Elephent OR Rabbit</b>`
        daterange.innerHTML = `You  You have born between <b> 22/03 and 22/04`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 23 && month === 7) || (day <= 23 && month === 8)) {

        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>LEO</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>The Lion</b>`
        daterange.innerHTML = `You  You have born between  born  :<b> 23/07 and 23/08`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 24 && month === 8) || (day <= 22 && month === 9)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>VIRUGO</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Bees</b>`
        daterange.innerHTML = `You  You have born between <b> 24/08 and 22/09`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 24 && month === 89) || (day <= 22 && month === 10)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>LOBRA</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Grey wolfe</b>`
        daterange.innerHTML = `You  You have born between <b> 24/09 and 22/10`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 23 && month === 10) || (day <= 21 && month === 11)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>SCROPION</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Scropion</b>`
        daterange.innerHTML = `You  You have born between <b> 23/10 and 21/11`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 22 && month === 11) || (day <= 21 && month === 12)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>SAGUTTAEIUS</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Seal</b>`
        daterange.innerHTML = `You  You have born between <b> 22/11 and 21/12`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 22 && month === 12) || (day <= 20 && month === 1)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>CAPRICORN</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Goat or Crocodile</b>`
        daterange.innerHTML = `You have born between <b> 22/12 and 20/01`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else if ((day >= 21 && month === 1) || (day <= 19 && month === 2)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>AQUARIUS</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Dolphin znd Zebra</b>`
        daterange.innerHTML = `You  You have born between <b> 21/01 and 19/02`;
        userYears.innerHTML = `Your age :<b> ${userYear}`;
    } else if ((day >= 20 && month === 2) || (day <= 20 && month === 3)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your holoscope</h3>`;
        holoscopeSign.innerHTML = `Holoscope sign : <b>PISES</b>`;
        holoscopeAnimalSign.innerHTML = `Your animal sign : <b>Fish and Camereon</b>`
        daterange.innerHTML = `You  You have born between <b> 20/02 and 20/03`;
        userYears.innerHTML = `Your <b> ${userYear}`;
    } else {
        greating.innerHTML = ``;
        holoscopeSign.style.color = "red";
        holoscopeSign.innerHTML = `Providede birth date is incorrect, <i>Try again</i>`;
    }
    // if ((day >= 21 && month === 3) || (day <= 19 && month === 4)) {
    //     console.log("your holoscope sign is ARIES and animal is SHEEP");
    // } else {
    //     console.log('fail')
    // }
}

