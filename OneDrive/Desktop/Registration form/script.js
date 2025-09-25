$(function () {
    const $form = $('#regForm');
    const $password = $('#password');
    const $confirm = $('#confirmPassword');
    const $phone = $('#phone');
  
    // normalize phone: remove spaces, dashes, parentheses
    function normalizePhone(val) {
      return val.replace(/[()\s-]+/g, '');
    }
  
    function phoneIsValid(normalizedValue) {
      const re = /^\+?\d{7,15}$/;
      return re.test(normalizedValue);
    }
  
    // Live password match feedback (uses Bootstrap's is-valid / is-invalid)
    function checkPwMatch() {
      const pw = $password.val();
      const cpw = $confirm.val();
  
      if (cpw.length === 0) {
        $confirm.removeClass('is-valid is-invalid');
        return;
      }
      if (pw === cpw) {
        $confirm.addClass('is-valid').removeClass('is-invalid');
      } else {
        $confirm.addClass('is-invalid').removeClass('is-valid');
      }
    }
  
    $password.on('input', checkPwMatch);
    $confirm.on('input', checkPwMatch);
  
    // Submit handler
    $form.on('submit', function (ev) {
      // Clear custom validity messages (use DOM methods)
      $confirm[0].setCustomValidity('');
      $phone[0].setCustomValidity('');
  
      
      if (!$form[0].checkValidity()) {
        ev.preventDefault();
        ev.stopPropagation();
        $form.addClass('was-validated');
        return;
      }
  
      // Password match (custom)
      if ($password.val() !== $confirm.val()) {
        $confirm[0].setCustomValidity('Passwords do not match.');
        ev.preventDefault();
        ev.stopPropagation();
        $form.addClass('was-validated');
        return;
      } else {
        $confirm[0].setCustomValidity('');
      }
  
      
      const rawPhone = $phone.val().trim();
      const normalizedPhone = normalizePhone(rawPhone);
      if (!phoneIsValid(normalizedPhone)) {
        $phone[0].setCustomValidity('Invalid phone format.');
        ev.preventDefault();
        ev.stopPropagation();
        $form.addClass('was-validated');
        return;
      } else {
        $phone[0].setCustomValidity('');
        
        $phone.val(normalizedPhone);
      }
  
      
      $form.removeClass('was-validated');
    
      ev.preventDefault();
      alert('Form validated successfully! (Replace this with real submit logic)');
     
    });
  });