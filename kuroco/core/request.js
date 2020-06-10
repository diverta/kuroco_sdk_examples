/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore-start
import { OpenAPI } from './OpenAPI';
// @ts-ignore-end
import { getFormData } from './getFormData';
import { getQueryString } from './getQueryString';
import { requestUsingFetch } from './requestUsingFetch';
/**
 * Create the request.
 * @param options Request method options.
 * @returns Result object (see above)
 */
export function request(options) {
    return __awaiter(this, void 0, void 0, function* () {
        // Escape path (RFC3986) and create the request URL
        let path = options.path.replace(/[:]/g, '_');
        let url = `${OpenAPI.BASE}${path}`;
        // Create request headers
        const headers = new Headers(Object.assign(Object.assign({}, options.headers), { Accept: 'application/json', 'content-type': 'application/json' }));
        // Create request settings
        const request = {
            headers,
            method: options.method,
            credentials: 'include',
        };
        // Add the query parameters (if defined).
        if (options.query) {
            url += getQueryString(options.query);
        }
        // Append formData as body
        if (options.formData) {
            request.body = getFormData(options.formData);
        }
        else if (options.body) {
            // If this is blob data, then pass it directly to the body and set content type.
            // Otherwise we just convert request data to JSON string (needed for fetch api)
            if (options.body instanceof Blob) {
                request.body = options.body;
                if (options.body.type) {
                    headers.set('Content-Type', options.body.type);
                }
            }
            else {
                request.body = JSON.stringify(options.body);
                headers.set('Content-Type', 'application/json');
            }
        }
        try {
            return yield requestUsingFetch(url, request, options.responseHeader);
        }
        catch (error) {
            return {
                url,
                ok: false,
                status: 0,
                statusText: '',
                body: error,
            };
        }
    });
}
