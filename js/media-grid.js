/* Multi-image media rows: give each image a flex-grow equal to its aspect
   ratio so widths come out proportional to shape and every image in the row
   lands on the same height — no fixed height, no cropping, no letterboxing. */
(function () {
    function size(img) {
        if (!img.naturalWidth || !img.naturalHeight) return;
        img.style.flexGrow = img.naturalWidth / img.naturalHeight;
    }

    function init() {
        document.querySelectorAll('.media-grid').forEach(function (grid) {
            var media = grid.querySelectorAll('img');
            if (media.length < 2) return; // single-image rows already fill the row

            media.forEach(function (img) {
                if (img.complete) {
                    size(img);
                } else {
                    img.addEventListener('load', function () { size(img); });
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
