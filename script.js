// ===== FREE QUOTE FORM SUBMISSION =====
    // Function: handleQuoteSubmit()
    // Purpose: Capture the visitor's inquiry and guide them to a thank-you state
    // Triggers: Contact form submit action
    document.getElementById('quoteForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const name = data.get('full_name') || '';
      const destination = data.get('destination') || '';
      alert(`Terima kasih, ${name}! We have received your request for ${destination}. Our team will contact you soon.`);
      form.reset();
    });