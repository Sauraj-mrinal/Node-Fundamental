document.addEventListener('DOMContentLoaded', () => {


    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault();

             
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
          
            try {
                 
                const response = await fetch('/api/signup',  
                { 
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password })
                });
                 
                const data = await response.json();
                console.log(data);
                
                alert(data.message || data.error);
            } catch (error) {
                 
                alert('Error: ' + error.message);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
            
                if (!response.ok) {
                    const errorData = await response.text(); // Get the error response as text
                    throw new Error(errorData); // Throw an error with the response text
                }
            
                const data = await response.json();
                alert(data.message || data.error);
                if (response.ok) {
                    // Extract user ID from the response
                    const userId = data.user.id; // Adjust this according to your API response structure
                    
                    // Store user ID in local storage
                    localStorage.setItem('userId', userId);
                  
                  
                  
                  
                  
                  
                    // window.location.href = './expenses.html';
                    // Optionally, you can store other user details as well
                    localStorage.setItem('userName', data.user.name);
                    localStorage.setItem('userEmail', data.user.email);
    
                    alert(`Login successful! User ID stored: ${userId}`);
                    window.location.href = './expenses.html';
                } else {
                    alert(data.error || 'Login failed');
                }
            } catch (error) {
                console.log(error.message)
                alert('Error: ' + error.message);
            }
            
        });
    }
});
