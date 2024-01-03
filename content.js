"use strict";

// 监听 DOM 变化
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      // 隐藏左下角的头像、昵称和 ID
      document.querySelectorAll(`div[data-testid="SideNav_AccountSwitcher_Button"]`).forEach(elem => elem.style.display = 'none');
      
      // 隐藏左侧个人资料菜单
      document.querySelectorAll(`a[data-testid="AppTabBar_Profile_Link"]`).forEach(elem => elem.style.display = 'none');

      // 获取 Twitter ID
      const twitterIdElement = document.querySelector(`a[data-testid="AppTabBar_Profile_Link"]`);
      if (twitterIdElement) {
        const twitterId = twitterIdElement.href.split("/").pop();
        
        // 隐藏时间线上方的头像
        const aboveElement = `div[data-testid="UserAvatar-Container-${twitterId}"]`;
        document.querySelectorAll(aboveElement).forEach(elem => elem.style.display = 'none');
      }
    }
  });
});

// 开始观察文档
observer.observe(document, { childList: true, subtree: true });