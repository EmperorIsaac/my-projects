    const form = document.getElementById('booking-form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const location = form.location.value.trim();
      const landmark = form.landmark.value.trim();
      const time = form.time.value;
      const destination = form.destination.value.trim();
      if (!location || !landmark || !time || !destination) {
        alert('Please fill out all required fields.');
        return;
      }
      
      alert(`Booking successful!\nPickup Location: ${location}\nNearest Landmark: ${landmark}\nPickup Time: ${new Date(time).toLocaleString()}\nDestination: ${destination}`);
      form.reset();
    });