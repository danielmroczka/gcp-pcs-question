(function() {
    const lastVisited = localStorage.getItem('gcp_exam_last_visited');
    const defaultPage = 'q_001.html';

    // Przekieruj do ostatniej strony lub do domyślnej
    window.location.href = lastVisited ? lastVisited : defaultPage;
})();