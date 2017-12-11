/*
        Chinese Personalized Colors - A tone colorizer
        Copyright (C) 2017 Andrew Alexander
        
        ---
        
        Originally based on Zhongwen - A Chinese-English Popup Dictionary
        Copyright (C) 2011 Christian Schiller
        https://chrome.google.com/extensions/detail/kkmlkkjojmombglmlpbpapmhcaljjkde

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

chrome.extension.onRequest.addListener(function(request, sender, response) {
    switch(request.type) {
        case 'search':
            var e = zhongwenMain.search(request.text);
            response(e);
            break;
        default:
    // ignore
    }
});