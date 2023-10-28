let routes;

//popstate 이벤트는 뒤로가기 이벤트임

export const goto = (url, { push, initialData } = {}) => {
  const pathname = url.split("?")[0]; // "/" | "/search" | ..
  const params = Object.fromEntries(new URLSearchParams(url.split("?")[1]));

  if (routes[pathname]) {
    if (push) {
      history.pushState({}, "", url);
    }
    //routers 객체가 맞는 key의 함수를 실행
    routes[pathname]({
      searchParams: params,
      initialData,
    });
    return;
  }
  location.href = url;
};

export const start = (params) => {
  routes = params.routes;
  window.addEventListener("popstate", (e) => {
    if (routes[pathname]) {
      routes[pathname]();
      return;
    }
  });
  goto(location.pathname + location.search, {
    initialData: window.__INITIAL_DATA__,
  });
};
