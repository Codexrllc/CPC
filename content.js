/*
        Chinese Personalized Colors - A tone colorizer
        Copyright (C) 2017 Andrew Alexander
        ---

        Originally based on Synesthete
        Copyright (C) 2015 Adam Savvas
        https://chrome.google.com/webstore/detail/synesthetize/ldljgghnflfphlnpneghciodeehilana

        ---

        This program is free software; you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation; either version 2 of the License, or
        (at your option) any later version.

        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.

        You should have received a copy of the GNU General Public License
        along with this program; if not, write to the Free Software
        Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

        ---

        Please do not change or remove any of the copyrights or links to web pages
        when modifying any of the files.
 */


(function () {
    if (typeof document.body.innerText.match(/[\u3400-\u9FBF]/g) !== null) {
        document.body.innerText.match(/[\u3400-\u9FBF]/g).forEach(function (char) {
            $("<style type='text/css'> .unhighlight {color:''} </style>").appendTo("head");

            var bod_el = document.getElementsByTagName('body')[0];
            chrome.extension.sendRequest({
                "type": "search",
                "text": char
            },
                    function (char_return) {
                        var regex = '\\[\\w+([0-9]+)\\]';
                        var tone = char_return.data[0][0].match(regex);
                        
                        if (typeof tone[1] !== null) {
                            chrome.storage.sync.get("tone_" + tone[1], function (obj) {
                                var tone_color = Object.values(obj)[0];
                                $('body').highlight(char_return.data[0][1], 'tone-' + tone[1]);
                                $("<style type='text/css'> ." + "tone-" + tone[1] + "{ color:" + tone_color + "} </style>").appendTo("head");
                            });
                        }
                    });

        });
    }
})();