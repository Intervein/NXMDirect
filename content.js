(function() {
    'use strict';

    function injectButtons() {
        if (!window.location.href.includes('/mods/')) return;
        
        const allLinks = document.querySelectorAll('a[href*="DownloadPopUp"]');
        const footer = document.getElementById('rj-footer');

        allLinks.forEach(btn => {
            if (footer && (btn.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_PRECEDING)) return;
            if (btn.href.includes('nmm=1')) return;
            if (btn.classList.contains('mo2-forced-btn')) return;
            
            const container = btn.parentElement;
            if (!container || container.querySelector('.mo2-forced-btn')) return;

            const grandparent = container.parentElement;
            const contextSearch = (grandparent || container).innerHTML;

            if (contextSearch.includes('nmm=1') || 
                contextSearch.includes('icon-nmm') || 
                contextSearch.includes('vortex')) {
                return;
            }

            const managerBtn = document.createElement('a');
            managerBtn.className = "mo2-forced-btn btn inline-flex";
            
            let forcedUrl = btn.href;
            forcedUrl += (forcedUrl.includes('?') ? '&' : '?') + "nmm=1";
            managerBtn.href = forcedUrl;
            managerBtn.innerHTML = "⬇️ NXM Direct"; 
            
            Object.assign(managerBtn.style, {
                marginLeft: '8px', backgroundColor: '#00ad9f', color: 'white',
                padding: '5px 12px', borderRadius: '3px', fontSize: '11px',
                fontWeight: 'bold', textDecoration: 'none', display: 'inline-flex', alignItems: 'center'
            });

            managerBtn.onclick = () => {
                managerBtn.innerHTML = "⌛ Forwarding...";
                managerBtn.style.backgroundColor = "#da8e35";
            };

            btn.insertAdjacentElement('afterend', managerBtn);
        });
    }

    function autoStartDownload() {
        if (!window.location.href.includes('nmm=1')) return;
        const startBtn = document.getElementById('slowDownloadButton') || 
                         document.getElementById('fastDownloadButton') ||
                         document.getElementById('startDownloadButton');

        if (startBtn && !startBtn.dataset.clicked) {
            startBtn.dataset.clicked = "true";
            setTimeout(() => {
                startBtn.click();
                // Native extension close command
                setTimeout(() => { 
                    if (window.history.length === 1) window.close(); 
                }, 4000);
            }, 600);
        }
    }

    setInterval(injectButtons, 2000);
    if (window.location.href.includes('DownloadPopUp') || window.location.href.includes('nmm=1')) {
        setInterval(autoStartDownload, 400);
    }
})();