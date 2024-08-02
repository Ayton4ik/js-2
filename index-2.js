const refs = {
    notification: document.querySelector('.js-alert'),
    };
    
    // const notification = document.querySelector('.js-alert')

    refs.notification.addEventListener('click', onNotificationClick);
    
    showNotification();

    const timeoutId = setTimeout(hideNotification, 3000)
    
    /*
    * Функції
    */
    function onNotificationClick() {
    hideNotification();
    clearTimeout(timeoutId);
    }
    
    function showNotification() {
    refs.notification.classList.add('is-visible');
    
    }
    
    function hideNotification() {
    refs.notification.classList.remove('is-visible');
    }


    setTimeout(() => {
        confirm('Підпишіться');
    }, 5000)