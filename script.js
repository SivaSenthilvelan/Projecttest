// Handle Create Prescription
function createPrescription() {
    alert("Prescription creation feature is under development!");
  }
  
  // Handle SOS Button
  function sendSOS() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
  
        alert(`SOS Alert Sent! Location: ${locationLink}`);
      },
      (error) => {
        alert("Unable to fetch location. Please try again.");
        console.error(error);
      }
    );
  }
  
  // Handle First Aid
  function showFirstAid() {
    alert("First Aid Tips:\n1. Clean wounds with clean water.\n2. Apply pressure to stop bleeding.\n3. Immobilize broken bones.\nFor more details, check an online guide!");
  }
  
  // Handle CPR Assistance
  function startCPR() {
    alert("CPR Steps:\n1. Check responsiveness.\n2. Call emergency services.\n3. Start chest compressions: 30 compressions followed by 2 rescue breaths.\nContinue until help arrives.");
  }
  