import { UAParser } from 'ua-parser-js';

import { UserAgentInterface } from '../interface/user-agent.interface';
export function parseUserAgent(userAgent: string, ip: string): UserAgentInterface {
    const result = UAParser(userAgent);
    return {
        ip,
        browser: result.browser.toString(),
        os: result.os.toString(),
        userAgent,
    };
}
