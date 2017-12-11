/*
        Zhongwen - A Chinese-English Popup Dictionary
        Copyright (C) 2011 Christian Schiller
        https://chrome.google.com/extensions/detail/kkmlkkjojmombglmlpbpapmhcaljjkde

        ---

        Originally based on Rikaikun 0.8
        Copyright (C) 2010 Erek Speed
        http://code.google.com/p/rikaikun/

        ---

        Originally based on Rikaichan 1.07
        by Jonathan Zarate
        http://www.polarcloud.com/

        ---

        Originally based on RikaiXUL 0.4 by Todd Rudick
        http://www.rikai.com/
        http://rikaixul.mozdev.org/

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
var zhongwenMain = {

    loadDictionary: function() {
        if (!this.dict) {
            try {
                this.dict = new zhongwenDict();
            }
            catch (ex) {
                alert('Error loading dictionary: ' + ex);
                return false;
            }
        }
        return true;
    },

    search: function(text) {
        this.loadDictionary();

        var entry = this.dict.wordSearch(text);
        if (entry != null) {
            for (var i = 0; i < entry.data.length; i++) {
                var word = entry.data[i][1];
            }
        }
        return entry;
    }
};
