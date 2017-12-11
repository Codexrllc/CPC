/*
        Chinese Personalized Colors - A tone colorizer
        Copyright (C) 2017 Andrew Alexander
        ---

        Originally based on Synesthete
        Copyright (C) 2015 Adam, lastname unknown
        https://chrome.google.com/webstore/detail/synesthetize/ldljgghnflfphlnpneghciodeehilana
 */

(function () {

    function save_options() {
        chrome.storage.sync.set({
            'tone_1': document.getElementById('tone_1').value,
            'tone_2': document.getElementById('tone_2').value,
            'tone_3': document.getElementById('tone_3').value,
            'tone_4': document.getElementById('tone_4').value,
            'tone_5': document.getElementById('tone_5').value
        }, function () {
            var status = document.getElementById('status');
            status.textContent = 'Options saved.';
        });
    }

    function restore_options() {
        chrome.storage.sync.get(default_colors(), function (items) {
            document.getElementById('tone_1').value = items.tone_1;
            document.getElementById('tone_2').value = items.tone_2;
            document.getElementById('tone_3').value = items.tone_3;
            document.getElementById('tone_4').value = items.tone_4;
            document.getElementById('tone_5').value = items.tone_5;
        });

    }

    function default_colors() {
        return {
            tone_1: '#FF0000',
            tone_2: '#ffa500',
            tone_3: '#00b300',
            tone_4: '#1795e8',
            tone_5: '#808080'
        };
    }

    function default_options() {
        var default_colors_obj = default_colors();
        document.getElementById('tone_1').value = default_colors_obj['tone_1'];
        document.getElementById('tone_2').value = default_colors_obj['tone_2'];
        document.getElementById('tone_3').value = default_colors_obj['tone_3'];
        document.getElementById('tone_4').value = default_colors_obj['tone_4'];
        document.getElementById('tone_5').value = default_colors_obj['tone_5'];

        chrome.storage.sync.set(default_colors());

    }

    function getElementsArray() {
        return ['tone_1', 'tone_2', 'tone_3', 'tone_4', 'tone_5'];
    }

    document.addEventListener('DOMContentLoaded', restore_options);
    document.getElementById('resetButton').addEventListener("click", default_options);
    var elementsArray = getElementsArray();
    elementsArray.forEach(function (elem) {
        document.getElementById(elem).addEventListener("input", save_options);
    });
})();