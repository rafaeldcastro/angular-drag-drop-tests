import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    
    static cloneObject(obj: any): any{
        return JSON.parse( JSON.stringify( obj ) );
    }

    /*
    You would call this when receiving a plain text
    value back from an API, and before inserting the
    text into the `contenteditable` area on a page.
    */
    static convertToMarkup(str: string): string {
        return UtilsService.convertToText(str).replace(/\n/g, '<br>');
    }

    private static convertToText(str: string): string {
        //Ensure string
        let value = String(str);

        // Convert encoding.
        value = value.replace(/&nbsp;/gi, ' ');
        value = value.replace(/&amp;/gi, '&');

        // Replace `<br>`.
        value = value.replace(/<br>/gi, '\n');

        // Replace `<div>` (from Chrome).
        value = value.replace(/<div>/gi, '\n');

        // Replace `<p>` (from IE).
        value = value.replace(/<p>/gi, '\n');

        // Remove extra tags.
        value = value.replace(/<(.*?)>/g, '');

        // Trim each line.
        value = value
            .split('\n')
            .map((line = '') => {
                return line.trim();
            })
            .join('\n');

        // No more than 2x newline, per "paragraph".
        value = value.replace(/\n\n+/g, '\n\n');

        // Clean up spaces.
        value = value.replace(/[ ]+/g, ' ');
        value = value.trim();

        return value;
    }

    /**
     * Remove empty break lines(\n) from start/end of strings using regex
     * @param str "Lorem ipsum\n\n"
     * @returns String without empty break lines at the end
     */
    static removeFreelyBreaklines(str: string): string {
        return str.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g, "");
    }
}

