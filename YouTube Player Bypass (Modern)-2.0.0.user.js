// ==UserScript==
// @name         YouTube Player Bypass (Modern)
// @namespace    https://tampermonkey.net/
// @version      2.0.0
// @author       SoHeil (updated by bandzcoderz)
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
    'use strict';

    const CONFIG = {
        PLAYER_SELECTORS: [
            '#player',
            '#movie_player',
            'ytd-player'
        ],
        RETRY_ATTEMPTS: 10,
        RETRY_DELAY: 800,
        DEFAULT_QUALITY: 'hd1080',
        IFRAME_STYLE: {
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '12px'
        }
    };

    /* ---------------------------------------------------------
       Utilities
    --------------------------------------------------------- */

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    function getVideoId() {
        try {
            return new URL(location.href).searchParams.get('v');
        } catch {
            return null;
        }
    }

    function findPlayerContainer() {
        for (const sel of CONFIG.PLAYER_SELECTORS) {
            const el = document.querySelector(sel);
            if (el) return el;
        }
        return null;
    }

    function stopNativePlayback() {
        document.querySelectorAll('video, audio').forEach(el => {
            try {
                el.pause();
                el.src = '';
                el.load();
                el.remove();
            } catch {}
        });
    }

    function createIframe(videoId) {
        const iframe = document.createElement('iframe');

        const params = new URLSearchParams({
            autoplay: '1',
            rel: '0',
            modestbranding: '1',
            enablejsapi: '1',
            controls: '1',
            fs: '1',
            origin: location.origin
        });

        iframe.src = `https://www.youtube.com/embed/${videoId}?${params}`;
        iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';

        Object.assign(iframe.style, CONFIG.IFRAME_STYLE);

        return iframe;
    }

    /* ---------------------------------------------------------
       Core logic
    --------------------------------------------------------- */

    async function replacePlayer(attempts = CONFIG.RETRY_ATTEMPTS) {
        const videoId = getVideoId();
        if (!videoId) return;

        let container = findPlayerContainer();

        if (!container && attempts > 0) {
            await sleep(CONFIG.RETRY_DELAY);
            return replacePlayer(attempts - 1);
        }

        if (!container) {
            console.warn('❌ Player container not found');
            return;
        }

        try {
            stopNativePlayback();

            container.innerHTML = '';
            container.appendChild(createIframe(videoId));

            console.log('✅ YouTube player replaced');
        } catch (err) {
            console.error('❌ Failed to replace player', err);
        }
    }

    /* ---------------------------------------------------------
       SPA navigation handling
    --------------------------------------------------------- */

    function hookNavigation() {
        const handler = () => replacePlayer();

        window.addEventListener('yt-navigate-finish', handler);
        window.addEventListener('yt-page-data-updated', handler);

        // Fallback (YouTube sometimes skips events)
        let lastUrl = location.href;
        setInterval(() => {
            if (location.href !== lastUrl) {
                lastUrl = location.href;
                replacePlayer();
            }
        }, 1000);
    }

    /* ---------------------------------------------------------
       Init
    --------------------------------------------------------- */

    function init() {
        console.log('🚀 YouTube Player Bypass (Modern) loaded');
        hookNavigation();
        replacePlayer();
    }

    init();
})();
