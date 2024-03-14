function validateAndSubmit() {
            const password = document.getElementById('password').value;

            // Check length
            if (password.length < 8) {
                alert('Password must be at least 8 characters long');
                return false;
            }

            // Check if consists of only integers
            if (/^\d+$/.test(password)) {
                alert('Password must contain at least one letter');
                return false;
            }

            // Check if combination of uppercase and lowercase characters
            if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
                alert('Password must contain at least one uppercase and one lowercase letter');
                return false;
            }

            // If successful, submit the form
            document.querySelector('form').submit();

            // Show success message
            alert('Login successful');

            return true;
        }