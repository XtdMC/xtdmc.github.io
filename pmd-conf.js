const conf = {
  info: {
    /*浏览器语言检测覆写*/
    lang: "zh-hans",
    /*启用建站时长计时 [是否启用t/f,年,月,日]*/
    time:[true,2021,8,9],
    /*左侧边栏·一言*/
    saying: `服务器仅寒暑假开放哦~`,
    licen: {
      /*文章授权协议*/
      what: `未经许可禁止转载`,
      /*文章授权协议链接*/
      link: `https://w.xtdmc.top/licen`,
    },
    /*自定义CSS样式*/
    style: ``,
    /*允许将正文内的View on Github按钮转移*/
    view_on_github: false,
    /*Baidu站长统计JS地址（hm那一行的URL），为空禁用*/
    baidu: "",
    /*Google站长统计JS地址，为空禁用*/
    google: "",
  },
  code: {
  /*在代码块下方添加复制代码按钮*/
    enabled: true,
    /*代码块复制按钮默认文本*/
    tip: "Copy",
    /*代码块复制按钮点击后文本*/
    done: "Copied!",
  },
  img: {
    /*允许点击图片来查看原图*/
    view: true,
    imgse_com: {
      /*启用查看原图对imgse图床的优化*/
      enabled: true,
      /*启用查看原图 跳转至imgse查看页而不是源文件*/
      detail: true,
    },
    /*图片加载失败后的占位符图片*/
    error: "https://www.xunhaii.com/xtdmc/image/load_err.svg",
    background: {
      /*背景图片（自动应用不透明遮罩）*/
      src: "https://www.xunhaii.com/xtdmc/image/bg.png",
      /*背景图片遮罩透明度，分别为亮色和暗色遮罩，范围0~1*/
      alpha: [0.8, 0.82],
      /*背景图片模糊度，为-1禁用*/
      blur: 10,
    },
  },
  sidebar: {
    solt_1: {
      /*左侧边栏·第1格·背景图片*/
      src: `https://www.xunhaii.com/xtdmc/image/head.png`,
      /*左侧边栏·第1格·背景图片描述*/
      alt: `PotatoL`,
      /*左侧边栏·第1格·描述文案背景，依次亮色透明度、暗色透明度、亮色模糊度、暗色模糊度*/
      background: [0.8, 0.82, -1, -1],
      /*左侧边栏·第1格·图片标题（悬浮提示内容）*/
      title: "小土豆某一周目的结档合影",
    },
    solt_2: {
      /*左侧边栏·第2格内容*/
      innerHTML:`
<s-chip id="side_ship_0" onclick="openURL('/','')" clickable="true" class="sidebar_btn">
<s-icon slot="start" name="home"></s-icon>
首页</s-chip>`,
      /*左侧边栏·第2格内容中没有按文档编写请启用此项*/
      preventDefault: false,
    },
    /*自定义边栏内容，禁用保持留空*/
    replacement: ``,
  },
  copy: {
  },
  hyper_markdown: {/*如果用不到这里的特性关掉可以加快加载*/
    /*在标题的最后添加一个按钮以复制链接指向这个标题*/
    header_link: true,
    /*在页面底端增加文章脚注，为空不额外添加*/
    footer: `<small>Copyright © 2025, PotatoL.<br>本站点和服务器与Mojang Studio、Microsoft、网易Netease均没有关联。</small>`,
    /*检查引用部分高级语法，详见文档*/
    quotepro: [true,`#1A73E7`,`#FBC116`,`#E23B2E`,`#30C496`],
  },
  link: {
    arrow: {
      /*为所有在新标签页打开的链接添加右上箭头*/
      enabled: true,
      /*仅对含有 ↗ 或 $ 的链接生效*/
      replace: true,
      /*如果链接含有 ฿ 则将其修改为新标签页打开*/
      target_replace: true,
      /*外链图标*/
      icon: `<s-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path></svg></s-icon>`,
    },
  },
  index: {
    /*启用目录统计，高级用法详见文档*/
    enabled: true,
    /*启用目录索引侧栏*/
    sidebar: true,
  },
};
/*在复制的文本结尾追加文字，见文档*/
conf.copy.endnote = ` ‖ 来自[%ETITLE%](%LINK%)，以${conf.info.licen.what}协议授权。`;