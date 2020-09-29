	{"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../.tmp/index.ts"],"names":[],"mappings":"AAKA,OAAO,EAAE,QAAQ,EAAE,MAAM,iBAAiB,CAAC;AAC3C,OAAO,EAAE,SAAS,EAAE,MAAM,kBAAkB,CAAC;AAC7C,OAAO,EAAE,OAAO,EAAE,MAAM,gBAAgB,CAAC;AACzC,OAAO,EAAE,IAAI,EAAE,MAAM,aAAa,CAAC;AACnC,OAAO,EAAE,YAAY,EAAE,MAAM,qBAAqB,CAAC;AAEnD,OAAO,EAAE,OAAO,IAAI,WAAW,EAAE,MAAM,qBAAqB,CAAC;AAK7D,OAAO,EAAE,UAAU,EAAE,MAAM,uBAAuB,CAAC"}

	export { ApiError } from './core/ApiError';
	export { isSuccess } from './core/isSuccess';
	export { OpenAPI } from './core/OpenAPI';
	export { Auth } from './core/Auth';
	export { LocalStorage } from './core/LocalStorage';
	export { default as firebaseApp } from './core/FirebaseUtil';
	export { ApiService } from './services/ApiService';
	//# sourceMappingURL=index.d.ts.map

	{"version":3,"file":"ApiError.d.ts","sourceRoot":"","sources":["../../.tmp/core/ApiError.ts"],"names":[],"mappings":"AAMA,OAAO,EAAE,MAAM,EAAE,MAAM,UAAU,CAAC;AAElC,qBAAa,QAAS,SAAQ,KAAK;IAC/B,SAAgB,GAAG,EAAE,MAAM,CAAC;IAC5B,SAAgB,MAAM,EAAE,MAAM,CAAC;IAC/B,SAAgB,UAAU,EAAE,MAAM,CAAC;IACnC,SAAgB,IAAI,EAAE,GAAG,CAAC;gBAEd,MAAM,EAAE,QAAQ,CAAC,MAAM,CAAC,EAAE,OAAO,EAAE,MAAM;CAQxD;AAED,yBAAiB,QAAQ,CAAC;IACtB,KAAY,OAAO;QACf,WAAW,gBAAgB;QAC3B,YAAY,iBAAiB;QAC7B,SAAS,cAAc;QACvB,SAAS,cAAc;QACvB,qBAAqB,0BAA0B;QAC/C,WAAW,gBAAgB;QAC3B,mBAAmB,wBAAwB;QAC3C,aAAa,kBAAkB;KAClC;CACJ;AAED;;;GAGG;AACH,wBAAgB,iBAAiB,CAAC,MAAM,EAAE,MAAM,GAAG,IAAI,CAqBtD"}

	export class ApiError extends Error {
	    readonly url: string;
	    readonly status: number;
	    readonly statusText: string;
	    readonly body: any;
	    constructor(result: Readonly<Result>, message: string);
	}
	export namespace ApiError {
	    enum Message {
	        BAD_REQUEST = "Bad Request",
	        UNAUTHORIZED = "Unauthorized",
	        FORBIDDEN = "Forbidden",
	        NOT_FOUND = "Not Found",
	        INTERNAL_SERVER_ERROR = "Internal Server Error",
	        BAD_GATEWAY = "Bad Gateway",
	        SERVICE_UNAVAILABLE = "Service Unavailable",
	        GENERIC_ERROR = "Generic Error"
	    }
	}
	/**
	 * Catch common errors (based on status code).
	 * @param result
	 */
	export function catchGenericError(result: Result): void;
	//# sourceMappingURL=ApiError.d.ts.map

	{"version":3,"file":"Auth.d.ts","sourceRoot":"","sources":["../../.tmp/core/Auth.ts"],"names":[],"mappings":"AAMA,OAAO,EAAE,MAAM,EAAE,MAAM,UAAU,CAAC;AAOlC,eAAO,MAAM,iBAAiB;;;;CAI7B,CAAA;AAED,qBAAa,IAAI;WACO,KAAK,CAAC,KAAK,EAAE,GAAG;WAOhB,MAAM,CAAC,KAAK,EAAE,GAAG;WAMjB,WAAW,CAAC,KAAK,EAAE,GAAG;WAItB,YAAY,CAAC,SAAS,EAAE,MAAM,OAAO,CAAC,MAAM,CAAC,EAAE,MAAM,EAAE,MAAM;CAsBpF;AAED,yBAAiB,IAAI,CAAC;IACX,IAAI,cAAc,EAAE,CAAC,MAAM,EAAE,MAAM,KAAK,OAAO,CAAC,IAAI,CAA8B,CAAC;CAC7F;AAED,MAAM,WAAW,aAAa;IAC1B,WAAW,EAAE,MAAM,CAAC;IACpB,MAAM,EAAE,MAAM,CAAC;IACf,IAAI,EAAE,GAAG,CAAC;IACV,QAAQ,EAAE,MAAM,EAAE,CAAC;IACnB,MAAM,EAAE,MAAM,EAAE,CAAC;CACpB;AAED,MAAM,WAAW,aAAa;IAC1B,YAAY,EAAE,MAAM,CAAC;IACrB,aAAa,EAAE,MAAM,CAAC;CACzB"}

	export const SpecialOperations: {
	    login: null;
	    logout: null;
	    token: null;
	};
	export class Auth {
	    static login(param: any): Promise<void>;
	    static logout(param: any): Promise<void>;
	    static createToken(param: any): Promise<void>;
	    static retryRequest(requestFn: () => Promise<Result>, result: Result): Promise<Result<any>>;
	}
	export namespace Auth {
	    let onErrorHandler: (result: Result) => Promise<void>;
	}
	export interface LoginResponse {
	    grant_token: string;
	    status: number;
	    info: any;
	    messages: string[];
	    errors: string[];
	}
	export interface TokenResponse {
	    access_token: string;
	    refresh_token: string;
	}
	//# sourceMappingURL=Auth.d.ts.map

	{"version":3,"file":"FirebaseUtil.d.ts","sourceRoot":"","sources":["../../.tmp/core/FirebaseUtil.ts"],"names":[],"mappings":"AAKA,OAAO,KAAK,QAAQ,MAAM,cAAc,CAAC;;AAYzC,wBAAsD"}

	import * as firebase from 'firebase/app';
	const _default: firebase.app.App;
	export default _default;
	//# sourceMappingURL=FirebaseUtil.d.ts.map

	{"version":3,"file":"LocalStorage.d.ts","sourceRoot":"","sources":["../../.tmp/core/LocalStorage.ts"],"names":[],"mappings":"AAKA,qBAAa,YAAY;IACrB,UAAU;WACI,cAAc;WAId,eAAe;IAK7B,UAAU;WACI,cAAc,CAAC,KAAK,EAAE,MAAM;WAG5B,eAAe,CAAC,KAAK,EAAE,MAAM;IAI3C,aAAa;WACC,iBAAiB;WAGjB,kBAAkB;WAGlB,YAAY;CAI7B;AAED,yBAAiB,YAAY,CAAC;IAC1B,KAAY,SAAS;QACjB,WAAW,gBAAgB;QAC3B,YAAY,iBAAiB;KAChC;CACJ"}

	export class LocalStorage {
	    /** get */
	    static getAccessToken(): string;
	    static getRefreshToken(): string;
	    /** set */
	    static setAccessToken(token: string): void;
	    static setRefreshToken(token: string): void;
	    /** delete */
	    static deleteAccessToken(): void;
	    static deleteRefreshToken(): void;
	    static deleteTokens(): void;
	}
	export namespace LocalStorage {
	    enum TokenKeys {
	        accessToken = "accessToken",
	        refreshToken = "refreshToken"
	    }
	}
	//# sourceMappingURL=LocalStorage.d.ts.map

	{"version":3,"file":"OpenAPI.d.ts","sourceRoot":"","sources":["../../.tmp/core/OpenAPI.ts"],"names":[],"mappings":"AAKA,UAAU,MAAM;IACZ,QAAQ,EAAE,MAAM,CAAC;IACjB,IAAI,EAAE,MAAM,CAAC;IACb,OAAO,EAAE,MAAM,CAAC;IAChB,KAAK,EAAE,MAAM,CAAC;IACd,QAAQ,EAAE;QAAE,CAAC,WAAW,EAAE,MAAM,GAAG,MAAM,CAAA;KAAE,CAAC;CAC/C;AAED,eAAO,MAAM,OAAO,EAAE,MAYrB,CAAC"}

	interface Config {
	    SAML_URL: string;
	    BASE: string;
	    VERSION: string;
	    TOKEN: string;
	    SECURITY: {
	        [definedName: string]: object;
	    };
	}
	export const OpenAPI: Config;
	export {};
	//# sourceMappingURL=OpenAPI.d.ts.map

	{"version":3,"file":"RequestOptions.d.ts","sourceRoot":"","sources":["../../.tmp/core/RequestOptions.ts"],"names":[],"mappings":"AAKA,MAAM,WAAW,cAAc;IAC3B,MAAM,EAAE,KAAK,GAAG,KAAK,GAAG,MAAM,GAAG,QAAQ,GAAG,SAAS,GAAG,MAAM,GAAG,OAAO,CAAC;IACzE,IAAI,EAAE,MAAM,CAAC;IACb,OAAO,CAAC,EAAE;QAAE,CAAC,GAAG,EAAE,MAAM,GAAG,GAAG,CAAA;KAAE,CAAC;IACjC,OAAO,CAAC,EAAE;QAAE,CAAC,GAAG,EAAE,MAAM,GAAG,GAAG,CAAA;KAAE,CAAC;IACjC,KAAK,CAAC,EAAE;QAAE,CAAC,GAAG,EAAE,MAAM,GAAG,GAAG,CAAA;KAAE,CAAC;IAC/B,QAAQ,CAAC,EAAE;QAAE,CAAC,GAAG,EAAE,MAAM,GAAG,GAAG,CAAA;KAAE,CAAC;IAClC,IAAI,CAAC,EAAE,GAAG,CAAC;IACX,cAAc,CAAC,EAAE,MAAM,CAAC;CAC3B"}

	export interface RequestOptions {
	    method: 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch';
	    path: string;
	    cookies?: {
	        [key: string]: any;
	    };
	    headers?: {
	        [key: string]: any;
	    };
	    query?: {
	        [key: string]: any;
	    };
	    formData?: {
	        [key: string]: any;
	    };
	    body?: any;
	    responseHeader?: string;
	}
	//# sourceMappingURL=RequestOptions.d.ts.map

	{"version":3,"file":"Result.d.ts","sourceRoot":"","sources":["../../.tmp/core/Result.ts"],"names":[],"mappings":"AAKA,MAAM,WAAW,MAAM,CAAC,CAAC,GAAG,GAAG;IAC3B,GAAG,EAAE,MAAM,CAAC;IACZ,EAAE,EAAE,OAAO,CAAC;IACZ,MAAM,EAAE,MAAM,CAAC;IACf,UAAU,EAAE,MAAM,CAAC;IACnB,IAAI,EAAE,CAAC,CAAC;CACX"}

	export interface Result<T = any> {
	    url: string;
	    ok: boolean;
	    status: number;
	    statusText: string;
	    body: T;
	}
	//# sourceMappingURL=Result.d.ts.map

	{"version":3,"file":"getFormData.d.ts","sourceRoot":"","sources":["../../.tmp/core/getFormData.ts"],"names":[],"mappings":"AAKA;;;;GAIG;AACH,wBAAgB,WAAW,CAAC,MAAM,EAAE;IAAE,CAAC,GAAG,EAAE,MAAM,GAAG,GAAG,CAAA;CAAE,GAAG,QAAQ,CAWpE"}

	/**
	 * Get FormData from object. This method is needed to upload
	 * multipart form data to the REST API.
	 * @param params Key value based object.
	 */
	export function getFormData(params: {
	    [key: string]: any;
	}): FormData;
	//# sourceMappingURL=getFormData.d.ts.map

	{"version":3,"file":"getQueryString.d.ts","sourceRoot":"","sources":["../../.tmp/core/getQueryString.ts"],"names":[],"mappings":"AAKA;;;;GAIG;AACH,wBAAgB,cAAc,CAAC,MAAM,EAAE;IAAE,CAAC,GAAG,EAAE,MAAM,GAAG,GAAG,CAAA;CAAE,GAAG,MAAM,CAoBrE"}

	/**
	 * Get query string from query parameters object. This method also
	 * supports multi-value items by creating a key for each item.
	 * @param params Key value based object.
	 */
	export function getQueryString(params: {
	    [key: string]: any;
	}): string;
	//# sourceMappingURL=getQueryString.d.ts.map

	{"version":3,"file":"isSuccess.d.ts","sourceRoot":"","sources":["../../.tmp/core/isSuccess.ts"],"names":[],"mappings":"AAKA;;;GAGG;AACH,wBAAgB,SAAS,CAAC,MAAM,EAAE,MAAM,GAAG,OAAO,CAEjD"}

	/**
	 * Check success response code.
	 * @param status Status code
	 */
	export function isSuccess(status: number): boolean;
	//# sourceMappingURL=isSuccess.d.ts.map

	{"version":3,"file":"request.d.ts","sourceRoot":"","sources":["../../.tmp/core/request.ts"],"names":[],"mappings":"AAWA,OAAO,EAAE,cAAc,EAAE,MAAM,kBAAkB,CAAC;AAElD,OAAO,EAAE,MAAM,EAAE,MAAM,UAAU,CAAC;AAElC;;;;GAIG;AACH,wBAAsB,OAAO,CAAC,CAAC,EAAE,OAAO,EAAE,QAAQ,CAAC,cAAc,CAAC,GAAG,OAAO,CAAC,MAAM,CAAC,CAAC,CAAC,CAAC,CAoDtF"}

	/**
	 * Create the request.
	 * @param options Request method options.
	 * @returns Result object (see above)
	 */
	export function request<T>(options: Readonly<RequestOptions>): Promise<Result<T>>;
	//# sourceMappingURL=request.d.ts.map

	{"version":3,"file":"requestUsingFetch.d.ts","sourceRoot":"","sources":["../../.tmp/core/requestUsingFetch.ts"],"names":[],"mappings":"AAKA,OAAO,EAAE,MAAM,EAAE,MAAM,UAAU,CAAC;AA2ClC;;;;;;;GAOG;AACH,wBAAsB,iBAAiB,CAAC,GAAG,EAAE,MAAM,EAAE,OAAO,EAAE,QAAQ,CAAC,WAAW,CAAC,EAAE,cAAc,CAAC,EAAE,MAAM,GAAG,OAAO,CAAC,MAAM,CAAC,CAgB7H"}

	/**
	 * Request content using the new Fetch API. This is the default API that is used and
	 * is create for all JSON, XML and text objects. However it is limited to UTF-8.
	 * This is a problem for some of the Docs content, since that requires UTF-16!
	 * @param url The url to request.
	 * @param request The request object, containing method, headers, body, etc.
	 * @param responseHeader The header we want to parse.
	 */
	export function requestUsingFetch(url: string, request: Readonly<RequestInit>, responseHeader?: string): Promise<Result>;
	//# sourceMappingURL=requestUsingFetch.d.ts.map

	{"version":3,"file":"Dictionary.d.ts","sourceRoot":"","sources":["../../.tmp/models/Dictionary.ts"],"names":[],"mappings":"AAKA,oBAAY,UAAU,CAAC,CAAC,IAAI;IACxB,CAAC,GAAG,EAAE,MAAM,GAAG,CAAC,CAAC;CACpB,CAAA"}

	export type Dictionary<T> = {
	    [key: string]: T;
	};
	//# sourceMappingURL=Dictionary.d.ts.map

	{"version":3,"file":"ApiService.d.ts","sourceRoot":"","sources":["../../.tmp/services/ApiService.ts"],"names":[],"mappings":"AASA,OAAO,EAAE,MAAM,EAAE,MAAM,gBAAgB,CAAC;AAExC,qBAAa,UAAU;IACnB;;;;;;;;;;OAUG;WACiB,yBAAyB,CAAC,YAAY,EAAE,UAAU,CAAC,gCAAgC,GAAG,OAAO,CAAC,MAAM,CAAC,GAAG,CAAC,CAAC;CA4BjI;AAED,yBAAiB,UAAU,CAAC;IACxB,UAAiB,gCAAgC;QAC7C,YAAY,CAAC,EAAE,MAAM,CAAC;QACtB,IAAI,CAAC,EAAE,MAAM,CAAC;QACd,OAAO,CAAC,EAAE,MAAM,CAAC;KACpB;IACD,KAAY,iCAAiC,GAAG,GAAG,CAAC;CACvD"}

	export class ApiService {
	    /**
	     *
	     * ### **Api::list (v1)**
	     *
	     * for testing security
	     * @param outputFormat Format (json|xml|csv)
	     * @param lang Language
	     * @param charset Charset
	     * @result any
	     * @throws ApiError
	     */
	    static getApiServiceRcmsApi3Test(requestParam: ApiService.getApiServiceRcmsApi3TestRequest): Promise<Result<any>>;
	}
	export namespace ApiService {
	    interface getApiServiceRcmsApi3TestRequest {
	        outputFormat?: string;
	        lang?: string;
	        charset?: string;
	    }
	    type getApiServiceRcmsApi3TestResponse = any;
	}
	//# sourceMappingURL=ApiService.d.ts.map

