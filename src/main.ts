import { getCountry } from './services/getcountry';
import { getGeolocation } from './services/getgeolocation';
import { resizeElementHeight } from './services/resizeelementheight';
import { showMap } from './services/showmap';

const dataIPAddr = document.getElementById('ipaddress')!;
const dataLocation = document.getElementById('location')!;
const dataTimezone = document.getElementById('timezone')!;
const dataISP = document.getElementById('isp')!;
const elementError = document.getElementById('error')!;
const elementMap = document.getElementById('map')!;
const elementsFlag = document.querySelectorAll('.flag')!;

const inputAddr = document.getElementById('ipaddr')!;
const inputButton = document.getElementById('search')!;
// if (!inputAddr || !inputButton)
//   throw new Error('IP Address input or button are missing.');
inputButton.addEventListener('click', updateGeo);
inputAddr.addEventListener('blur', updateGeo);
inputAddr.addEventListener('onpaste', updateGeo);
inputAddr.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    updateGeo();
  }
});

async function updateGeo() {
  clearGeo();
  clearFlags();
  elementError.classList.add('hidden');
  const ipAddr = (inputAddr as HTMLInputElement).value;
  const ipGeo = await getGeolocation(ipAddr);
  if (ipGeo) {
    if (dataIPAddr) dataIPAddr.innerText = ipGeo.ip;
    if (dataLocation)
      dataLocation.innerText = `${ipGeo.location.city}, ${ipGeo.location.region} ${ipGeo.location.postalCode}`;
    if (dataTimezone) dataTimezone.innerText = 'UTC ' + ipGeo.location.timezone;
    if (dataISP) dataISP.innerText = ipGeo.isp;

    resizeElementHeight(elementMap, 300);
    showMap(ipGeo.location.lat, ipGeo.location.lng, ipAddr);

    const countryData = await getCountry(ipGeo.location.country);
    if (countryData) {
      const flagHTML = `<img id='flagsvg' src='${countryData.flagImg}' alt='${countryData.flagAlt}' /><label for='flagsvg'>${countryData.countryName}</label>`;
      for (const flag of elementsFlag) flag.innerHTML = flagHTML;
    }
  }
}

function clearGeo() {
  if (dataIPAddr) dataIPAddr.innerText = '';
  if (dataLocation) dataLocation.innerText = '';
  if (dataTimezone) dataTimezone.innerText = '';
  if (dataISP) dataISP.innerText = '';
}

function clearFlags() {
  for (const flag of elementsFlag) flag.innerHTML = '';
}

export function showError(message: string) {
  elementError.classList.remove('hidden');
  elementError.innerText = message;
}

updateGeo();
