export function getCookie(name) {
    const result = name.replace(/([.$?*|{}()[]\\\/\+^])/g, '\\$1');
    const matches = document.cookie.match(new RegExp(
      `(?:^|; )${result}=([^;]*)`,
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
  export function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
    document.cookie = updatedCookie;
  }
  
  export function deleteCookie(name) {
    const isCookie = getCookie(name);
    if (isCookie) {
      document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }